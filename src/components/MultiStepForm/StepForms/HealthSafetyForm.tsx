"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { resetFormToInitialState, updateFormData } from "@/redux/features/formSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import NavButtons from "@/components/FormInputs/NavButtons";
import TextInput from "@/components/FormInputs/TextInput";
import CustomForm from "@/components/FormInputs/CustomForm";
import { HealthandSafetyValidationSchema } from "./ValidationSchema";
import { toast } from "sonner";
import { useSubmitformMutation } from "@/redux/features/formApi";
import { TResponse } from "@/types";
import RadioInput from "@/components/FormInputs/RadioInput";

const HealthSafetyForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [submitForm, { isLoading }] = useSubmitformMutation();
  const formData = useAppSelector((state) => state.form.formData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultValues = {
    healthDeclaration: formData.healthAndSafety.healthDeclaration || "Yes",
    emergencyContactInformation: formData.healthAndSafety.emergencyContactInformation || {
      name: "",
      relationship: "",
      phone: "",
    },
    medicalConditions: formData.healthAndSafety.medicalConditions || "",
  };

  const onSubmit = async (data: any) => {
    try {
      dispatch(updateFormData({ healthAndSafety: data }));
      const updatedFormData = { ...formData, healthAndSafety: data };
      const res = await submitForm(updatedFormData) as TResponse<any>;
      
      if (res?.error) {
        toast.error(res.error.data.message);
      } else if (res?.data) {
        toast.success(
          `Dear ${formData.personalInformation.fullName}, your submission is confirmed. Check your email for details.`
        );
        dispatch(resetFormToInitialState());
      }

    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const options = [
    { id: "1", title: "Yes" },
    { id: "2", title: "No" },
  ];

  return (
    <CustomForm
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      resolver={zodResolver(HealthandSafetyValidationSchema)}
    >
      {isClient && (
        <>
          <div className="mb-8">
            <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Health and Safety
            </h5>
            <p>Please provide your Health and Safety information.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <TextInput label="Medical Conditions" name="medicalConditions" />
            <RadioInput
              label="Health Declaration"
              name="healthDeclaration"
              options={options}
            />
            <TextInput
              label="Emergency Contact Name"
              name="emergencyContactInformation.name"
            />
            <TextInput
              label="Relation with Contact"
              name="emergencyContactInformation.relationship"
            />
            <TextInput
              label="Emergency Contact Number"
              name="emergencyContactInformation.phone"
            />
          </div>
          <NavButtons disabled={isLoading} />
        </>
      )}
    </CustomForm>
  );
};

export default HealthSafetyForm;
