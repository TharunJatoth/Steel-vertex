"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, HardHat } from "lucide-react";

const HomePage = () => {
  const services = [
    {
      title: "Structural Detailing",
      description: "Precise drawings for all structural steel components.",
      icon: <Building2 size={24} />,
      link: "/services#structural",
    },
    {
      title: "Connection Design",
      description: "Safe and compliant designs for steel connections.",
      icon: <HardHat size={24} />,
      link: "/services#connections",
    },
    {
      title: "Miscellaneous Steel",
      description: "Stairs, railings, and custom steel components.",
      icon: <ArrowRight size={24} />,
      link: "/services#misc",
    },
  ];

  return (
    <div className="bg-gray-950 text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('home.jpg')`, // put your image inside public/img/home.jpg
            filter: "brightness(0.5)",
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-xl animate-fade-in-down">
            Your Vision, Our Mission
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in-up">
            We believe that every great achievement starts with a vision.
            Whether you're building a brand, developing a product, or planning a
            transformation, your ideas are the foundation. Our mission is to
            bring those ideas to life—strategically, creatively, and with
            precision.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up delay-100">
            <Link href="/about">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105">
                About Us
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent border border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-950 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase text-blue-400 tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
              What We Do
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl hover:border-blue-600 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white transition-all duration-300 group-hover:bg-white group-hover:text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <Link href={service.link}>
                  <button className="flex items-center gap-2 text-blue-400 font-semibold group-hover:text-blue-200 transition-colors duration-300">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Highlights Section with Background Image */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/about-bg.jpg')", // put your bg image inside public/img/about-bg.jpg
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Visual Section */}
            <div className="relative">
              <img
                src="/home.jpg"
                alt="Engineers collaborating"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute top-8 -right-8 p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl transform rotate-3 animate-pulse-slow">
                <Sparkles size={48} className="text-blue-400" />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="text-sm font-semibold uppercase text-blue-400 tracking-wider">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
                Redefining Precision in Steel Detailing
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Steel Vertex Solutions is a USA-based leader in providing
                advanced virtual steel solutions. Our mission is to empower
                fabricators and contractors with high-precision services that
                optimize efficiency and ensure project success.
              </p>
              <ul className="space-y-4 text-gray-200 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <span>Expert team with years of experience.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <span>Commitment to quality and client satisfaction.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <ArrowRight size={16} className="text-white" />
                  </div>
                  <span>Transparent and communicative process.</span>
                </li>
              </ul>
              <Link href="/about">
                <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
