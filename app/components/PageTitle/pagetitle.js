"use client";

import React from "react";
import Link from "next/link";

const PageTitle = ({ pageTitle, pagesub }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full h-64 flex items-center justify-center bg-cover bg-center overflow-hidden rounded-md shadow-lg"
      style={{
        backgroundImage: "url(/home1.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>

      {/* The main content container, positioned above the overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white font-inter">
        {/* Main page title */}
        <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg leading-tight mb-2">
          {pageTitle}
        </h2>

        {/* Dynamic breadcrumbs list */}
        <ol className="flex justify-center items-center space-x-2 mt-4 text-sm md:text-base">
          <li>
            <Link
              href="/"
              onClick={handleClick}
              className="hover:text-amber-400 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-amber-400">
            <span>{pageTitle}</span>
          </li>
        </ol>

        {/* Optional subtitle, rendered only if the pagesub prop is provided */}
        {pagesub && (
          <p className="mt-3 text-slate-200 drop-shadow-md max-w-2xl mx-auto">
            {pagesub}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageTitle;
