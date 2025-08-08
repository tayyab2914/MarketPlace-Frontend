// Reusable Color Helper Function
const createColorSet = (primaryColor) => ({
    colorLink: primaryColor,
    colorLinkActive: primaryColor,
    colorLinkHover: primaryColor,
    colorPrimary: primaryColor,
    colorPrimaryActive: primaryColor,
    colorPrimaryBorder: primaryColor,
    colorPrimaryHover: primaryColor,
  });
  
  // Theme Colors
  export const THEME_COLORS = {
    colorDeepDark: "#000",          // Usually black, keep as is if you want true black
    colorDark: "#383655",           // Dark shade, unchanged
    colorWhite: "#ffffff",
    colorLightGray: "#000",         // This was black, you might want to update or rename
    colorAccent: "#0065FF",         // Updated primary accent color (blue)
    colorAccentHover: "#0051cc",   // Slightly darker blue for hover effect
    colorLightAccent: "rgb(236, 236, 236)",
    colorMuted: "#aeafbe",
    dropShadow: "4px 4px 6px rgba(0, 0, 0, 0.075)",
  };
  
  // Form Colors
  export const FORM_COLORS = {
    colorText: THEME_COLORS.colorDark,
    labelColor: THEME_COLORS.colorDark,
  };
  
  // Tab Colors
  export const TAB_COLORS = {
    itemActiveColor: "#fff",
    itemHoverColor: "#fff",
    itemSelectedColor: "#fff",
    inkBarColor: "#fff",
    colorPrimaryBorder: THEME_COLORS.colorAccent,
    ...createColorSet(THEME_COLORS.colorAccent),
  };
  
  export const CAROUSEL_COLORS = {
    colorText: "#000",
    arrowOffset: "0",
  };
  
  // Input Colors
  export const INPUT_COLORS = createColorSet(THEME_COLORS.colorAccent);
  
  // Table Colors
  export const TABLE_COLORS = {
    itemActiveColor: "#fff",
    itemHoverColor: "#fff",
    itemSelectedColor: "#fff",
    inkBarColor: "#fff",
    colorPrimaryBorder: THEME_COLORS.colorAccent,
    rowSelectedBg: "#e2e3e3",
    rowSelectedHoverBg: "#e2e3e3",
    ...createColorSet(THEME_COLORS.colorAccent),
  };
  
  // Checkbox Colors
  export const CHECKBOX_COLORS = createColorSet(THEME_COLORS.colorAccent);
  
  // Date Picker Colors
  export const DATE_PICKER_COLORS = {
    activeBorderColor: THEME_COLORS.colorAccent,
    cellHoverWithRangeBg: "#e2e3e3",
    cellActiveWithRangeBg: "#e2e3e3",
    cellRangeBorderColor: THEME_COLORS.colorAccent,
    hoverBorderColor: THEME_COLORS.colorAccent,
    ...createColorSet(THEME_COLORS.colorAccent),
  };
  
  // Notification Colors
  export const NOTIFICATION_COLORS = {
    colorInfo: THEME_COLORS.colorAccent,
  };
  
  // Pagination Colors
  export const PAGINATION_COLORS = createColorSet(THEME_COLORS.colorAccent);
  
  // Select Colors
  export const SELECT_COLORS = {
    itemSelectedBg: THEME_COLORS.colorLightAccent,
    itemSelectedColor: THEME_COLORS.colorWhite,
    fontFamily: "montserrat",
    controlOutline: THEME_COLORS.colorAccent,
    optionSelectedBg: THEME_COLORS.colorLightAccent,
    colorBorder: "#E6EAED",
    ...createColorSet(THEME_COLORS.colorAccent),
  };
  
  // Radio Colors
  export const RADIO_COLORS = {
    itemActiveColor: "#fff",
    itemHoverColor: "#fff",
    itemSelectedColor: "#fff",
    inkBarColor: "#fff",
    colorPrimaryBorder: THEME_COLORS.colorAccent,
    colorLinkActive: "#fff",
    colorPrimaryActive: "#fff",
    ...createColorSet(THEME_COLORS.colorAccent),
  };
  
  // Slider Colors
  export const SLIDER_COLORS = {
    itemActiveColor: "#fff",
    itemHoverColor: "#fff",
    itemSelectedColor: "#fff",
    inkBarColor: "#fff",
    colorPrimaryBorder: THEME_COLORS.colorAccent,
    colorPrimaryBorderHover: THEME_COLORS.colorAccent,
    colorLinkActive: "#fff",
    colorPrimaryActive: "#fff",
    ...createColorSet(THEME_COLORS.colorAccent),
  };
  
  // Switch Colors
  export const SWITCH_COLORS = {
    buttonSolidCheckedActiveBg: "#0065FF",
    buttonSolidCheckedBg: "#0065FF",
    colorPrimary: "#0065FF",
    colorPrimaryHover: "#0051cc",
    colorPrimaryBorder: THEME_COLORS.colorLightAccent,
  };
  
  // Upload Colors
  export const UPLOAD_COLORS = createColorSet(THEME_COLORS.colorAccent);
  
  // Popconfirm Colors
  export const POPCONFIRM_COLORS = {
    colorWarning: THEME_COLORS.colorAccent,
  };
  
  // Progress Colors
  export const PROGRESS_COLORS = {
    defaultColor: THEME_COLORS.colorAccent,
  };
  
  // Button Colors
  export const BUTTON_COLORS = createColorSet(THEME_COLORS.colorAccent);
  