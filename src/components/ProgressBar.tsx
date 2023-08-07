import React, { useContext } from "react";
import { QuestionContext } from "../context.ts";

function ProgressBar(): React.ReactElement {
  const { questions, answers } = useContext(QuestionContext);

  const totalQuestions = questions.size;
  const answeredQuestions = Object.keys(answers).filter(
    (key) => !!answers[key],
  ).length;

  const progress = (answeredQuestions / totalQuestions) * 100;

  return (
    <div>
      <div className="text-lg font-semibold">
        Step {answeredQuestions}/{totalQuestions}
      </div>
      <div className="w-full h-4 bg-gray-300 rounded-full overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-green-500"
        />
      </div>
    </div>
  );
}

export default ProgressBar;
