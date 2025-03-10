import { Footer } from "@/components/footer";
import { Header } from "@/components/Header";
import React, { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
        <div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-30" />
            <main className="z-50 flex flex-col space-y-4">
                <Header />
                {children}
                <Footer />
            </main>
        </div>
    );
}
