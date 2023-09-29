import { useLocation } from "react-router-dom";
import {useEffect, useState} from 'react';
import {IOption} from "../context";

interface OptionsMultipleProps {
    options: IOption[];
    onNext: (answer: string) => void;
    isFullWidth: boolean;
}

const OptionsMultiple: React.FC<OptionsMultipleProps> = ({ options, onNext, isFullWidth }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    setSelectedOptions([])
  }, [location]);

  const toggleOption = (option: string) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((o) => o !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-2">
        {options.map((option, idx) => (
          <button
            key={idx}
            className={`${
              selectedOptions.includes(option.title)
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            } ${
              isFullWidth ? 'w-full' : 'whitespace-nowrap'
            } py-2 px-4 rounded-md focus:outline-none transition-colors duration-200 ease-in-out`}
            onClick={() => toggleOption(option.title)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <button
        className="w-full bg-green-500 text-white mt-4 py-2 px-4 rounded-md focus:outline-none transition-colors duration-200 ease-in-out"
        onClick={() => onNext(selectedOptions.join(', '))}
      >
                Next
      </button>
    </div>
  );
}

export default OptionsMultiple;
