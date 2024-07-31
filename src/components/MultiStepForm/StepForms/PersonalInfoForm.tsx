"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  resetForm,
  resetFormToInitialState,
  setCurrentStep,
  updateFormData,
} from "@/redux/features/formSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import NavButtons from "@/components/FormInputs/NavButtons";
import TextInput from "@/components/FormInputs/TextInput";
import DatePicker from "@/components/FormInputs/DateInput";
import CustomForm from "@/components/FormInputs/CustomForm";
import { personalInfoValidationSchema } from "./ValidationSchema";

const PersonalInfoForm = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentStep = useAppSelector((state) => state.form.currentStep);
  const formData = useAppSelector((state) => state.form.formData);

  const dispatch = useAppDispatch();
  const defaultValues = {
    fullName: formData.personalInformation?.fullName || "",
    email: formData.personalInformation?.email || "",
    phone: formData.personalInformation?.phone || "",
    dateOfBirth:
      new Date(formData.personalInformation?.dateOfBirth) || new Date(),
    nationality: formData.personalInformation?.nationality || "",
  };

  async function onSubmit(data: any) {
    try {
      dispatch(updateFormData({ personalInformation: data }));
      dispatch(setCurrentStep(currentStep + 1));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CustomForm
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      resolver={zodResolver(personalInfoValidationSchema)}
    >
      {isClient ? (
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="mb-2">
              <h5 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                Personal info
              </h5>
              <p>Please provide your Personal Informations.</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <TextInput label="Full Name" name="fullName" />
              <DatePicker label="Date of Birth" name="dateOfBirth" />
              <TextInput label="Email Address" name="email" type="email" />

              <TextInput label="Phone Number" name="phone" type="tel" />

              <TextInput label="Your Country of Residence" name="nationality" />
            </div>
          </div>
          {}
          <div className="pb-8 flex justify-end">
            <NavButtons />
          </div>
        </div>
      ) : null}
    </CustomForm>
  );
};

export default PersonalInfoForm;
