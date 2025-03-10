"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
};

export default function DemoForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = handleSubmit((data) => console.log(data));

  console.log(watch("firstName")); // watch input value by passing the name of it

  return (
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input
        required
        defaultValue="max"
        {...register("firstName", { required: true })}
      />
      <br />
      <br />

      <label>Last Name</label>
      <input {...register("lastName", { required: true })} />
      <br />
      <br />
      {/* errors will return when field validation fails  */}
      {errors.lastName && (
        <>
          <span>This field is required</span>
          <br />
        </>
      )}

      <button type="submit">Senden</button>
    </form>
  );
}
