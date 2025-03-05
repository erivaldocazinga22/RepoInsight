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
			<body className={cn("relative min-h-dvh bg-background text-foreground", inter.className)}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
  );
}