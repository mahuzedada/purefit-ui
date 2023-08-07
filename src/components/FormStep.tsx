import React from "react";
import Question from "./Question";
import AnswerOptions from "./AnswerOptions";
import { IQuestion } from "../context.ts";

interface FormStepProps {
  question: IQuestion;
  onOptionSelected: (i: any) => void;
}

function FormStep({
  question,
  onOptionSelected,
}: FormStepProps): React.ReactElement {
  return (
    <div className="flex flex-col gap-4">
      <Question>{question.text}</Question>
      <AnswerOptions
        options={question.options}
        onOptionSelected={onOptionSelected}
      />
    </div>
  );
}

export default FormStep;
