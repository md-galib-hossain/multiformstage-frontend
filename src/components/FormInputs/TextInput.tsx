import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface TextInputProps {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  className?: string;
  defaultValue?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  required = false,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <div className={className}>
          <Label
            htmlFor={name}
            className="block text-sm font-medium leading-6 text-gray-500 dark:text-slate-50 mb-2"
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
                sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
              placeholder={`Type the ${label.toLowerCase()}`}
            />
            {error && (
              <span className="text-sm text-red-600">{error.message}</span>
            )}
          </div>
        </div>
      )}
    />
  );
};

export default TextInput;
