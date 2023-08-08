import React, { useContext, useCallback } from "react";
import { useParams } from "react-router-dom";
import { QuestionContext } from "../context.ts";
import FormStep from "../components/FormStep";
import ProgressBar from "../components/ProgressBar.tsx";
import BackButton from "../components/BackButton.tsx";
import useNext from "../useNext.ts";

function StepView(): React.ReactElement | null {
  const { questions, answers, setAnswers } = useContext(QuestionContext);
  const { questionId } = useParams();
  const n = useNext();

  const handleOptionSelected = useCallback(
    (selectedOption: number) => {
      setAnswers({
        ...answers,
        [questionId!]: selectedOption,
      });
      n();
    },
    [questionId],
  );

  const question = questions.get(questionId!);
  if (!question) {
    console.error(`No question found with id ${questionId}`);
    return null;
  }

  return (
    <div className="flex flex-col gap-8">
      <ProgressBar />
      <FormStep question={question} onOptionSelected={handleOptionSelected} />
      <BackButton />
    </div>
  );
}

export default StepView;
