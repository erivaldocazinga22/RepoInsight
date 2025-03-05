"use client"
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DROPDOWN_USER } from "@/statics/dashboard";
import { Skeleton } from "../ui/skeleton";
import { LogOut } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";

type UserAvatarProps = {
    avatar_url?: string;
    name: string;
}

export const UserAvatar = ({ name, avatar_url }: UserAvatarProps) => {
    const handleLogOut = async () => {
        console.log("Logout realizado com sucesso");
    }
    return (
        <Popover>
            <PopoverTrigger asChild>
                {name ? (
                    <Avatar className="w-10 h-10 text-sm">
                        <AvatarImage src={avatar_url} />
                        <AvatarFallback className="bg-neutral-200 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400">
                            {name.split(" ")
                                .filter(Boolean)
                                .map((word, idx, words) => (idx === 0 || idx === words.length - 1 ? word[0] : ""))
                                .join("").toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                ) : (
                    <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800">
                        <Skeleton className="w-full h-full rounded-full bg-neutral-200 dark:bg-neutral-700" />
                    </div>
                )}
            </PopoverTrigger>
            <PopoverContent className="w-56 p-0 mr-3 mt-2 overflow-hidden">
                <div className="relative flex flex-col items-center">
                    <div className="h-14 w-full bg-gradient-to-br to-purple-600 from-blue-500" />
                    <Avatar className="w-16 h-16 text-lg -mt-5 mb-5">
                        <AvatarImage src={avatar_url} />
                        <AvatarFallback className="bg-neutral-200 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400">
                            {name.split(" ")
                                .filter(Boolean)
                                .map((word, idx, words) => (idx === 0 || idx === words.length - 1 ? word[0] : ""))
                                .join("").toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-foreground line-clamp-1 text-nowrap">{name}</span>
                    <span className="text-xs text-neutral-500 line-clamp-1 text-nowrap">{"exemple@gmail.com"}</span>
                </div>
                <Separator orientation="horizontal" className="w-full mt-4" />
                <button type="button" onClick={handleLogOut} className="px-4 py-2 flex items-center justify-center gap-2 w-full cursor-pointer text-neutral-400 hover:text-foreground hover:bg-neutral-900/30">
                    <LogOut className="h-5 w-5" strokeWidth={1.5} />
                    <span className="">Terminar sessão</span>
                </button>
            </PopoverContent>
        </Popover>
    );
}