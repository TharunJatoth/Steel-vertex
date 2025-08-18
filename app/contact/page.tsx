"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const ContactPage = () => {
  // State to manage form data and submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handles changes to form inputs
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsLoading(false);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Hide the success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Data for the contact information section
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Office Address",
      info: "123 Steel Avenue, Industrial District, USA",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      info: "+1 (555) 123-4567",
      color: "from-teal-600 to-teal-700",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      info: "info@steelvertexsolutions.com",
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      info: "Mon - Fri: 9:00 AM - 6:00 PM",
      color: "from-amber-600 to-amber-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-gray-950 to-neutral-950 text-neutral-200 p-8 font-sans antialiased">
      {/* Main Content Card */}
      <div className="relative z-10 max-w-6xl mx-auto bg-neutral-900 rounded-3xl shadow-2xl shadow-neutral-800/50 overflow-hidden p-8 md:p-12 border border-neutral-800/50">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
            Contact Us
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Get in touch with our team for comprehensive solutions. We're here
            to help!
          </p>
        </div>

        {/* Contact Information & Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">Our Details</h2>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-neutral-800 rounded-2xl border border-neutral-700 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-neutral-700/30"
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white mr-4 bg-gradient-to-br ${item.color}`}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Send a Message
            </h2>

            {/* Success Message */}
            {isSubmitted && (
              <div className="bg-green-600 text-white p-4 rounded-xl mb-6 flex items-center space-x-3 transition-opacity duration-300 ease-in-out">
                <CheckCircle size={20} />
                <span className="font-medium">
                  Thank you! Your message has been sent successfully.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
