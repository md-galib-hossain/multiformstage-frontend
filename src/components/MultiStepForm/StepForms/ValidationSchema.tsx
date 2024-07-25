import { z } from "zod";

export const personalInfoValidationSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is rquired" }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Please enter a valid email address!"),
  nationality: z.string().min(1, { message: "Nationality is rquired" }),
  phone: z.string().min(1, { message: "Phone number is rquired" }),
  dateOfBirth: z.date(),
});
export const TravelPreferencesValidationSchema = z.object({
  specialRequests: z.string().optional(),
  accommodationPreference: z
    .string()
    .min(1, { message: "Accommodation Preference is required" }),
  returnDate: z.date(),
  departureDate: z.date(),
});

export const HealthandSafetyValidationSchema = z.object({
  healthDeclaration: z.string().min(1, { message: "Health Declaration is required" }),
  emergencyContactInformation: z.object({
name : z.string().min(1, { message: "Name is required" }),
relationship : z.string().min(1, { message: "Relationship is required" }),
phone : z.string().min(1, { message: "Phone number is required" }),
  }),

  medicalConditions: z.string().optional(),
});
