import { Controller, useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Building2Icon, HotelIcon } from "lucide-react";

interface RadioInputProps {
  label: string;
  name: string;
  options: { id: string; title: string; link?: string }[];
  className?: string;
  defaultValue?: string;
}

const RadioInput = ({
  label,
  name,
  options,
  className = "sm:col-span-2",
  defaultValue,
}: RadioInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, ...field }, fieldState: { error } }) => {
        return (
          <div className={className}>
            {/* Label for the radio input group */}
            <Label
              htmlFor={name}
              className="block text-sm font-medium leading-6 text-gray-500 dark:text-slate-50 mb-2"
            >
              {label}
            </Label>
            <div className="mt-2">
              {name === "accommodationPreference" ? (
                <div className="flex space-x-4">
                  <RadioGroup
                    defaultValue={value}
                    onChange={(value) => onChange(value)}
                    {...field}
                    className="flex space-x-4"
                  >
                    {options.map((option) => (
                      <div
                        key={option.id}
                        className={`flex items-center space-x-1 p-4 border rounded-md cursor-pointer ${
                          value === option.title
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300'
                        }`}
                        onClick={() => onChange(option.title)}
                      >
                        <RadioGroupItem
                          value={option.title}
                          id={option.title}
                          className="hidden"
                        />
                        {/* Display different icons based on the option title */}
                        {option.title === "Space Hotel" ? <HotelIcon /> : <Building2Icon />}
                        <p className={`ml-2 ${value === option.title ? 'font-semibold text-gray-900 text-sm' : 'font-medium text-gray-600 text-sm'}`}>
                          {option.title}
                        </p>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ) : (
                <RadioGroup
                  defaultValue={value}
                  onChange={(value) => onChange(value)}
                  {...field}
                  className="flex space-x-4"
                >
                  {options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.title} id={option.title} />
                      <p className={`ml-2 ${value === option.title ? 'font-semibold text-gray-900 text-sm' : 'font-medium text-gray-600 text-sm'}`}>
                        {option.title}
                      </p>
                    </div>
                  ))}
                </RadioGroup>
              )}
              {error && (
                <span className="text-sm text-red-600">{error.message}</span>
              )}
            </div>
          </div>
        );
      }}
    />
  );
};

export default RadioInput;
