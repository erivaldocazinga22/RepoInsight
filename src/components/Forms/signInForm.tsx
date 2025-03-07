"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Lock } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignInRequest, signInSchema } from "@/models/auth.model";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

export const SignInForm = () => {
	const form = useForm<SignInRequest>({
		mode: "all",
		criteriaMode: "firstError",
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const handleSignIn = async (data: SignInRequest) => {
		const result = await signIn("credentials", {
			redirect: false,
			email: data.email,
			password: data.password
		})

        if (result?.error) {
			toast("Credenciais inválidas")
        } else {
            window.location.href = "/"
        }
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-6">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-foreground">Email</FormLabel>
							<FormControl>
								<Input
									placeholder="john.doe@exemplo.com"
									autoComplete="email"
									type="email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-foreground">Senha</FormLabel>
							<FormControl>
								<Input placeholder="Digite sua senha" type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="relative flex w-full justify-center rounded-md bg-gradient-to-l to-purple-600 from-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 group"
				>
					<div className="absolute w-7 h-7 left-2 top-1/2 -translate-y-1/2 rounded-full hidden group-hover:flex items-center justify-center bg-white/20">
						<Lock className="opacity-60" />
					</div>
					Entrar
				</Button>
			</form>
		</Form>
	);
};
