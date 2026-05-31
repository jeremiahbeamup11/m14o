import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Intro, ForCities, Builders } from "@/components/Sections";
import { FAQ } from "@/components/FAQ";
import { Join, Footer } from "@/components/CTA";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Intro />
      <ForCities />
      <Builders />
      <FAQ />
      <Join />
      <Footer />
    </main>
  );
}
