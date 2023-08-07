import React from "react";

export interface IQuestion {
  id: string;
  text: string;
  summaryText: string;
  options: IOption[];
}

export interface IOption {
  title: string;
  subTitle?: string;
  image?: string;
}

export interface QuestionnaireContextData {
  questions: Map<string, IQuestion>;
  answers: { [key: string]: string | null };
  setAnswers: (o: any) => void;
}

export const QuestionContext = React.createContext<QuestionnaireContextData>({
  questions: new Map(),
  answers: {},
  setAnswers: () => {},
});
