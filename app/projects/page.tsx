"use client";

import React, { useState } from "react";
import {
  Building2,
  Factory,
  Home,
  Landmark,
  Warehouse,
  Activity,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Filter,
  ArrowUpRight,
} from "lucide-react";

const ProjectsPageTwo = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Commercial",
    "Industrial",
    "Residential",
    "Infrastructure",
  ];

  const projects = [
    {
      id: 1,
      title: "Commercial Office Complex",
      category: "Commercial",
      type: "Structural Steel Detailing",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      description:
        "Complete structural steel detailing for a 15-story commercial office building including connection design and shop drawings.",
      details: {
        location: "New York, NY",
        duration: "8 months",
        team: "12 engineers",
        completion: "2024",
      },
      icon: <Building2 size={24} />,
      color: "text-blue-600",
      bg: "bg-blue-600/10",
    },
    {
      id: 2,
      title: "Industrial Manufacturing Plant",
      category: "Industrial",
      type: "Miscellaneous Steel Components",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      description:
        "Comprehensive detailing of platforms, stairs, railings, and support structures for a large manufacturing facility.",
      details: {
        location: "Detroit, MI",
        duration: "6 months",
        team: "8 engineers",
        completion: "2024",
      },
      icon: <Factory size={24} />,
      color: "text-green-600",
      bg: "bg-green-600/10",
    },
    {
      id: 3,
      title: "Residential High-Rise",
      category: "Residential",
      type: "Connection Design",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      description:
        "Advanced connection design and engineering for a 20-story residential tower with complex architectural requirements.",
      details: {
        location: "Chicago, IL",
        duration: "10 months",
        team: "15 engineers",
        completion: "2023",
      },
      icon: <Home size={24} />,
      color: "text-purple-600",
      bg: "bg-purple-600/10",
    },
    {
      id: 4,
      title: "Bridge Infrastructure",
      category: "Infrastructure",
      type: "Structural Engineering",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      description:
        "Detailed structural analysis and fabrication drawings for a major highway bridge reconstruction project.",
      details: {
        location: "San Francisco, CA",
        duration: "14 months",
        team: "20 engineers",
        completion: "2023",
      },
      icon: <Landmark size={24} />,
      color: "text-red-600",
      bg: "bg-red-600/10",
    },
    {
      id: 5,
      title: "Warehouse Facility",
      category: "Industrial",
      type: "Pre-Engineered Buildings",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      description:
        "Complete detailing package for a large-scale warehouse including crane systems and material handling equipment.",
      details: {
        location: "Houston, TX",
        duration: "5 months",
        team: "10 engineers",
        completion: "2024",
      },
      icon: <Warehouse size={24} />,
      color: "text-orange-600",
      bg: "bg-orange-600/10",
    },
    {
      id: 6,
      title: "Stadium Construction",
      category: "Commercial",
      type: "Complex Structures",
      image:
        "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80",
      description:
        "Intricate steel detailing for a multi-purpose stadium featuring advanced architectural elements and large spans.",
      details: {
        location: "Atlanta, GA",
        duration: "18 months",
        team: "25 engineers",
        completion: "2023",
      },
      icon: <Activity size={24} />,
      color: "text-indigo-600",
      bg: "bg-indigo-600/10",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1510525008320-f4216853a060?w=1000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Our Portfolio of Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our diverse range of successful projects that showcase our
            precision, expertise, and commitment to quality.
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          <Filter size={20} className="text-gray-600" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md transform scale-105"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${project.bg} opacity-50 group-hover:opacity-60`}
                ></div>
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-white/80 backdrop-blur-sm text-gray-900 flex items-center gap-2">
                  <span className={`${project.color}`}>{project.icon}</span>
                  <span className="text-sm font-semibold">{project.type}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="flex-shrink-0" />
                    <span>{project.details.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="flex-shrink-0" />
                    <span>Completed {project.details.completion}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="flex-shrink-0" />
                    <span>{project.details.team}</span>
                  </div>
                </div>

                <a
                  href="#"
                  className={`inline-flex items-center gap-2 font-semibold ${project.color} hover:gap-3 transition-all duration-300`}
                >
                  View Details
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 p-10 bg-gray-900 rounded-3xl text-center shadow-2xl">
          <h3 className="text-4xl font-extrabold text-white mb-4">
            Have a Project in Mind?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Our team is ready to provide top-tier steel detailing and
            engineering solutions tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-3">
              <span>Get Your Free Quote</span>
              <ArrowUpRight size={20} />
            </button>
            <button className="bg-transparent border border-gray-400 text-gray-300 font-semibold py-4 px-8 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageTwo;
