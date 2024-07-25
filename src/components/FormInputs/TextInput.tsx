// import { Input } from "../ui/input";
// import { Label } from "../ui/label";

// export default function TextInput({
//     label,
//     name,
//     register,
//     errors,
//     isRequired = true,
//     type = "text",
//     className = "sm:col-span-2",
//     defaultValue = "",
//   } : any) {

//     return (

//       <div className={className}>
//         <Label
//           htmlFor={name}
//           className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 "
//         >
//           {label}
//         </Label>
//         <div className="mt-2">
//           <Input
//             {...register(`${name}`, { required: isRequired })}
//             type={type}
//             name={name}
//             id={name}
//             defaultValue= {defaultValue}
//             autoComplete={name}
//             className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-700 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100 "
//             placeholder={`Type the ${label.toLowerCase()}`}
//           />
//           {errors[`${name}`] && (
//             <span className="text-sm text-red-600 ">{label} is required</span>
//           )}
//         </div>
//       </div>
//     );
//   }

import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function TextInput({
  label,
  name,

  required = false,
  type = "text",
  className = "sm:col-span-2",
  defaultValue,
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={className}>
            <Label
              htmlFor={name}
              className="block text-sm font-medium leading-6 text-gray-500 dark:text-slate-50 mb-2 "
            >
              {label}
            </Label>
            <div className="mt-2">
              <Input
                {...field}
                type={type}
                name={name}
                id={name}
                required={required}
                autoComplete={name}
                className="block rounded-none w-full border-0 border-b-2 focus:border-gray-500 py-2 text-gray-900 
                placeholder:text-gray-400 focus-visible:ring-0
                sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100 "
                placeholder={`Type the ${label.toLowerCase()}`}
              />
              {/* className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 
                ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 
                focus:ring-inset focus:ring-blue-700 dark:focus:ring-slate-500 
                sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100 " */}
              {error?.message && (
                <span className="text-sm text-red-600 ">{error?.message}</span>
              )}
            </div>
          </div>
        );
      }}
    />
  );
}
