import * as React from "react";

import checkmarkIcon from "../../assets/checkmark.svg";
import searchIcon from "../../assets/search.svg";
import TextField from "./TextField";

export type DropdownType = {
  listOfOptions: string[];
  className?: string;
  optionContainerClassName?: string;
  defaultOption?: string;
  placeholder?: string;
  textClassName?: string;
  withSearch?: boolean;
  postListComponent?: JSX.Element;
};

const Dropdown = ({
  placeholder,
  textClassName,
  className,
  optionContainerClassName,
  listOfOptions,
  postListComponent,
  defaultOption,
  withSearch,
}: DropdownType) => {
  const [isListHidden, setIsListHidden] = React.useState<boolean>(true);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [selectedOption, setselectedOption] = React.useState<string | null>(
    defaultOption ?? null
  );
  const onDropdownClick = () => {
    setIsListHidden(!isListHidden);
  };

  const onOptionClick = (option: string) => () => {
    setselectedOption(option);
    setIsListHidden(true);
  };

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative">
      <button
        className={`flex justify-between items-center ${
          className || "w-full py-2 px-3 border border-[#f1f1f1] rounded-lg"
        }`}
        onClick={onDropdownClick}
      >
        <span className={textClassName}>{selectedOption ?? placeholder}</span>
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        className={`z-10 absolute bg-white rounded-lg shadow dark:bg-gray-700 ${
          isListHidden && "hidden"
        } ${optionContainerClassName ?? " w-full"} `}
      >
        {withSearch && (
          <TextField
            value={searchQuery}
            onChange={onSearchInput}
            leftIconSource={searchIcon}
          />
        )}
        <ul className="max-h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200">
          {listOfOptions
            .filter((option) => option.includes(searchQuery))
            .map((option) => {
              return (
                <li key={option}>
                  <button
                    onClick={onOptionClick(option)}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full justify-between"
                  >
                    {option}
                    {selectedOption === option && (
                      <img
                        className="w-4"
                        src={checkmarkIcon}
                        alt="checkmark"
                      />
                    )}
                  </button>
                </li>
              );
            })}
        </ul>
        {postListComponent}
      </div>
    </div>
  );
};

export default Dropdown;
