import { message } from "@/components/ui/CustomMessageProvider.js/CustomMessageProvider";

export const COPY_TEXT = (text) => {
  if (!text) return;
  navigator.clipboard
    .writeText(text)
    .then(() => message.success("Copied!"))
    .catch(() => message.error("Failed to copy text."));
};

export const printFormData = (formData) => {
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }
};

export function TO_SENTENCE_CASE(str) {
  if (!str) return "";
  const safeStr = String(str); // convert anything to string safely
  return safeStr?.charAt(0)?.toUpperCase() + safeStr?.slice(1)?.toLowerCase();
}

export function FORMAT_WITH_COMMAS(number) {
  if (!number) {
    return 0;
  }
  if (number % 1 !== 0) {
    number = number.toFixed(2);
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const VALIDATE_IMAGE_BEFORE_UPLOAD = (file) => {
  const isImage = file?.type.startsWith("image/");
  if (!isImage) {
    message.error("You can only upload image files!");
  }
  const isLt2M = file?.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must be smaller than 2MB!");
  }
  return isImage && isLt2M;
};


export const FORMAT_TIME_STAMP = (isoString, format = "full") => {
  try {
    if (!isoString || typeof isoString !== "string") {
      throw new Error("Invalid input: timestamp must be a non-empty string");
    }

    const date = new Date(isoString);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid Date: unable to parse timestamp");
    }

    // Define preset formats
    const formatOptions = {
      full: {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      },
      date: {
        year: "numeric",
        month: "short",
        day: "2-digit",
      },
      time: {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      },
      shortTime: {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      },
    };

    const options = formatOptions[format] || formatOptions.full;

    return date.toLocaleString("en-US", options);
  } catch (error) {
    console.error("FORMAT_TIME_STAMP error:", error.message);
    return "Invalid Date";
  }
};
