import { resetFormToInitialState, setCurrentStep } from "@/redux/features/formSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {  ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
export default function NavButtons() {
  const currentStep = useAppSelector((state) => state.form.currentStep);
  const dispatch = useAppDispatch();
  function handlePrevious() {
    dispatch(setCurrentStep(currentStep - 1));
  }
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mt-5">
  <Button
      onClick={()=> dispatch(resetFormToInitialState())}
        variant={"link"}
        className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900  dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Clear Form
      </Button>
      <div className="flex gap-2 items-center">
      {currentStep > 1 && (
        <Button
          onClick={handlePrevious}
          type="button"
          className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </Button>
      )}
      <Button
        type="submit"
        className="inline-flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        <span>
          {currentStep === 3 ? "Confirm and Submit" : "Save and Continue"}
        </span>
        <ChevronRight className="w-5 h-5 ml-2" />
      </Button>
      </div>
    </div>
  );
}
