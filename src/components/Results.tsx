export default function Results() {
  const results = [
    {
      metric: "60%",
      label: "Cost Reduction",
      description: "Average operational cost savings across all client implementations",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      metric: "500+",
      label: "Hours Saved Monthly",
      description: "Average time saved per client through AI automation workflows",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      metric: "3x",
      label: "Revenue Growth",
      description: "Average revenue increase within 12 months of implementation",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      metric: "2 Weeks",
      label: "Implementation Time",
      description: "Average time from kickoff to fully deployed AI solution",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      quote: "SynthaScript automated our entire customer onboarding process. What used to take our team 4 hours per client now takes 15 minutes.",
      author: "Sarah Chen",
      role: "COO, TechFlow Solutions",
      image: "SC",
    },
    {
      quote: "We were skeptical about AI automation, but the results speak for themselves. Our support team handles 3x the volume with the same headcount.",
      author: "Marcus Johnson",
      role: "VP Operations, DataDrive Inc",
      image: "MJ",
    },
    {
      quote: "The ROI was immediate. Within the first month, we recouped our entire investment and saved over $50,000 in operational costs.",
      author: "Emily Rodriguez",
      role: "CEO, ScaleUp Agency",
      image: "ER",
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
            <span className="text-white">Typical </span>
            <span className="gradient-text">Results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real numbers from real clients. Here&apos;s what businesses achieve after implementing SynthaScript solutions.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-purple-500/50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-gray-300 mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white font-semibold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
