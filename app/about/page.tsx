"use client";

import React from "react";
import { Zap, Users, Award, CircleCheck } from "lucide-react";
import Image from "next/image";

import PageTitle from "../components/PageTitle/pagetitle";

const AboutPageTwo = () => {
  const coreValues = [
    {
      title: "Quality First",
      description:
        "We maintain the highest standards in every project, ensuring precision and excellence in all deliverables.",
      icon: <Award size={24} />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Innovation",
      description:
        "Leveraging cutting-edge technology and methodologies to provide advanced virtual steel solutions.",
      icon: <Zap size={24} />,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      title: "Integrity",
      description:
        "Building trust through transparent communication and ethical business practices in every client relationship.",
      icon: <CircleCheck size={24} />,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      title: "Client-Centric",
      description:
        "Our focus is on understanding and exceeding client expectations with every project we undertake.",
      icon: <Users size={24} />,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  const stats = [
    {
      number: "15+",
      label: "Years of Experience",
    },
    {
      number: "50+",
      label: "Completed Projects",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <PageTitle
        pageTitle="About"
        pagesub="Building Excellence Through Innovation"
      />

      {/* Main About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/service/miscellaneous.png"
                alt="About Steel Vertex Solutions"
                className="rounded-3xl shadow-2xl transform rotate-3 scale-105 transition-transform duration-500"
                fill
                style={{ objectFit: "cover" }}
              />

              <Image
                src="/service/estimation.png"
                alt="Team working"
                fill
                className="object-cover rounded-3xl shadow-2xl transform -rotate-3 transition-transform duration-500"
                priority
              />
            </div>
          </div>
          <div className="text-left">
            <span className="text-sm font-semibold uppercase text-blue-600">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Pioneering the Future of Steel Detailing
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Steel Vertex Solutions is a USA-based organization specializing in
              delivering cost-effective, high-precision steel detailing and
              design services. With a commitment to innovation, quality, and
              integrity, we empower fabricators, contractors, and engineers with
              reliable solutions that streamline construction workflows.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Our expert team leverages advanced technology to provide accurate
              and efficient detailing, ensuring every project meets the highest
              standards of excellence. We are dedicated to building lasting
              partnerships based on trust and mutual success.
            </p>
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase text-blue-600">
              Our Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gray-100 p-8 rounded-2xl shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${value.bg}`}
                >
                  <span className={`${value.color}`}>{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-5xl font-extrabold mb-1">{stat.number}</h3>
                <p className="text-xl font-semibold opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Meet Our Dedicated Team
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our team of experienced engineers, detailers, and project managers is
          at the heart of our success, committed to delivering excellence.
        </p>
        <div className="relative bg-gray-100 rounded-3xl p-8 shadow-inner overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="/service/BIM.png"
                alt="A team of engineers"
                width={600} // adjust to your desired width
                height={400} // adjust to your desired height
                className="rounded-2xl shadow-xl"
                priority
              />
              <div className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg">
                <Users size={28} className="text-blue-600" />
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Expertise and Collaboration
              </h3>
              <p className="text-gray-600 mb-4">
                We foster a collaborative environment where diverse skills and
                perspectives come together to solve complex challenges and
                ensure seamless project execution.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Certified and experienced professionals</li>
                <li>Continuous professional development</li>
                <li>Dedicated project management</li>
                <li>Focus on communication and transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPageTwo;
