import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Label } from "../ui/label";

// Extend dayjs with the UTC plugin
dayjs.extend(utc);

type DatePickerProps = {
  label: string;
  name: string;
  className?: string;
};

const DatePicker = ({
  label,
  name,
  className = "sm:col-span-2",
}: DatePickerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => (
        <div className={className}>
          {/* Label for the date picker */}
          <Label
            htmlFor={name}
            className="block text-sm font-medium leading-6 text-gray-500 dark:text-slate-50 mb-2"
          >
            {label}
          </Label>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="justify-start text-left block rounded-none w-full border-0 border-b-2 focus:border-gray-500 py-2 text-gray-900 
                placeholder:text-gray-400 focus-visible:ring-0
                sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
                disabled={!value}
              >
                <div className="flex place-items-center">
                <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                {value && !isNaN(new Date(value).getTime())
                  ? format(new Date(value), "PPP")
                  : <span className="text-gray-500">Pick a date</span>}
                  </div>
              </Button>
            </PopoverTrigger>
            
            <PopoverContent className="w-auto p-0" align="start">
              {/* Calendar component for date selection */}
              <Calendar
                mode="single"
                selected={value ? new Date(value) : undefined}
                onSelect={(date) => {
                  onChange(date);
                }}
                captionLayout="dropdown-buttons"
                fromYear={1990}
                toYear={2024}
                disabled={(date) =>
                  name === "dateOfBirth" ? date > new Date() : date < new Date()
                }
              />
            </PopoverContent>
          </Popover>
          
          {/* Error message display */}
          {error?.message && (
            <span className="text-sm text-red-600">{error?.message}</span>
          )}
        </div>
      )}
    />
  );
};

export default DatePicker;
