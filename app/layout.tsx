// app/layout.tsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="scrool">
          <Navbar
            hclass="wpo-header-style-3"
            Logo="/img/logo.png"
            topbarClass="topbar-style-2"
          />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
