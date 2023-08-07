import React, { useContext } from "react";
import { IQuestion, QuestionContext } from "../context.ts";
import { useNavigate } from "react-router-dom";
import { prompt } from "../ai/api.ts";

function Summary(): React.ReactElement {
  const { questions, answers, setAnswers } = useContext(QuestionContext);

  const navigate = useNavigate();

  function resetAnswers(): void {
    setAnswers({
      gender: null,
      age_range: null,
      lifestyle: null,
      marital_status: null,
      number_of_kids: null,
      kids_age_ranges: null,
      allergies: null,
      preferred_cuisine: null,
      preferred_protein: null,
      preferred_fat: null,
      preferred_carbs: null,
      specific_diet: null,
      diet_goal: null,
      meals_per_day: null,
      time_for_cook: null,
      dietary_restrictions: null,
    });
    navigate("/");
  }

  function submit(): void {
    prompt({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      user_info: answers,
      diet_rules: {
        no_artificial_sugar: true,
        limited_salt: true,
        intermittent_fasting: "{dependent_on_user}",
        reduced_portion: "{dependent_on_user}",
        reduced_times_eating: "{dependent_on_user}",
      },
    }).catch(console.error);
  }

  return (
    <div className="p-4 md:p-10 rounded-lg shadow-lg h-[70vh] overflow-scroll">
      <h1 className="text-4xl mb-8 text-center font-bold">Summary</h1>
      <button onClick={submit}>Submit</button>
      <div className="flex flex-wrap">
        {Array.from(questions.entries()).map(
          ([questionId, question]: [string, IQuestion]) => (
            <div
              key={questionId}
              className="text-sm mb-8 rounded-lg shadow-md p-2"
            >
              <h2 className="font-semibold">{question.summaryText}</h2>
              <div className=" font-medium">{answers[questionId]}</div>
            </div>
          ),
        )}
      </div>
      <button
        className="px-8 py-4 mt-8 bg-blue-600 text-white rounded-lg w-full md:w-auto"
        onClick={resetAnswers}
      >
        Start Over
      </button>
    </div>
  );
}

export default Summary;