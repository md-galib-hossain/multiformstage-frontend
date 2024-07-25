"use client"
import StepForm from "@/components/MultiStepForm/StepForm";
import Steps from "@/components/MultiStepForm/Steps";
import { useEffect, useState } from "react";

const Homepage = () => {
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
    }
  ];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen p-4 flex justify-center items-center">
    
     {
      isClient ? <> {/* form container */}
      <div className="mx-auto w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-4 md:p-6 dark:bg-gray-800 dark:border-gray-700 grid grid-cols-12 gap-4 min-h-screen">
        {/* Steps */}
        <div className="col-span-12 md:col-span-4 ">
          <Steps steps={steps} />
        </div>
        {/* Form */}
        <div className="rounded-lg col-span-full md:col-span-8">
          <StepForm />
        </div>
      </div></> : null
     }
    
    </div>
  );
};

export default Homepage;
