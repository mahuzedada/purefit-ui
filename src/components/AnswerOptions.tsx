import React from "react";
import OptionComponent from "./Option.tsx";
import { IOption } from "../context.ts"; // import the Option component

interface AnswerOptionsProps {
  options: IOption[];
  onOptionSelected: (i: any) => void;
}

function AnswerOptions({
  options,
  onOptionSelected,
}: AnswerOptionsProps): React.ReactElement {
  return (
    <div className="">
      {options.map((option, index) => (
        <OptionComponent
          key={index}
          option={option}
          onOptionSelected={() => onOptionSelected(option.title)}
        />
      ))}
    </div>
  );
}

export default AnswerOptions;
