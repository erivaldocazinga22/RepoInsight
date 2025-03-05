import { cn } from "@/lib/utils";
import type { ISignUpMultiFormSteps } from "@/statics/steps";

interface StepIndicatorProps {
	steps: ISignUpMultiFormSteps[];
	currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
	return (
		<div className="mt-4 mb-8">
			<div className="w-full grid grid-cols-4 gap-2">
				{steps.slice(0, steps.length - 1).map((step, index) => (
					<div
						key={step.id}
						className={cn(
							"h-2 rounded-md",
							currentStep > index
								? "bg-blue-600"
								: currentStep === index
									? "bg-neutral-500"
									: "bg-neutral-700"
						)}
					/>
				))}
			</div>
		</div>
	);
}
