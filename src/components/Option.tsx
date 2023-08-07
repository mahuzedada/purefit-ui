import React from "react";
import { IOption } from "../context.ts";

interface OptionProps {
  option: IOption;
  onOptionSelected: () => void;
}

function Option({ option, onOptionSelected }: OptionProps): React.ReactElement {
  const { title, image, subTitle } = option;
  if (image) {
    return (
      <div
        onClick={onOptionSelected}
        className="flex justify-between h-12 mb-4 items-center cursor-pointer rounded overflow-hidden shadow-2xl"
      >
        <div className="flex-grow">
          <div className="font-bold text-sm">{title}</div>
        </div>
        <div style={{ maxWidth: "20%" }}>
          <img className="object-cover" src={image} alt={title} />
        </div>
      </div>
    );
  }
  return (
    <div
      onClick={onOptionSelected}
      className="h-12 mb-4 items-center cursor-pointer rounded overflow-hidden shadow-2xl"
    >
      <div className="">
        <div className="font-bold text-md">{title}</div>
        <div className="font-bold text-xs">{subTitle}</div>
      </div>
    </div>
  );
}

export default Option;
