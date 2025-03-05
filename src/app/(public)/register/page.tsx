import { SignUpForm } from "@/components/Forms/signUpForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function RegisterPage() {
    return (
        <div className="px-4 md:px-0 container mx-auto">
            <div className="py-4">
                <Link href="/sign-in" className="flex items-center gap-2 text-sm group" >
                    <ArrowLeft className="w-4 inline-block group-hover:-translate-x-1.5 transition-all duration-200" />
                    Voltar
                </Link>
            </div>
            <div className="mt-10">
                <SignUpForm />
            </div>
        </div>
    )
}
