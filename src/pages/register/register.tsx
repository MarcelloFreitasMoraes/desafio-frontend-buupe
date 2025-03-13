import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../auth/useStore";
import { CircleSmall, CircleCheckBig, CircleX, MoveLeft } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const registerSchema = z
  .object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido").nonempty("O e-mail é obrigatório"),
    password: z
      .string()
      .min(12, "A senha deve ter pelo menos 12 caracteres")
      .max(40, "A senha deve ter no máximo 40 caracteres")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Must contain at least one capital letter")
      .regex(/[0-9]/, "Must contain at least one digit (0-9)")
      .regex(/[\W_]/, "Must contain at least one special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const { register: registerUser } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const validateLowerCase = /[a-z]/.test(password || "");
  const validateUpperCase = /[A-Z]/.test(password || "");
  const validateNumber = /[0-9]/.test(password || "");
  const validateSpecialChar = /[\W_]/.test(password || "");
  const validateLength = password ? password.length >= 12 && password.length <= 40 : false;
  const isPasswordValid = confirmPassword && password && password === confirmPassword;

  const onSubmit = async ({ name, email, password }: RegisterFormData) => {
    await registerUser(name, email, password);
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url(/bg-login.gif)] bg-no-repeat bg-cover p-8 gap-8">
      <Card className="p-4 bg-white">
          <CardTitle>Create new account</CardTitle>
          <CardDescription>Fill in the information below!</CardDescription>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
        <Label>Name</Label>
          <Input className='border-t border-gray-300 bg-white' {...register("name")} 
          // error={errors.name?.message}
           required/>
          <Label>Email</Label>
          <Input className='border-t border-gray-300 bg-white' {...register("email")} 
          // error={errors.email?.message} 
          required />
          <Label>Password</Label>
          <Input className='border-t border-gray-300 bg-white'
            type="password"
            {...register("password")}
            // error={errors.password?.message}
            required
          />
           <Label>Confirm password</Label>
          <Input className='border-t border-gray-300 bg-white'  type="password" required {...register("confirmPassword")} 
          // error={errors.confirmPassword?.message} 
          />

          <Button type="submit" variant="outline" className="bg-black text-white">
            To create
          </Button>

          <div className="flex gap-2 items-center cursor-pointer" onClick={() => navigate("/login")}>
            <MoveLeft />
            <p>Return to login screen</p>
          </div>          
        </form>
        <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-1 items-center">
              {isPasswordValid ? (validateLowerCase ? <CircleCheckBig className="text-green-600" /> : <CircleX />) : <CircleSmall />}
              <p className="text-black text-sm">Must contain at least one lowercase letter</p>
            </div>
            <div className="flex gap-1 items-center">
              {isPasswordValid ? (validateUpperCase ? <CircleCheckBig className="text-green-600" /> : <CircleX className="text-red-500" />) : <CircleSmall />}
              <p className="text-black text-sm">Must contain at least one capital letter</p>
            </div>
            <div className="flex gap-1 items-center">
              {isPasswordValid ? (validateNumber ? <CircleCheckBig className="text-green-600" /> : <CircleX className="text-red-500" />) : <CircleSmall />}
              <p className="text-black text-sm">Must contain at least one digit (0-9)</p>
            </div>
            <div className="flex gap-1 items-center">
              {isPasswordValid ? (validateSpecialChar ? <CircleCheckBig className="text-green-600" /> : <CircleX className="text-red-500" />) : <CircleSmall />}
              <p className="text-black text-sm">Must contain at least one special character</p>
            </div>
            <div className="flex gap-1 items-center">
              {isPasswordValid ? (validateLength ? <CircleCheckBig className="text-green-600" /> : <CircleX className="text-red-500" />) : <CircleSmall />}
              <p className="text-black text-sm">Must be between 12 and 40 characters long</p>
            </div>
          </div>
      </Card>
    </div>
  );
};

export default Register;
