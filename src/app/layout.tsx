import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { NextAuthProvider } from "@/providers/next-auth.provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RepoInsight",
  description:
    "Transforme a visibilidade e qualidade dos seus projetos com insights precisos para desenvolvedores e recrutadores.",
	icons: {
		icon: "/favicon.svg",
	},
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
					<NuqsAdapter>
						<NextAuthProvider>
							{children}
							<Toaster />
						</NextAuthProvider>
					</NuqsAdapter>
				</ThemeProvider>
			</body>
		</html>
  );
}