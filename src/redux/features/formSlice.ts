import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TEmergencyContact = {
  name: string;
  relationship: string;
  phone: string;
};

export type PersonalInformation = {
  fullName: string;
  dateOfBirth:  any;
  nationality: string;
  email: string;
  phone: string;
};

export type TTravelPreferences = {
  departureDate?: any;
  returnDate?: any;
  accommodationPreference?: string;
  specialRequests?: string;
};

export type THealthAndSafety = {
  healthDeclaration: "Yes" | "No";
  emergencyContactInformation: TEmergencyContact;
  medicalConditions?: string;
};

export type TForm = {
  formData: {
    personalInformation: PersonalInformation;
    travelPreferences: TTravelPreferences;
    healthAndSafety: THealthAndSafety;
  };
};

const initialState: TForm & { currentStep: number } = {
  currentStep: 1,
  formData: {
    personalInformation: {
      fullName: "",
      dateOfBirth: "",
      nationality: "",
      email: "",
      phone: "",
    },
    travelPreferences: {
      departureDate:"",
      returnDate: "",
      accommodationPreference: "",
      specialRequests: "",
    },
    healthAndSafety: {
      healthDeclaration: "No",
      emergencyContactInformation: {
        name: "",
        relationship: "",
        phone: "",
      },
      medicalConditions: "",
    },
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.currentStep = 1;
    },
    resetFormToInitialState: () => initialState,

    updateFormData: (state, action: PayloadAction<Partial<TForm["formData"]>>) => {
      console.log(action.payload)
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentStep, resetForm, updateFormData,resetFormToInitialState } = formSlice.actions;

export default formSlice.reducer;
