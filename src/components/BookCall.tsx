"use client";

import { useState } from "react";

export default function BookCall() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("New Contact from SynthaScript");
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\nCompany: ${formData.company}\nPhone Number: ${formData.phoneNumber}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:cl17services@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="book-call" className="py-24 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 md:p-12">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
            <span className="text-white">Ready to </span>
            <span className="gradient-text">Transform</span>
            <span className="text-white"> Your Business?</span>
          </h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-white font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-white font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Enter your company name"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-white font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="inline-block bg-[#9333EA] hover:bg-[#7C3AED] text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 glow cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
