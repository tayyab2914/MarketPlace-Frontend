"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./odometer.css";
import "./swiper.min.css";
import "./animate.min.css";
import "aos/dist/aos.css";
import Script from "next/script";
import { useEffect } from "react";
import AOS from "aos";

// Fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}

        {/* JavaScript assets from public/ folder */}
        {/* <Script src="/index.js" strategy="afterInteractive" /> */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/plugins.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/plugin-custom.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/matter.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugins/matterjs-custom.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="afterInteractive" />
      </body>
    </html>
  );
}
