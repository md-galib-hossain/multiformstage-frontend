import {
  resetFormToInitialState,
  setCurrentStep,
} from "@/redux/features/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface NavButtonsProps {
  disabled?: boolean;
}

const NavButtons = ({ disabled }: NavButtonsProps) => {
  const currentStep = useAppSelector((state) => state.form.currentStep);
  const dispatch = useAppDispatch();

  // Function to handle navigation to the previous step
  const handlePrevious = () => {
    dispatch(setCurrentStep(currentStep - 1));
  };

  // Function to handle form reset
  const handleReset = () => {
    dispatch(resetFormToInitialState());
  };

  return (
    <div className="flex justify-between items-center mt-5">
      {/* Container for the Clear Form button */}
      {currentStep > 1 && (
        <div className="flex-shrink-0">
          <Button
            disabled={disabled}
            onClick={handleReset}
            variant="link"
            className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Clear Form
          </Button>
        </div>
      )}
      {/* Container for Previous and Submit buttons */}
      <div className="flex gap-2 items-center ml-auto">
        {currentStep > 1 && (
          <Button
            disabled={disabled}
            onClick={handlePrevious}
            type="button"
            className="relative inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            <span>Previous</span>
            {disabled && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="loading loading-dots loading-sm"></span>
              </span>
            )}
          </Button>
        )}
        <Button
          disabled={disabled}
          type="submit"
          className="relative inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <span className="relative z-10">
            {currentStep === 3 ? "Confirm and Submit" : "Save and Continue"}
          </span>
          {disabled && (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="loading loading-dots loading-sm"></span>
            </span>
          )}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default NavButtons;
