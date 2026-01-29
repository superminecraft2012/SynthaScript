export default function Brands() {
  // Placeholder brand names - in production, these would be actual logos
  const brands = [
    { name: "TechFlow", industry: "SaaS" },
    { name: "DataDrive", industry: "Analytics" },
    { name: "ScaleUp", industry: "Agency" },
    { name: "CloudNine", industry: "Infrastructure" },
    { name: "InnovateCo", industry: "Consulting" },
    { name: "GrowthLab", industry: "Marketing" },
    { name: "FutureStack", industry: "Development" },
    { name: "PeakOps", industry: "Operations" },
  ];

  return (
    <section id="brands" className="py-24 bg-gradient-to-b from-black via-purple-950/10 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Trusted by </span>
            <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From startups to enterprises, businesses across industries trust SynthaScript to power their automation.
          </p>
        </div>

        {/* Brands grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
            >
              {/* Placeholder logo */}
              <div className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                {brand.name}
              </div>
              <div className="text-sm text-gray-500">{brand.industry}</div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-gradient-to-r from-purple-900/30 via-purple-800/30 to-purple-900/30 border border-purple-500/20 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">12</div>
              <div className="text-gray-400 text-sm">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-gray-400 text-sm">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
