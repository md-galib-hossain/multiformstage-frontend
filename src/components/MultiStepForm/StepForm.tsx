"use client";
import React from "react";

const StepForm = () => {
    const currentStep = 1

    const renderFormByStep = (step:number)=> {
        switch (step) {
            case 1:
              return <p>Personal Information</p>;
            case 2:
              return <p>Travel Preferences</p>;
            case 3:
              return <p>Health and Safety</p>;
            default:
              return null;
          }
    }

  return (
    <div className="bg-red-600 h-full rounded-lg">
     {renderFormByStep(currentStep)}
    </div>
  );
};

export default StepForm;
