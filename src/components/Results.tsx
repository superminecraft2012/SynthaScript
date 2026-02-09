export default function Results() {
  const results = [
    {
      metric: "100+",
      label: "Hours Saved Monthly",
      description: "Bi-weekly automated messages help you reclaim valuable time to focus on your business",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      metric: "Flexible",
      label: "Pricing",
      description: "Scaled pricing based on the amount of messages sent",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      metric: "Zero",
      label: "Repetitive Tasks",
      description: "Eliminate tedious manual work and focus on what matters most",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      metric: "Custom",
      label: "Tailored Solutions",
      description: "Every automation is built specifically for your unique business needs",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="results" className="py-24 bg-black relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">What You </span>
            <span className="gradient-text">Get</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here&apos;s what businesses can expect after implementing SynthaScript automation solutions.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">{result.icon}</div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{result.metric}</div>
              <div className="text-lg font-semibold text-white mb-2">{result.label}</div>
              <p className="text-gray-400 text-sm">{result.description}</p>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
