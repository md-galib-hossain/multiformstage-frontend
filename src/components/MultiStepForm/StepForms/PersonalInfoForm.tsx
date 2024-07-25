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
    fullName: formData.personalInformation.fullName || "",
    email: formData.personalInformation.email || "",
    phone: formData.personalInformation.phone || "",
    dateOfBirth: formData.personalInformation.dateOfBirth || "",
    nationality: formData.personalInformation.nationality || "",
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
        <>
          <div className="mb-8">
            <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Personal info
            </h5>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <TextInput label="Full Name" name="fullName" />
            <DatePicker label="Date of Birth" name="dateOfBirth" />
            <TextInput label="Email Address" name="email" type="email" />

            <TextInput label="Phone Number" name="phone" type="tel" />

            <TextInput label="Your Country of Residence" name="nationality" />
          </div>

          <NavButtons />
        </>
      ) : null}
    </CustomForm>
  );
};

export default PersonalInfoForm;
