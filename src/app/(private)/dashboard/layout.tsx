import React, { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-500 via-transparent to-transparent opacity-5" />
            {children}
        </div>
    );
}
