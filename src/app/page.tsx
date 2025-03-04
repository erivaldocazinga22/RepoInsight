import { Footer } from "@/components/footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Hero";

export default function Home() {
	return (
		<main className="min-h-screen bg-background text-foreground flex flex-col">
			<Header />
			<HeroSection />
			<Footer />
		</main>
	);
}
