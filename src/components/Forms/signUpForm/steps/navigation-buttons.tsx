import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2, Lock } from "lucide-react";

interface NavigationButtonsProps {
	currentStep: number
	totalSteps: number
	onBack: () => void
	onNext: () => void
	isSubmitting: boolean
	hasErrors: boolean
}

export function NavigationButtons({
	currentStep,
	totalSteps,
	onBack,
	onNext,
	isSubmitting,
	hasErrors,
}: NavigationButtonsProps) {
  	const isLastStep = currentStep === totalSteps - 2

	return (
		<div className="flex justify-between mt-8">
			<Button
				type="button"
				variant="outline"
				onClick={onBack}
				disabled={currentStep === 0 || isSubmitting}
				className={cn(currentStep === 0 && "invisible")}
			>
				<ChevronLeft className="mr-2 h-4 w-4" />
				Voltar
			</Button>

			<Button
				type="button"
				onClick={onNext}
				disabled={hasErrors || isSubmitting}
				className={cn("relative",
					isLastStep && "bg-gradient-to-l to-purple-600 from-blue-600",
					hasErrors && "opacity-50 cursor-not-allowed",
				)}
			>
        		{isSubmitting ? (
          			<span className="flex items-center">
						<Loader2 className="animate-spin" />
						Processando
					</span>
        		) : (
				<>
					{isLastStep ? (
						<>
							<div className="absolute w-7 h-7 left-2 top-1/2 -translate-y-1/2 rounded-full hidden group-hover:flex items-center justify-center bg-white/20">
							<Lock className="opacity-60 h-4 w-4" />
							</div>
							<span>Finalizar Cadastro</span>
						</>
					) : (
						<>
							<span>Próximo</span>
							<ChevronRight className="ml-2 h-4 w-4" />
						</>
					)}
				</>
        	)}
      	</Button>
    </div>
  )
}

