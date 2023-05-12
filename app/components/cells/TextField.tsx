import * as React from "react";

export type TextFieldProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIconSource?: string;
};

const TextField = ({ value, onChange, leftIconSource }: TextFieldProps) => {
  return (
    <div className="p-3 pb-0">
      <div className="relative">
        {leftIconSource && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img
              className="w-5 h-5"
              src={leftIconSource}
              alt={leftIconSource}
            />
          </div>
        )}
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="font-semibold block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default TextField;
