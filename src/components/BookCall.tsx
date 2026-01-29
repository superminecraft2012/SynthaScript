export default function BookCall() {
  return (
    <section id="book-call" className="py-24 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            <span className="text-green-300 text-sm font-medium">Limited spots available this month</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Ready to </span>
            <span className="gradient-text">Transform</span>
            <span className="text-white"> Your Business?</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Book a free 30-minute strategy session with our automation experts. 
            We&apos;ll analyze your current workflows and show you exactly how AI can save you time and money.
          </p>

          {/* What you'll get */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-300">
              <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Custom ROI analysis</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-300">
              <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Workflow assessment</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-gray-300">
              <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No obligation</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://calendly.com" // Replace with actual Calendly link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9333EA] hover:bg-[#7C3AED] text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 glow"
          >
            Book Your Free Strategy Call
          </a>

          {/* Trust note */}
          <p className="mt-6 text-gray-500 text-sm">
            No commitment required — just a conversation about your automation needs
          </p>
        </div>
      </div>
    </section>
  );
}
