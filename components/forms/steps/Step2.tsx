"use client";

import { useFormContext } from "react-hook-form";
import { FormData } from "./types";
import { useState } from "react";

type Props = {
  onPrev: () => void;
  onFinish: (data: FormData) => void;
};

const Step2 = ({ onPrev, onFinish }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useFormContext<FormData>();

  const onSubmit = (data: FormData) => {
    onFinish(data);
  };

  const handlePrev = () => {
    reset({}, { keepValues: true });
    onPrev();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step2</h2>
      <label htmlFor="acceptPrivacy">acceptPrivacy</label>
      <input
        {...register("acceptPrivacy", { required: true })}
        type="checkbox"
        id="acceptPrivacy"
      />
      {/* errors will return when field validation fails  */}
      {errors.acceptPrivacy && (
        <>
          <span style={{ color: "red" }}>This field is required</span>
          <br />
          <br />
        </>
      )}
      {isSubmitSuccessful && <span>Thanks for sending</span>}
      <div className="mt-4 flex gap-2">
        <button type="button" onClick={handlePrev}>
          Zurück
        </button>
        <button type="submit">Abschicken</button>
      </div>
    </form>
  );
};

export default Step2;
