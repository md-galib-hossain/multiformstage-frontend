"use client";
import StepForm from "@/components/MultiStepForm/StepForm";
import Steps from "@/components/MultiStepForm/Steps";
import { useEffect, useState } from "react";

const Homepage = () => {
  // Define the steps for the multi-step form
  const steps = [
    {
      number: 1,
      title: "Personal Information",
    },
    {
      number: 2,
      title: "Travel Preferences",
    },
    {
      number: 3,
      title: "Health and Safety",
    },
  ];

  // State to track if the component is running on the client-side
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to set the state to true on client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-slate-200 min-h-screen p-4 flex justify-center items-center">
      {/* Render the form only on client-side */}
      {isClient && (
        <div className="mx-auto w-full max-w-4xl p-4 sm:p-4 md:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid grid-cols-12 gap-4 min-h-[670px]">
          {/* Steps component */}
       
          <div className="col-span-12 md:col-span-4">
            <Steps steps={steps} />
          </div>
          {/* Form component */}
          <div className="rounded-lg col-span-full md:col-span-8">
            <StepForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
