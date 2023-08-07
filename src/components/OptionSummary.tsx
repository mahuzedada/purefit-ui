import React from "react";
import { IQuestion, IOption } from "../context.ts";

interface OptionSummaryProps {
  question: IQuestion;
  selectedIndex: number;
}

function OptionSummary({
  question,
  selectedIndex,
}: OptionSummaryProps): React.ReactElement {
  const selectedOption: IOption | undefined = question.options[selectedIndex];

  if (!selectedOption) {
    console.error(`No option found with id ${selectedIndex}`);
    return <p>No selected option found</p>; // or render an error message
  }

  return (
    <div>
      <h3 className="text-xl">{selectedOption.title}</h3>
    </div>
  );
}

export default OptionSummary;
