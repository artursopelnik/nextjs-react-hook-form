"use client";

import { useState } from "react";
import { FormProviderWrapper } from "./FormProviderWrapper";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import { FormData } from "./steps/types";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const handleFinish = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <FormProviderWrapper>
        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        {step === 2 && (
          <Step2 onPrev={() => setStep(1)} onFinish={handleFinish} />
        )}
      </FormProviderWrapper>
    </>
  );
}
