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
