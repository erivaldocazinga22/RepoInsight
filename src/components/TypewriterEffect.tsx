"use client"
import { useEffect, useState } from "react";

type TypewriterEffectProps = {
    texts: string[];
    typingSpeed?: number;
    delayBetweenTexts?: number;
};

export const TypewriterEffect = ({ texts, typingSpeed = 100, delayBetweenTexts = 2000 }: TypewriterEffectProps) => {
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const updateText = () => {
            const fullText = texts[index];

            if (isDeleting) {
                setCurrentText((prev) => prev.slice(0, -1));
            } else {
                setCurrentText((prev) => fullText.slice(0, prev.length + 1));
            }

            if (!isDeleting && currentText === fullText) {
                timeout = setTimeout(() => setIsDeleting(true), delayBetweenTexts);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            } else {
                timeout = setTimeout(updateText, typingSpeed);
            }
        };

        timeout = setTimeout(updateText, typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, index, texts, typingSpeed, delayBetweenTexts]);

    return (
        <div className="text-4xl font-bold text-white dark:text-white">
            <span>{currentText}</span>
            <span className="border-r-2 ml-2 border-white dark:border-white animate-blink" />
        </div>
    );
};