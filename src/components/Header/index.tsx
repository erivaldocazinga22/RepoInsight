"use client";

import { GitBranch } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { UserAvatar } from "../dashboard/user-avatar";
import { TranslateSelect } from "./translate-select";
import { useSession } from "next-auth/react";

export const Header = () => {
    const pathname = usePathname();
    const { data: session } = useSession();
    console.log({ session });
    
    return (
        <header className="sticky top-0 z-50 px-4 md:px-0 w-full border-b border-dashed border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <GitBranch className="size-6 text-primary" />
                    <span className="hidden sm:inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-blue-600">Repo</span>
                        Insight
                    </span>
                </Link>
                    
                <div className="flex items-center gap-4">
                {session?.user  ? (
                    <UserAvatar avatar_url={session?.user?.image??""} name={session?.user?.name??""} />
                )
                    : pathname !== "/dashboard" && (
                        <>
                            <Link href="/sign-in" className="px-4 py-2 rounded-md border border-border text-accent-foreground hover:bg-gradient-to-tr from-blue-500 to-purple-600 hover:brightness-110 focus:ring-2 focus:hover:ring-purple-500 hover:bg-border focus:outline-none transition-all">
                                Entrar na Conta
                            </Link>

                            <TranslateSelect />
                        </>
                    )}
                </div>
                
            </div>
        </header>
    );
};
