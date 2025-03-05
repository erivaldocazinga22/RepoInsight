"use client"

import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface CompletionStepProps {
  status: "idle" | "success" | "error"
  onReset: () => void
}

export function CompletionStep({ status, onReset }: CompletionStepProps) {
  return (
    <motion.div
      key="step4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 text-center py-6"
    >
      {status === "success" ? (
        <>
          <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold">Cadastro Concluído!</h2>
          <p className="text-muted-foreground">
            Sua conta foi criada com sucesso. Você receberá um email de confirmação em breve.
          </p>
          <Button asChild className="mt-4 w-full">
            <Link href="/sign-in">Ir para o Login</Link>
          </Button>
        </>
      ) : status === "error" ? (
        <>
          <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto">
            <AlertCircle className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold">Algo deu errado</h2>
          <p className="text-muted-foreground">
            Não foi possível concluir seu cadastro. Por favor, tente novamente mais tarde.
          </p>
          <Button variant="outline" className="mt-4 w-full" onClick={onReset}>
            Tentar novamente
          </Button>
        </>
      ) : null}
    </motion.div>
  )
}

