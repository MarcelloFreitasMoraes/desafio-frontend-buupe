import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../auth/useStore";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async ({ email, password }: LoginFormData) => {
    const success = await login(email, password);
    if (success) {
      navigate("/products");
    } else {
      toast("Incorrect email or password!")
      // showToast("Incorrect email or password!")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url(/bg-login.gif)] bg-no-repeat bg-cover p-8">
      <Card className="p-4 bg-white">
        <CardTitle>Bem vindo!</CardTitle>
        <CardDescription>Log in to access the system!</CardDescription>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-96">
          <Label>Login</Label>
          <Input
            className='border-t border-gray-300 bg-white'
            placeholder="Enter email"
            {...register("email")}
          // // error={errors.email?.message}
          />
          <Label>Password</Label>
          <Input
            className='border-t border-gray-300 bg-white'
            type="password"
            placeholder="Enter password"
            {...register("password")}
          // // error={errors.password?.message}
          />

          <Button type="submit" variant="outline" className="bg-black text-white cursor-pointer">
            Sign in
          </Button>

          <p className="text-black text-sm">
            {' '}  Don't have an account? <Link to="/register" className="text-red-500">Create account!</Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
