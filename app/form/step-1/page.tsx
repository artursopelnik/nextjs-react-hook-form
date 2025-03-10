"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

import useFormStore from "../../../store/useFormStore";
import { StepOneData } from "../../../store/types";

export default function StepOnePage() {
  const router = useRouter();
  const { stepOne, setData } = useFormStore();

  const methods = useForm<StepOneData>({
    mode: "onTouched",
    defaultValues: stepOne || {},
  });

  const { formState: { errors }, handleSubmit, register, watch, formState } = methods;

  const onSubmit = handleSubmit((data: StepOneData) => {
    setData({ step: 1, data });
    router.push("/form/step-2");
  });

  return (
    <main>
      <section className="bg-gray-100">
        <article className="min-h-screen py-16 layout">
          <h1>Step 1</h1>
          <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
              <label htmlFor="firstName">firstName</label>
              <input
                id="firstName"
                defaultValue={stepOne?.firstName}
                {...register("firstName", { required: true })}
              />
              <br />
              <br />
              {/* errors will return when field validation fails  */}
              {errors.firstName && (
                  <>
                    <span style={{ color: 'red'}}>This field is required</span>
                    <br /><br />
                  </>
              )}
              <label htmlFor="lastName">lastName</label>
              <input id="lastName"
                     defaultValue={stepOne?.lastName}
                  {...register("lastName", { required: true })}
              />
              <br />
              <br />
              {/* errors will return when field validation fails  */}
              {errors.lastName && (
                  <>
                    <span style={{ color: 'red'}}>This field is required</span>
                    <br /><br />
                  </>
              )}
              <button type="submit">Send</button>
            </form>
          </FormProvider>
        </article>
      </section>
    </main>
  );
}
