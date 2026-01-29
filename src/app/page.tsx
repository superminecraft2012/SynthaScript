import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Results />
      <FAQ />
      <BookCall />
      <Footer />
    </main>
  );
}
