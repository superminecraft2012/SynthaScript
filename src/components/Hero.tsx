import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse" />
          <span className="text-purple-300 text-sm font-medium">Now accepting new clients</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="block text-white">Smarter Automation,</span>
          <span className="block gradient-text glow-text">Satisfied Clients,</span>
          <span className="block text-white">Scale Revenue</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed">
          SynthaScript builds custom automation solutions that save you hours, cut costs, and scale your operations with authentic, personalized messages that keep customers engaged and coming back.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#book-call"
            className="w-full sm:w-auto bg-[#9333EA] hover:bg-[#7C3AED] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 glow"
          >
            Contact Us
          </Link>
          <Link
            href="#results"
            className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/5"
          >
            See What We Offer
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
