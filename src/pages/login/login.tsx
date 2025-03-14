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
  email: z
    .string()
    .nonempty("Email é obrigatório")
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Email inválido"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async ({ email, password }: LoginFormData) => {
    const success = await login(email, password);
    if (success) {
      navigate("/products");
    } else {
      toast("Incorrect email or password!")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url(/bg-login.gif)] bg-no-repeat bg-cover p-8">
      <Card className="p-8 bg-white">
        <CardTitle>Bem vindo!</CardTitle>
        <CardDescription>Faça o login para acessar o sitema!</CardDescription>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-96">
          <Label>Login</Label>
          <Input
            className='border-t border-gray-300 bg-white'
            placeholder="Digite seu email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Label>Senha</Label>
          <Input
            className='border-t border-gray-300 bg-white'
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
            error={errors.password?.message}
          />

          <Button type="submit" variant="outline" className="bg-black text-white cursor-pointer">
            Entrar
          </Button>

          <p className="text-black text-sm">
            {' '}  Não tem uma conta? <Link to="/register" className="text-red-500">Criar uma conta!</Link>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default Login;
