// validationRules.js
export const nameRules = [
  { required: true, message: "Please enter your name" },
  // Note: AntD doesn't support type 'name', so just keep required or add custom validator if needed
];

export const emailRules = [
  { required: true, message: "Please enter your email" },
  { type: "email", message: "Please enter a valid email" },
];

export const passwordRules = [
  { required: true, message: "Please enter your password" },
  { min: 6, message: "Password must be at least 6 characters" },
];
export const priceRules = [
  { required: true, message: "Please enter a price" },
  { pattern: /^[0-9]+$/, message: "Enter a valid number" },
];
export const categoryRules = [
  { required: true, message: "Please enter a category" },
];

export const titleRules = [{ required: true, message: "Please enter a title" }];
export const descriptionRules = [
  { required: true, message: "Please enter a description" },
];
