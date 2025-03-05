import { cn } from "@/lib/utils"

interface PasswordStrengthMeterProps {
  strength: number
}

export function PasswordStrengthMeter({ strength }: PasswordStrengthMeterProps) {
  const getStrengthText = () => {
    if (strength === 0) return "Muito fraca"
    if (strength === 1) return "Fraca"
    if (strength === 2) return "Média"
    if (strength === 3) return "Boa"
    if (strength === 4) return "Forte"
    return "Muito forte"
  }

  const getStrengthColor = (index: number) => {
    if (strength === 0) return "bg-destructive/50"
    if (strength === 1) return "bg-destructive"
    if (strength === 2) return "bg-amber-500"
    if (strength === 3) return "bg-amber-500"
    if (strength === 4) return "bg-emerald-500"
    return "bg-emerald-500"
  }

  return (
    <div className="mt-2 space-y-1">
      <div className="flex gap-1 h-1.5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={cn("h-full flex-1 rounded-full transition-all", i < strength ? getStrengthColor(i) : "bg-muted")}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Força da senha: <span className="font-medium">{getStrengthText()}</span>
      </p>
    </div>
  )
}

