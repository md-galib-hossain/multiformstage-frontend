import { z } from "zod";

// Custom phone number validator function
const phoneValidator = (value: string) => {
  if (value.length === 11) {
    const regex = /^01[3-9]\d{8}$/;
    return regex.test(value);
  } else if (value.length === 14) {
    const regex = /^\+8801[3-9]\d{8}$/;
    return regex.test(value);
  }
  return false;
};

// Zod string with custom phone validation
const phoneNumberSchema = z.string().refine(phoneValidator, {
  message: "Phone number must be in the format 01XXXXXXXXX or +8801XXXXXXXXX",
});

// Personal Information Validation Schema
export const personalInfoValidationSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email("Please enter a valid email address!"),
  nationality: z.string().min(1, { message: "Nationality is required" }),
  phone: phoneNumberSchema,
  dateOfBirth: z.date().min(new Date('1900-01-01'), { message: "Date of Birth must be a valid date" }),
});

// Travel Preferences Validation Schema
export const TravelPreferencesValidationSchema = z.object({
  specialRequests: z.string().optional(),
  accommodationPreference: z.string().min(1, { message: "Accommodation Preference is required" }),
  returnDate: z.date().min(new Date(), { message: "Return date must be in the future" }),
  departureDate: z.date().min(new Date(), { message: "Departure date must be in the future" }),
});

// Health and Safety Validation Schema
export const HealthandSafetyValidationSchema = z.object({
  healthDeclaration: z.string().min(1, { message: "Health Declaration is required" }),
  emergencyContactInformation: z.object({
    name: z.string().min(1, { message: "Name is required" }),
    relationship: z.string().min(1, { message: "Relationship is required" }),
    phone: phoneNumberSchema,
  }),
  medicalConditions: z.string().optional(),
});
