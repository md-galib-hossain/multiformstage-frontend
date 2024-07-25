// "use client";

// import React, { useEffect, useState } from "react";
// import { useAppSelector, useAppDispatch } from "@/redux/hooks";
// import { resetForm, resetFormToInitialState, setCurrentStep, updateFormData } from "@/redux/features/formSlice";
// import { useForm } from "react-hook-form";

// import NavButtons from "@/components/FormInputs/NavButtons";
// import TextInput from "@/components/FormInputs/TextInput";
// import DatePicker from "@/components/FormInputs/DateInput";

// const PersonalInfoForm = () => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const currentStep = useAppSelector((state) => state.form.currentStep);
//   const formData = useAppSelector((state) => state.form.formData);
//   const {
//     register,
//     reset,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       ...formData,
//     },
//   });

//   const dispatch = useAppDispatch();

//   async function processData(data: any) {

//     try {
//       // Update Data in the Global state
//     //   dispatch(updateFormData({ personalInformation: data }));
//     // dispatch(resetFormToInitialState());

//     console.log(data);
//       // Make API Request to Save the Data also in the DB (optional)
//       // await saveDataToDB(data);

//       // Update the Current Step
//     //   dispatch(setCurrentStep(currentStep + 1));
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <form className="px-12 py-4"  defaultValues={{ fullName: '',email:'',phone:'',dateOfBirth: '', nationality:'' }} onSubmit={handleSubmit(processData)}>
//       {isClient ? (
//         <>
//           <div className="mb-8">
//             <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
//               Personal info
//             </h5>
//             <p>Please provide your name, email address, and phone number.</p>
//           </div>
//           <div className="grid gap-2 sm:grid-cols-2">
//             <TextInput
//               label="Full Name"
//               name="fullName"
//               register={register}
//               errors={errors}
//             />
//             <TextInput
//               label="Email Address"
//               name="email"
//               type="email"
//               register={register}
//               errors={errors}
//             />
//             <TextInput
//               label="Phone Number"
//               name="phone"
//               type="tel"

//               register={register}
//               errors={errors}
//             />
//             <DatePicker
//               label="Date of Birth"
//               name="dateOfBirth"
//               required
//               register={register}
//               errors={errors}
//             />
//             <TextInput
//               label="Your Country of Residence"
//               name="nationality"

//               register={register}
//               errors={errors}
//             />
//           </div>
//           <NavButtons />
//         </>
//       ) : null}
//     </form>
//   );
// };

// export default PersonalInfoForm;

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
import SelectInput from "@/components/FormInputs/SelectInput";

const TravelPreferencesForm = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentStep = useAppSelector((state) => state.form.currentStep);
  const formData = useAppSelector((state) => state.form.formData);

  const dispatch = useAppDispatch();
  const defaultValues = {
    departureDate: formData.travelPreferences.departureDate || "",
    returnDate: formData.travelPreferences.returnDate || "",
    accommodationPreference:
      formData.travelPreferences.accommodationPreference || "",
    specialRequests: formData.travelPreferences.specialRequests || "",
  };
  async function onSubmit(data: any) {
    try {
      dispatch(updateFormData({ travelPreferences: data }));
      dispatch(setCurrentStep(currentStep + 1));
    } catch (error) {
      console.error(error);
    }
  }
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
      {isClient ? (
        <>
          <div className="mb-8">
            <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Travel Preferences
            </h5>
            <p>Please provide your Preferences.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <DatePicker label="Date of departure" name="departureDate" />
            <DatePicker label="Date of return" name="returnDate" />

            <SelectInput
              label="Accommodation Preference"
              name="accommodationPreference"
              options={options}
            />
            <TextInput label="Special Requests" name="specialRequests" />
          </div>
          <NavButtons />
        </>
      ) : null}
    </CustomForm>
  );
};

export default TravelPreferencesForm;
