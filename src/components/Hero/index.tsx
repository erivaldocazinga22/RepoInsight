"use client"
import React from "react";
import { motion } from "framer-motion";
import { AnaliseForm } from "./AnaliseForm";

export const HeroSection = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto relative pt-24 pb-32 md:pt-24 md:pb-14 px-4">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-600 mb-4 drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                            Análise inteligente para repositórios Git
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Transforme a visibilidade e qualidade dos seus projetos com insights precisos para desenvolvedores e
                            recrutadores.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full max-w-xl mx-auto"
                    >
                        <AnaliseForm />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="pt-4"
                    >
                        <p className="text-sm text-center text-muted-foreground mb-2">Análise completa e personalizada dos seus repositórios</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <div className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 shadow-[0_0_10px_rgba(124,58,237,0.2)]">
                                200+ métricas
                            </div>
                            <div className="text-xs px-3 py-1 rounded-full bg-purple-500/15 text-purple-500 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                                Insights customizados
                            </div>
                            <div className="text-xs px-3 py-1 rounded-full bg-blue-500/15 text-blue-500 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                                Análise de código
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}