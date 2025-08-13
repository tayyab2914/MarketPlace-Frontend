"use client";

import { Montserrat, Geist_Mono } from "next/font/google";
import "./(styles)/globals.css";
import "./(styles)/animate.min.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { App, ConfigProvider } from "antd";
import { CustomMessageProvider } from "@/components/ui/CustomMessageProvider.js/CustomMessageProvider";
import { ANTD_COMPONENTS } from "./(utils)/utils";
import VerifyToken from "./(utils)/VerifyToken";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="antialiased">
        <ConfigProvider theme={ANTD_COMPONENTS}>
          <App>
            <CustomMessageProvider>
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  {children}
                  <VerifyToken />
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
            </CustomMessageProvider>
          </App>
        </ConfigProvider>
      </body>
    </html>
  );
}
