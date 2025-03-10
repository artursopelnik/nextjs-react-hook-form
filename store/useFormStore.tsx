import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StepOneData, StepTwoData } from "./types";

interface FormState {
  stepOne: StepOneData | null;
  stepTwo: StepTwoData | null;
  setData: ({
    step,
    data,
  }: { step: 1; data: StepOneData } | { step: 2; data: StepTwoData }) => void;
}

const stepVariant = {
  1: "stepOne",
  2: "stepTwo",
};

const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      stepOne: null,
      stepTwo: null,
      setData: ({ step, data }) =>
        set((state) => ({
          ...state,
          [stepVariant[step]]: data,
        })),
    }),
    {
      name: "form-storage",
    },
  ),
);

export default useFormStore;
