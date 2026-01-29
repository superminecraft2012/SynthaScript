"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with businesses of all sizes across various industries including SaaS, e-commerce, professional services, healthcare, finance, and more. Our solutions are tailored to each client's specific needs and scale. Whether you're a startup looking to automate your first processes or an enterprise seeking to optimize complex workflows, we have the expertise to help.",
    },
    {
      question: "What's included in the free strategy call?",
      answer: "During the strategy call, we'll analyze your current workflows, identify automation opportunities, and provide a custom roadmap with projected ROI. You'll receive actionable insights regardless of whether we work together. There's no sales pressure—just honest consultation about how AI automation could benefit your business.",
    },
    {
      question: "What's your pricing model?",
      answer: "We offer flexible pricing based on the scope and complexity of your automation needs. Our engagements typically start with a project-based implementation fee, followed by optional ongoing support and optimization packages. During your strategy call, we'll provide a custom quote based on your specific requirements and expected ROI.",
    },
    {
      question: "Can you integrate with our existing tools and systems?",
      answer: "Yes! We specialize in integrating with existing tech stacks. We work with over 500+ tools and platforms including Salesforce, HubSpot, Slack, Google Workspace, Microsoft 365, Zapier, and many industry-specific solutions. If you use a custom or legacy system, we can build custom integrations to ensure seamless connectivity.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with SynthaScript. Can&apos;t find what you&apos;re looking for? Book a call and we&apos;ll answer all your questions.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-white font-medium pr-8">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`accordion-content ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#book-call"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Book a call and let&apos;s talk
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
