"use client";

import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { useQueryState } from "nuqs";

const LANGUAGES = [
    { value: "en", label: "English", flag: "🇬🇧" },
    { value: "pt-ao", label: "Portuguese", flag: "🇦🇴" },
];

export const TranslateSelect = () => {
    const [lang, setLang] = useQueryState("lang", { defaultValue: "en" });
    const [selectedLang, setSelectedLang] = useState<string>("en");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLang = localStorage.getItem("lang");
            if (storedLang) {
                setSelectedLang(storedLang);
                setLang(storedLang);
            } else if (!lang) {
                const userLang = navigator.language;
                const matchedLang = LANGUAGES.find((l) => userLang.startsWith(l.value))?.value || "en";
                setSelectedLang(matchedLang);
                setLang(matchedLang);
                localStorage.setItem("lang", matchedLang);
            }
        }
    }, [lang, setLang]);

    const handleChange = (newLang: string) => {
        setSelectedLang(newLang);
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    const selectedFlag = LANGUAGES.find(l => l.value === selectedLang)?.flag || "🇬🇧";

    return (
        <Select value={selectedLang} aria-label="Select Language" onValueChange={handleChange}>
            <SelectTrigger className="border border-border px-4 py-2 h-10 rounded-md focus:ring-2 focus:ring-blue-500">
                <span>{selectedFlag}</span>
            </SelectTrigger>
            <SelectContent className="w-[10rem] shadow-lg rounded-md">
                {LANGUAGES.map(({ value, label, flag }) => (
                    <SelectItem key={value} value={value} className="flex items-center gap-2 p-2 text-foreground hover:bg-neutral-900 focus:bg-neutral-900">
                        <span role="img" aria-label={label}>{flag}</span> {label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
