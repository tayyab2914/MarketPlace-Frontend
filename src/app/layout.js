"use client";

import { Montserrat, Geist_Mono } from "next/font/google"; // Montserrat instead of Geist
import "./(styles)/globals.css";
import "./(styles)/odometer.css";
import "./(styles)/swiper.css";
import "./(styles)/animate.min.css";
import "aos/dist/aos.css";
import Script from "next/script";
import { useEffect } from "react";
import AOS from "aos";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

// Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
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
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="antialiased">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
            <Script src="/assets/js/main.js" strategy="afterInteractive" />
            <Script
              src="/assets/js/plugins/apex-custom.js"
              strategy="afterInteractive"
            />
            <Script
              src="/assets/js/plugins/apexcharts.min.js"
              strategy="afterInteractive"
            />
            <Script
              src="/assets/js/plugins/emailjs-custom.js"
              strategy="afterInteractive"
            />
            <Script src="/assets/js/wow.min.js" strategy="afterInteractive" />
            <Script
              src="/assets/js/plugins/plugins.js"
              strategy="afterInteractive"
            />
            <Script
              src="/assets/js/plugins/plugin-custom.js"
              strategy="afterInteractive"
            />
            <Script
              src="/assets/js/plugins/matter.min.js"
              strategy="afterInteractive"
            />
            <Script
              src="/assets/js/plugins/matterjs-custom.js"
              strategy="afterInteractive"
            />
          </PersistGate>
        </Provider>
        <Script
          src="https://unpkg.com/@phosphor-icons/web"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
