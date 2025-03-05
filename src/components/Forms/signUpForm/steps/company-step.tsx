"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Building, Building2 } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import type { SignUpRequest } from "@/models/auth.model";
import { motion } from "framer-motion";
import { StepIndicator } from "./step-indicator";
import type { ISignUpMultiFormSteps } from "@/statics/steps";

interface CompanyStepProps {
	form: UseFormReturn<SignUpRequest>;
	steps: ISignUpMultiFormSteps[];
	currentStep: number;
}

export function CompanyStep({ form, steps, currentStep }: CompanyStepProps) {
	return (
		<motion.div
			key="step3"
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -20 }}
			transition={{ duration: 0.3 }}
			className="space-y-4"
		>
			<div className="text-center mb-6">
				<Building2 size={34} className="mx-auto mb-4" />
				<h2 className="text-xl font-semibold">Informações da Empresa</h2>
				<p className="text-sm text-muted-foreground mt-1">
					Quase lá! Só precisamos de mais algumas informações
				</p>
			</div>

			<StepIndicator steps={steps} currentStep={currentStep} />

			<FormField
				control={form.control}
				name="company"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-foreground">Nome da empresa (opcional)</FormLabel>
						<div className="relative">
							<Building className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
							<FormControl>
								<Input placeholder="Sua empresa" type="text" className="pl-10" {...field} />
							</FormControl>
						</div>
						<FormMessage />
					</FormItem>
				)}
			/>

			<div className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700 text-sm mt-6">
				<p className="text-muted-foreground">
					Esta informação é opcional, mas nos ajuda a personalizar sua experiência. Se você não trabalha em
					uma empresa, pode deixar este campo em branco.
				</p>
			</div>
			<div className="text-xs text-muted-foreground mt-4">
				Este campo é opcional. Você pode avançar mesmo sem preenchê-lo.
			</div>
		</motion.div>
	);
}
