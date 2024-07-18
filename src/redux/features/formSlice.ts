import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TEmergencyContact = {
  name: string;
  relationship: string;
  phone: string;
};

export type PersonalInformation = {
  fullName: string;
  dateOfBirth: Date;
  nationality: string;
  email: string;
  phone: string;
};

export type TTravelPreferences = {
  departureDate?: Date;
  returnDate?: Date;
  accommodationPreference?: string;
  specialRequests?: string;
};

export type THealthAndSafety = {
  healthDeclaration: 'Yes' | 'No';
  emergencyContactInformation: TEmergencyContact;
  medicalConditions?: string;
};

export type TForm = {
  personalInformation: PersonalInformation;
  travelPreferences: TTravelPreferences;
  healthAndSafety: THealthAndSafety;
};

const initialState: TForm = {
  personalInformation: {
    fullName: '',
    dateOfBirth: new Date(),
    nationality: '',
    email: '',
    phone: '',
  },
  travelPreferences: {
    departureDate: new Date(),
    returnDate: new Date(),
    accommodationPreference: '',
    specialRequests: '',
  },
  healthAndSafety: {
    healthDeclaration: 'No',
    emergencyContactInformation: {
      name: '',
      relationship: '',
      phone: '',
    },
    medicalConditions: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInformation: (state, action: PayloadAction<PersonalInformation>) => {
      state.personalInformation = action.payload;
    },
    setTravelPreferences: (state, action: PayloadAction<TTravelPreferences>) => {
      state.travelPreferences = action.payload;
    },
    setHealthAndSafety: (state, action: PayloadAction<THealthAndSafety>) => {
      state.healthAndSafety = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { setPersonalInformation, setTravelPreferences, setHealthAndSafety, resetForm } = formSlice.actions;

export default formSlice.reducer;
