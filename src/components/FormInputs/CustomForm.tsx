import { ReactNode } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  className? : string
} & TFormConfig;

const CustomForm = ({
  onSubmit,
  children,
  defaultValues,
  resolver,className=""
}: TFormProps) => {
  // Config object for useForm
  const formConfig: TFormConfig = {};

  // Add defaultValues to formConfig if provided
  if (defaultValues) {
    formConfig.defaultValues = defaultValues;
  }

  // Add resolver to formConfig if provided
  if (resolver) {
    formConfig.resolver = resolver;
  }

  // Initialize useForm with the config
  const methods = useForm(formConfig);

  // Submit handler to call the provided onSubmit and reset the form
  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default CustomForm;
