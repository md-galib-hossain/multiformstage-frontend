"use client";
import React from "react";
import PersonalInfoForm from "./StepForms/PersonalInfoForm";
import TravelPreferencesForm from "./StepForms/TravelPreferencesForm";
import HealthSafetyForm from "./StepForms/HealthSafetyForm";
import { useAppSelector } from "@/redux/hooks";

const StepForm = () => {
  const currentStep = useAppSelector((state)=> state.form.currentStep)

    const renderFormByStep = (step:number)=> {
        switch (step) {
            case 1:
              return <PersonalInfoForm/>;
            case 2:
              return <TravelPreferencesForm/>;
            case 3:
              return <HealthSafetyForm/>;
            default:
              return null;
          }
    }

  return (
    <div className="h-full rounded-lg">
     {renderFormByStep(currentStep)}
    </div>
  );
};

export default StepForm;
