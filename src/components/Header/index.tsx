import { GitBranch } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 px-4 md:px-0 w-full border-b border-dashed border-border/40 bg-background/20 backdrop-blur supports-[backdrop-filter]:bg-background/20">
            <div className="container mx-auto h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                    <GitBranch className="size-6 text-primary" />
                    <span className="hidden sm:inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-blue-600">Repo</span>
                        Insight
                    </span>
                </Link>
            </div>
        </header>
    )
}
