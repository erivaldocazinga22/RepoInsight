"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Info, Mail, User } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import type { SignUpRequest } from "@/models/auth.model";
import { motion } from "framer-motion";
import { StepIndicator } from "./step-indicator";
import type { ISignUpMultiFormSteps } from "@/statics/steps";

interface PersonalInfoStepProps {
	form: UseFormReturn<SignUpRequest>;
	steps: ISignUpMultiFormSteps[];
	currentStep: number;
}

export function PersonalInfoStep({ form, steps, currentStep }: PersonalInfoStepProps) {
	return (
		<motion.div
			key="step1"
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			transition={{ duration: 0.3 }}
			className="space-y-4"
		>
			<div className="text-center mb-6">
				<Info size={34} className="mx-auto mb-4" />
				<h2 className="text-xl font-semibold">Informações Pessoais</h2>
				<p className="text-sm text-muted-foreground mt-1">Vamos começar com algumas informações básicas</p>
			</div>

			<StepIndicator steps={steps} currentStep={currentStep} />

			<FormField
				control={form.control}
				name="name"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-foreground flex items-center">
							Nome completo <span className="text-red-500 ml-1">*</span>
						</FormLabel>
						<div className="relative">
							<User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
							<FormControl>
								<Input
									placeholder="Seu nome"
									autoComplete="name"
									type="text"
									className="pl-10"
									{...field}
								/>
							</FormControl>
						</div>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={form.control}
				name="email"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-foreground flex items-center">
							Email <span className="text-red-500 ml-1">*</span>
						</FormLabel>
						<div className="relative">
							<Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
							<FormControl>
								<Input
									placeholder="john.doe@exemplo.com"
									autoComplete="email"
									type="email"
									className="pl-10"
									{...field}
								/>
							</FormControl>
						</div>
						<FormMessage />
					</FormItem>
				)}
			/>

			<div className="text-xs text-muted-foreground mt-4">
				<span className="text-red-500">*</span> Campos obrigatórios
			</div>
		</motion.div>
	);
}
