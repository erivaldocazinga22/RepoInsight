/* "use client" */
import { ArrowRight, Github } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "../ui/label";

const githubUrlRegex = /^https:\/\/github\.com\/[\w-]+\/[\w-]+(\/.*)?$/;

const formDataSchema = z.object({
    url: z.string().url().refine((url) => githubUrlRegex.test(url), {
        message: "A URL deve ser um link válido do GitHub"
    }),
    type: z.boolean().default(true)
});

type FormDataSchema = z.infer<typeof formDataSchema>

export const AnaliseForm = () => {
    const { register, handleSubmit, formState: { errors }, watch} = useForm<FormDataSchema>({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(formDataSchema),
        defaultValues: {
            type: true
        }
    });

    const typeWatch = watch("type")
    const handleAnalyze = async (data: FormDataSchema) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(handleAnalyze)} className="relative">
            <div className="flex gap-2 items-center">
                <div className="relative flex-1 flex items-center gap-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Github className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <Input
                        type="text"
                        {...register("url")}
                        placeholder={`https://github.com/username${typeWatch ? "/repository" : ""}`}
                        className="pl-10 h-12 text-base bg-background/80 border-border/50 transition-all focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary"
                    />
                </div>
                <Button
                    type="submit"
                    size="lg"
                    disabled={!!errors.url}
                    className="h-12 px-5 group bg-primary hover:bg-primary/90 shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                >
                    <span>Analisar</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
            <div className="flex items-center gap-2 px-1 justify-center">
                <Input id="type-analize" type="checkbox" {...register("type")} defaultChecked className="w-4 accent-purple-500" />
                <Label htmlFor="type-analize" className="text-neutral-400 cursor-pointer">Selecione para analizar um repositório</Label>
            </div>
        </form>
    )
}
