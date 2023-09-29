import Question from "./Question";
import Options from "./Options";
import { IQuestion } from "../context.ts";
import OptionsMultiple from "./OptionsMultiple";
import MultiInput from "./MultiInput";

interface FormStepProps {
  question: IQuestion;
  onOptionSelected: (i: any) => void;
}

function FormStep({
  question,
  onOptionSelected,
}: FormStepProps): React.ReactElement {
  if (question.inputs) {
    return (
      <div className="flex flex-col gap-4">
        <Question>{question.text}</Question>
        <MultiInput onNext={onOptionSelected} labels={question.inputs} />
      </div>
    );
  }
  if (question.options) {
    return (
      <div className="flex flex-col gap-4">
        <Question>{question.text}</Question>
        {
          question.multiple && question.options ?
            <OptionsMultiple options={question.options} onNext={onOptionSelected} isFullWidth={false} />
            : <Options
              options={question.options}
              onOptionSelected={onOptionSelected}
            />
        }
      </div>
    );
  }
  return <></>;
}

export default FormStep;
