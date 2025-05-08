import { useForm, FormProvider } from "react-hook-form";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const FormProviderWrapper = ({ children }: Props) => {
  const methods = useForm({
    mode: "onTouched",
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
