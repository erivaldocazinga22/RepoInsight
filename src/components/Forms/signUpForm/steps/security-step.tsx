"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Key, Lock } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import type { SignUpRequest } from "@/models/auth.model";
import { motion } from "framer-motion";
import { calculatePasswordStrength, cn } from "@/lib/utils";
import { StepIndicator } from "./step-indicator";
import { PasswordStrengthMeter } from "@/components/password-strength-meter";
import type { ISignUpMultiFormSteps } from "@/statics/steps";

interface SecurityStepProps {
	form: UseFormReturn<SignUpRequest>;
	steps: ISignUpMultiFormSteps[];
	currentStep: number;
}

export function SecurityStep({ form, steps, currentStep }: SecurityStepProps) {
	const password = form.watch("password");
	const passwordStrength = calculatePasswordStrength(password);

	return (
		<motion.div
			key="step2"
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			transition={{ duration: 0.3 }}
			className="space-y-4"
		>
			<div className="text-center mb-6">
				<Key size={34} className="mx-auto mb-4" />
				<h2 className="text-xl font-semibold">Segurança da Conta</h2>
				<p className="text-sm text-muted-foreground mt-1">Crie uma senha forte para proteger sua conta</p>
			</div>

			<StepIndicator steps={steps} currentStep={currentStep} />

			<FormField
				control={form.control}
				name="password"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-foreground flex items-center">
							Senha <span className="text-red-500 ml-1">*</span>
						</FormLabel>
						<div className="relative">
							<Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
							<FormControl>
								<Input placeholder="••••••••" type="password" className="pl-10" {...field} />
							</FormControl>
						</div>
						<PasswordStrengthMeter strength={passwordStrength} />
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="confirmPassword"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-foreground flex items-center">
							Confirmar Senha <span className="text-red-500 ml-1">*</span>
						</FormLabel>
						<div className="relative">
							<Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
							<FormControl>
								<Input placeholder="••••••••" type="password" className="pl-10" {...field} />
							</FormControl>
						</div>
						<FormMessage />
					</FormItem>
				)}
			/>

			<div className="text-xs text-muted-foreground mt-4">
				<span className="text-red-500">*</span> Campos obrigatórios
			</div>

			<div className="bg-neutral-800/50 p-3 rounded-lg border border-neutral-700 text-sm">
				<p className="font-medium mb-2">Sua senha deve conter:</p>
				<ul className="space-y-1">
					<li
						className={cn(
							"flex items-center gap-2",
							password?.length >= 8 ? "text-green-500" : "text-muted-foreground"
						)}
					>
						<CheckCircle2 className="h-4 w-4" />
						<span>Pelo menos 8 caracteres</span>
					</li>
					<li
						className={cn(
							"flex items-center gap-2",
							/[A-Z]/.test(password || "") ? "text-green-500" : "text-muted-foreground"
						)}
					>
						<CheckCircle2 className="h-4 w-4" />
						<span>Uma letra maiúscula</span>
					</li>
					<li
						className={cn(
							"flex items-center gap-2",
							/[0-9]/.test(password || "") ? "text-green-500" : "text-muted-foreground"
						)}
					>
						<CheckCircle2 className="h-4 w-4" />
						<span>Um número</span>
					</li>
					<li
						className={cn(
							"flex items-center gap-2",
							/[^a-zA-Z0-9]/.test(password || "") ? "text-green-500" : "text-muted-foreground"
						)}
					>
						<CheckCircle2 className="h-4 w-4" />
						<span>Um caractere especial</span>
					</li>
				</ul>
			</div>
		</motion.div>
	);
}
