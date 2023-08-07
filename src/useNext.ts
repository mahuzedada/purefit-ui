import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { QuestionContext } from "./context.ts";

export default function useNext() {
  const { answers } = useContext(QuestionContext);
  const { questionId } = useParams();
  const n = useNavigate();

  return () => {
    console.log({ answers });
    const nextKey = Object.keys(answers).find((key) => {
      if (key !== questionId && !answers[key]) {
        return key;
      }
    });
    if (nextKey) {
      n(`/${nextKey}`);
    } else {
      n("/summary");
    }
  };
}
