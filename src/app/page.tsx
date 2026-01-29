import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Brands from "@/components/Brands";
import FAQ from "@/components/FAQ";
import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Results />
      <Brands />
      <FAQ />
      <BookCall />
      <Footer />
    </main>
  );
}
