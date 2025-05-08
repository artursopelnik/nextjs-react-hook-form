export type StepOneData = {
  firstName: string;
  lastName: string;
};

type StepTwoData = {
  acceptPrivacy: boolean;
};

export type FormData = StepOneData & StepTwoData;
