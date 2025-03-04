import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RepoInsight",
  description:
    "Transforme a visibilidade e qualidade dos seus projetos com insights precisos para desenvolvedores e recrutadores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning className="dark">
      <body className={cn("relative", inter.className)}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-30" />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

/* <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px]" />             
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-30" />
          <div className="absolute top-20 left-0 right-0 w-full h-2/3 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 w-full h-1/3 bg-gradient-to-b from-transparent to-background" /> 
          
          <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/40 filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-purple-600/40 filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-blue-600/40 filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
          
          
        */