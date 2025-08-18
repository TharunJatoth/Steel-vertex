"use client";

import React, { useState } from "react";
import {
  Building2,
  Cog,
  Wrench,
  FileText,
  BarChart3,
  CheckCircle,
  Users,
  Clock,
  Award,
  Zap,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

const ServicesPageTwo = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Building2 size={24} />,
      title: "Structural Steel Detailing",
      description:
        "Precise detailing for beams, columns, and structural frameworks to ensure flawless fabrication and erection.",
      features: [
        "3D modeling and visualization",
        "Detailed shop drawings",
        "Material optimization",
        "Code compliance verification",
      ],
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: <Cog size={24} />,
      title: "Connection Design",
      description:
        "Reliable and safe connection designs tailored to meet project requirements and industry codes.",
      features: [
        "Moment connections",
        "Shear connections",
        "Special connections",
        "Load analysis",
      ],
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: <Wrench size={24} />,
      title: "Miscellaneous Steel",
      description:
        "Detailing of stairs, handrails, ladders, and other essential steel components for complete project solutions.",
      features: [
        "Stairs and platforms",
        "Handrails and guardrails",
        "Ladders and walkways",
        "Support brackets",
      ],
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: <FileText size={24} />,
      title: "Fabrication Drawings",
      description:
        "Comprehensive shop drawings that optimize fabrication processes and reduce on-site errors.",
      features: [
        "Assembly drawings",
        "Piece mark plans",
        "Material lists",
        "Shipping drawings",
      ],
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Engineering Reports",
      description:
        "Detailed analysis and documentation to support structural integrity and compliance.",
      features: [
        "Structural analysis",
        "Compliance documentation",
        "Load calculations",
        "PE stamped reports",
      ],
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "Advanced Technology",
      description:
        "Utilizing the latest CAD software and tools for precise and efficient detailing.",
    },
    {
      icon: <Users size={24} />,
      title: "Expert Team",
      description:
        "Our certified professionals bring years of experience and deep industry knowledge to every project.",
    },
    {
      icon: <Clock size={24} />,
      title: "Efficient Process",
      description:
        "Streamlined workflows and dedicated project managers ensure timely and budget-friendly delivery.",
    },
    {
      icon: <Award size={24} />,
      title: "Uncompromised Quality",
      description:
        "Rigorous quality assurance checks at every stage guarantee the highest standards of accuracy.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838384-255d644d67e7')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Elevating Your Projects with Expert Steel Detailing
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Precision, professionalism, and promptness. We are your trusted
            partners in structural steel detailing and design.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Request a Quote
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-300 font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300">
              Explore Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase text-blue-600">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Steel Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From initial concept to final fabrication, our services cover every
            aspect of your steel construction project.
          </p>
        </div>

        {/* Services Grid & Active Service Panel */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service List */}
          <div className="lg:col-span-1 space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? "bg-blue-500 shadow-xl text-white transform scale-105"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setActiveService(index)}
              >
                <div
                  className={`p-3 rounded-full ${
                    activeService === index ? "bg-white/20" : service.bg
                  } transition-colors duration-300`}
                >
                  <span
                    className={`${
                      activeService === index ? "text-white" : service.color
                    }`}
                  >
                    {service.icon}
                  </span>
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      activeService === index ? "" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      activeService === index
                        ? "text-blue-200"
                        : "text-gray-500"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
                <ChevronRight
                  size={20}
                  className={`ml-auto flex-shrink-0 transition-transform duration-300 ${
                    activeService === index
                      ? "text-white transform translate-x-1"
                      : "text-gray-400 group-hover:text-blue-500"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="lg:col-span-2 bg-gray-50 rounded-2xl p-8 shadow-inner">
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`p-4 rounded-xl ${services[activeService].bg} transition-colors duration-300`}
              >
                <span className={`${services[activeService].color}`}>
                  {services[activeService].icon}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {services[activeService].title}
              </h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              {services[activeService].description}
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {services[activeService].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-blue-500 flex-shrink-0 mt-1"
                  />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300">
              Learn More
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase text-blue-400">
              Why Partner With Us?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              The SteelVertex Advantage
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with a human-centric approach
              to deliver superior results on every project, big or small.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageTwo;
