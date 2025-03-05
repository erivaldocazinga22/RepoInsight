"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AnimatePresence } from "framer-motion"
import { Form } from "@/components/ui/form"
import { type SignUpRequest, signUpSchema } from "@/models/auth.model"
import { PersonalInfoStep } from "./steps/personal-info-step"
import { SecurityStep } from "./steps/security-step"
import { CompanyStep } from "./steps/company-step"
import { CompletionStep } from "./steps/completion-step"
import { NavigationButtons } from "./steps/navigation-buttons"
import { SIGNUP_STEPS } from "@/statics/steps"

export function SignUpForm() {
	const [currentStep, setCurrentStep] = useState(0)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")

  	const form = useForm<SignUpRequest>({
    	mode: "onChange",
    	criteriaMode: "all",
    	resolver: zodResolver(signUpSchema),
    	defaultValues: {
      		name: "",
			email: "",
			password: "",
			confirmPassword: "",
			company: "",
    	},
  	});
	const { trigger, formState: { errors } } = form;

  	const currentStepHasErrors = SIGNUP_STEPS[currentStep].fields.some((field) => errors[field as keyof SignUpRequest])

	const currentStepFieldsComplete = SIGNUP_STEPS[currentStep].fields.every((field) => {
		const value = form.getValues(field as keyof SignUpRequest)
		return value && value.toString().trim() !== ""
	})

	const handleNext = async () => {
		const fieldsToValidate = SIGNUP_STEPS[currentStep].fields as Array<keyof SignUpRequest>
		const isStepValid = await trigger(fieldsToValidate, { shouldFocus: true })

		if (!isStepValid) {
			return
		}

		if (currentStep < SIGNUP_STEPS.length - 2) {
			setCurrentStep((step) => step + 1)
		} else if (currentStep === SIGNUP_STEPS.length - 2) {
			await handleSubmit()
		}
  	}

	const handleBack = () => {
		setCurrentStep((step) => step - 1)
  	}

	const handleSubmit = async () => {
		const isStepValid = await trigger(SIGNUP_STEPS[currentStep].fields as Array<keyof SignUpRequest>)

		if (!isStepValid) return

		setIsSubmitting(true)

		try {
			await new Promise((resolve) => setTimeout(resolve, 1500))

			const formData = form.getValues()
			console.log("Form submitted successfully:", formData)

			setSubmissionStatus("success")
			setCurrentStep(SIGNUP_STEPS.length - 1)
		} catch (error) {
			console.error("Error submitting form:", error)
			setSubmissionStatus("error")
			setCurrentStep(SIGNUP_STEPS.length - 1)
		} finally {
			setIsSubmitting(false)
		}
	}

	const resetForm = () => {
		setSubmissionStatus("idle")
		setCurrentStep(0)
	}

	return (
		<div className="w-full max-w-md mx-auto">
			<Form {...form}>
				<form className="space-y-6">
					<AnimatePresence mode="wait">
						{currentStep === 0 && <PersonalInfoStep form={form} steps={SIGNUP_STEPS} currentStep={currentStep} />}

						{currentStep === 1 && <SecurityStep form={form} steps={SIGNUP_STEPS} currentStep={currentStep} />}

						{currentStep === 2 && <CompanyStep form={form} steps={SIGNUP_STEPS} currentStep={currentStep} />}

						{currentStep === 3 && <CompletionStep status={submissionStatus} onReset={resetForm} />}
					</AnimatePresence>

					{currentStep < SIGNUP_STEPS.length - 1 && (
						<NavigationButtons
							currentStep={currentStep}
							totalSteps={SIGNUP_STEPS.length}
							onBack={handleBack}
							onNext={handleNext}
							isSubmitting={isSubmitting}
							hasErrors={currentStepHasErrors || !currentStepFieldsComplete}
						/>
					)}
				</form>
			</Form>
		</div>
  	)
}

