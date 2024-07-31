"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setCurrentStep, updateFormData } from "@/redux/features/formSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import NavButtons from "@/components/FormInputs/NavButtons";
import TextInput from "@/components/FormInputs/TextInput";
import DatePicker from "@/components/FormInputs/DateInput";
import CustomForm from "@/components/FormInputs/CustomForm";
import { TravelPreferencesValidationSchema } from "./ValidationSchema";
import RadioInput from "@/components/FormInputs/RadioInput";

const TravelPreferencesForm = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentStep = useAppSelector((state) => state.form.currentStep);
  const formData = useAppSelector((state) => state.form.formData);
  const dispatch = useAppDispatch();

  const defaultValues = {
    departureDate:
      new Date(formData.travelPreferences.departureDate) || new Date(),
    returnDate: new Date(formData.travelPreferences.returnDate) || new Date(),
    accommodationPreference:
      formData.travelPreferences?.accommodationPreference || "",
    specialRequests: formData.travelPreferences?.specialRequests || "",
  };

  const onSubmit = async (data: any) => {
    try {
      const formattedData = {
        ...data,
        departureDate: new Date(data.departureDate),
        returnDate: new Date(data.returnDate),
      };

      dispatch(updateFormData({ travelPreferences: formattedData }));
      dispatch(setCurrentStep(currentStep + 1));
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const options = [
    { id: "1", title: "Space Hotel" },
    { id: "2", title: "Martian Base" },
  ];

  return (
    <CustomForm
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      resolver={zodResolver(TravelPreferencesValidationSchema)}
    >
      {isClient && (
      <div className="flex flex-col justify-between h-full">
          <>
          <div className="mb-2">
            <h5 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
              Travel Preferences
            </h5>
            <p>Please provide your travel preferences.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <DatePicker label="Date of Departure" name="departureDate" />
            <DatePicker label="Date of Return" name="returnDate" />
            <RadioInput
              label="Accommodation Preference"
              name="accommodationPreference"
              options={options}
            />
            <TextInput label="Special Requests" name="specialRequests" />
          </div>
        </>
        <div className="pb-8 flex justify-center md:justify-end">

          <NavButtons />
        </div>
      </div>
      )}
    </CustomForm>
  );
};

export default TravelPreferencesForm;
