"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="footer-main py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="footer-widget">
              <div className="footer-logo mb-6">
                <Link
                  href="/"
                  onClick={ClickHandler}
                  className="flex items-center space-x-3"
                >
                  {/* Logo Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* S shape */}
                      <svg
                        className="absolute"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15 4C15 2 13 1 10 1C7 1 5 2 5 4C5 6 7 7 10 7C13 7 15 8 15 10C15 12 13 13 10 13C7 13 5 12 5 10"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>

                      {/* V shape */}
                      <svg
                        className="absolute"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2 6L8 14L14 6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold">
                      Steel<span className="text-orange-400">vertex</span>
                    </h2>
                    <p className="text-sm text-gray-400">Solutions</p>
                  </div>
                </Link>
              </div>
              <p className="text-gray-300 mb-4">
                Where Innovation Meets Integrity. Delivering cost-effective,
                high-precision steel detailing and design services across the
                USA.
              </p>
              <div className="social-links flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-widget">
              <h4 className="text-xl font-semibold mb-6 text-orange-400">
                Quick Links
              </h4>
              <ul className="footer-links space-y-3">
                <li>
                  <Link
                    href="/"
                    onClick={ClickHandler}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={ClickHandler}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    onClick={ClickHandler}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    onClick={ClickHandler}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={ClickHandler}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-widget">
              <h4 className="text-xl font-semibold mb-6 text-orange-400">
                Our Services
              </h4>
              <ul className="footer-links space-y-3">
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Structural Steel Detailing
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Connection Design
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Miscellaneous Steel
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Fabrication Drawings
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    Engineering Reports
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-widget">
              <h4 className="text-xl font-semibold mb-6 text-orange-400">
                Contact Info
              </h4>
              <div className="contact-info space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin
                    size={20}
                    className="text-orange-400 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-300">
                      123 Steel Avenue
                      <br />
                      Industrial District
                      <br />
                      USA
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-orange-400 flex-shrink-0" />
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-orange-400 flex-shrink-0" />
                  <p className="text-gray-300">info@steelvertexsolutions.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-orange-400 flex-shrink-0" />
                  <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="copyright text-gray-400 text-sm mb-4 md:mb-0">
              <p>
                &copy; {currentYear} Steel Vertex Solutions. All rights
                reserved.
              </p>
            </div>
            <div className="footer-bottom-links flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
