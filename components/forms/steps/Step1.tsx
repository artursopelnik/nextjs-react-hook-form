"use client";

import { useFormContext } from "react-hook-form";
import { StepOneData } from "./types";

interface Props {
  onNext: () => void;
}

const Step1 = ({ onNext }: Props) => {
  const {
    register,
    formState: { errors },
    reset,
  } = useFormContext<StepOneData>();

  const onSubmit = () => {
    reset({}, { keepValues: true });
    onNext();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Step1</h2>
      <label htmlFor="firstName">firstName</label>
      <input id="firstName" {...register("firstName", { required: true })} />
      <br />
      <br />
      {/* errors will return when field validation fails  */}
      {errors.firstName && (
        <>
          <span style={{ color: "red" }}>This field is required</span>
          <br />
          <br />
        </>
      )}
      <label htmlFor="lastName">lastName</label>
      <input id="lastName" {...register("lastName", { required: true })} />
      <br />
      <br />
      {/* errors will return when field validation fails  */}
      {errors.lastName && (
        <>
          <span style={{ color: "red" }}>This field is required</span>
          <br />
          <br />
        </>
      )}
      <button type="submit">Go to next step</button>
    </form>
  );
};

export default Step1;
