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
import {
  BUTTON_COLORS,
  CAROUSEL_COLORS,
  CHECKBOX_COLORS,
  DATE_PICKER_COLORS,
  FORM_COLORS,
  INPUT_COLORS,
  NOTIFICATION_COLORS,
  PAGINATION_COLORS,
  POPCONFIRM_COLORS,
  PROGRESS_COLORS,
  RADIO_COLORS,
  SELECT_COLORS,
  SLIDER_COLORS,
  SWITCH_COLORS,
  TAB_COLORS,
  TABLE_COLORS,
  UPLOAD_COLORS,
} from "@/constants/colors/AntdColors";

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
        <ConfigProvider
          theme={{
            components: {
              Form: FORM_COLORS,
              Input: INPUT_COLORS,
              Notification: NOTIFICATION_COLORS,
              Pagination: PAGINATION_COLORS,
              Select: SELECT_COLORS,
              Radio: RADIO_COLORS,
              Switch: SWITCH_COLORS,
              Upload: UPLOAD_COLORS,
              Popconfirm: POPCONFIRM_COLORS,
              Progress: PROGRESS_COLORS,
              Button: BUTTON_COLORS,
              Checkbox: CHECKBOX_COLORS,
              Table: TABLE_COLORS,
              Collapse: { colorBorder: "#E6EAED" },
              Spin: { colorPrimary: "#000" },
              Slider: SLIDER_COLORS,
              DatePicker: DATE_PICKER_COLORS,
              Carousel: CAROUSEL_COLORS,
            },
          }}
        >
          <App>
            <CustomMessageProvider>
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  {children}
                </PersistGate>
              </Provider>
            </CustomMessageProvider>
          </App>
        </ConfigProvider>
      </body>
    </html>
  );
}
