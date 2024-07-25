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
  resetFormToInitialState,
  updateFormData,
} from "@/redux/features/formSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import NavButtons from "@/components/FormInputs/NavButtons";
import TextInput from "@/components/FormInputs/TextInput";
import CustomForm from "@/components/FormInputs/CustomForm";
import {
  HealthandSafetyValidationSchema,
  TravelPreferencesValidationSchema,
} from "./ValidationSchema";
import SelectInput from "@/components/FormInputs/SelectInput";
import { toast } from "sonner";
import { useSubmitformMutation } from "@/redux/features/formApi";

const HealthSafetyForm = () => {
  const [isClient, setIsClient] = useState(false);
const [submitform,{isSuccess}]= useSubmitformMutation()
  useEffect(() => {
    setIsClient(true);
  }, []);

  const formData = useAppSelector((state) => state.form.formData);

  const dispatch = useAppDispatch();
  const defaultValues = {
    healthDeclaration: formData.healthAndSafety.healthDeclaration || "Yes",
    emergencyContactInformation:
      formData.healthAndSafety.emergencyContactInformation,
    medicalConditions: formData.healthAndSafety.medicalConditions || "",
  };
  async function onSubmit(data: any) {
    try {
      dispatch(updateFormData({ healthAndSafety: data }));
      const updatedFormData = {
        ...formData,
        healthAndSafety: data
      };
      console.log(updatedFormData)
     const res = await submitform(updatedFormData)
     console.log(res)
if(res.error){
  toast.error(
   res?.error?.data?.message
  );
}
   
      // dispatch(resetFormToInitialState());
    } catch (error) {
      console.error(error);
    }
  }
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
      {isClient ? (
        <>
          <div className="mb-8">
            <h5 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Health and Safety
            </h5>
            <p>Please provide your Health and Safety Informations.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <TextInput label="Medical Conditions" name="medicalConditions" />
            <SelectInput
              label="Health Declaration"
              name="healthDeclaration"
              options={options}
            />
            <TextInput
              label="Emergency Contact Name"
              name="emergencyContactInformation.name"
            />
            <TextInput
              label="Relation with contact"
              name="emergencyContactInformation.relationship"
            />
            <TextInput
              label="Emergency contact number"
              name="emergencyContactInformation.phone"
            />
          </div>
          <NavButtons />
        </>
      ) : null}
    </CustomForm>
  );
};

export default HealthSafetyForm;
