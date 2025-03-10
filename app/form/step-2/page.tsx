"use client";

import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

import useFormStore from "../../../store/useFormStore";
import { StepTwoData } from "../../../store/types";

export default function StepTwoPage() {
  const router = useRouter();
  const { stepTwo, setData } = useFormStore();

  const methods = useForm<StepTwoData>({
    mode: "onTouched",
    defaultValues: stepTwo || {},
  });

  const { formState: { errors }, handleSubmit, register, watch, formState } = methods;

  const onSubmit = handleSubmit((data: StepTwoData) => {
    setData({ step: 2, data });
    router.push("/form/step-2");
  });

  return (
    <main>
      <section className="bg-gray-100">
        <article className="min-h-screen py-16 layout">
          <h1>Step 2</h1>
          <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
              <label htmlFor="acceptPrivacy">acceptPrivacy</label>
              <input
                  type="checkbox"
                id="acceptPrivacy"
                defaultValue=""
                {...register("acceptPrivacy", { required: true })}
              />
              <br />
              <br />
              {/* errors will return when field validation fails  */}
              {errors.acceptPrivacy && (
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
