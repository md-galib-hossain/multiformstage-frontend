import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Controller, useFormContext } from "react-hook-form";

dayjs.extend(utc);

export default function DatePicker({
  label,
  name,
  className = "sm:col-span-2",
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date()).format("DD/MM/YYYY")}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => {
        return (
          <div className={className}>
            <Label
              htmlFor={name}
              className="block text-sm font-medium leading-6 text-gray-500 dark:text-slate-50 mb-2"
            >
              {label}
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex">
                  <Input
                    {...field}
                    type="text"
                    name={name}
                    id={name}
                    value={value ? dayjs(new Date(value!)).format("DD/MM/YYYY") : ""}
                    readOnly
                    className="cursor-pointer block rounded-none w-full border-0 border-b-2 focus:border-gray-500 py-2 text-gray-900 placeholder:text-gray-400 focus-visible:ring-0 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
                    placeholder={
                      value ? dayjs(new Date(value!)).format("DD/MM/YYYY") : `Select ${label.toLowerCase()}`
                    }
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  captionLayout="dropdown-buttons"
                  fromYear={1990}
                  toYear={2024}
                  selected={value}
                  onSelect={(date) => onChange(date)}
                  mode="single"
                  disabled={(date) =>
                    name === "dateOfBirth"
                      ? date > new Date()
                      : date < new Date()
                  }
                />
              </PopoverContent>
            </Popover>
            {error?.message && (
              <span className="text-sm text-red-600">{error?.message}</span>
            )}
          </div>
        );
      }}
    />
  );
}
