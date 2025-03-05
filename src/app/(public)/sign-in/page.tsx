import { SignInForm } from "@/components/Forms/signInForm";
import { OutherNetworks } from "@/components/outher-networks";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { OUTHER_NETWORKS } from "@/statics/auth";
import { GitBranch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignInPage() {
    const messages = [
        "Bem-vindo ao RepoInsight",
        "Analise seus repositórios como um profissional",
        "Destaque-se e conquiste melhores oportunidades",
    ];

    return (
        <div className="flex min-h-screen">
            <div className="hidden lg:flex flex-1 bg-cover bg-center relative">
                <Image
                    src="/background-repoinsight.png"
                    alt="Plano de fundo representando análise de código"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="w-full h-full bg-black/50 flex items-center justify-center">
                    <TypewriterEffect texts={messages} typingSpeed={80} delayBetweenTexts={1800} />
                </div>
            </div>

            <div className="flex flex-col justify-center w-full max-w-md p-8 mx-auto lg:w-1/3">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                    <div className="flex items-center gap-2 justify-center">
                        <GitBranch className="w-6 " />
                        <span className="hidden sm:inline-block text-2xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-blue-600">RepoInsight</span>
                            
                        </span>
                    </div>

                    <h1 className="mt-6 text-2xl font-bold text-foreground">
                        Acesse sua conta
                    </h1>
                    <p className="mt-2 text-sm text-neutral-400">
                        Conecte-se e descubra insights valiosos sobre seus repositórios.
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm space-y-4">
                    <SignInForm />
                    <p className="text-center text-sm">
                        Já possue uma conta?{" "}
                        <Link href="/register" className="hover:text-purple-300">Cadastre-se!</Link>
                    </p>
                    <OutherNetworks networks={OUTHER_NETWORKS} />
                </div>
            </div>
        </div>
    );
}
