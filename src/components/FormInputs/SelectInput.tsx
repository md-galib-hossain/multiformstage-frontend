import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";

interface SelectInputProps {
  label: string;
  name: string;

  className?: string;
  options: { id: string; title: string }[];

  placeHolder?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  className = "sm:col-span-2",
  options,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...field },
        fieldState: { error } }) => {
        return (
          <div className={className}>
            <label
              htmlFor={name}
              className="block text-sm font-medium leading-6 text-gray-500 dark:text-slate-50 mb-2 "
            >
              {label}
            </label>
            <div className="mt-2 ">
              <Select onValueChange={(item)=> onChange(item)} {...field}>
                <SelectTrigger
                  className="w-[180px] rounded-none border-0 border-b-2 focus:border-gray-500 text-gray-900 
                focus-visible:ring-0 focus:ring-0
                sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100 "
                >
                  <SelectValue placeholder={"Select"}  />
                </SelectTrigger>
                <SelectContent  >
                  {options.map(
                    (option: { id: string; title: string }, i: number) => (
                      <SelectItem key={option.title} onChange={(item)=> onChange(item)} value={option.title}>
                        {option.title}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
              {error ? (
                <span className="text-sm text-red-600 ">
                  {error?.message as string}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      }}
    />
  );
};

export default SelectInput;
