import * as React from "react";
import Dropdown from "./Dropdown";
import Text from "../atoms/Text";
import xIcon from "../../assets/x.svg";

export type FileInputProps = {
  iconSource: string;
  fileName: string;
  onDeleteClick?: () => void;
};

const FileInput = ({ iconSource, fileName, onDeleteClick }: FileInputProps) => {
  return (
    <div className="flex justify-between items-center w-full p-2 border border-[#f1f1f1] rounded-lg">
      <img className="w-6" src={iconSource} alt="fileIcon" />
      <div className="flex flex-1 justify-between items-center flex-row mx-3">
        <Text className="font-medium">{fileName}</Text>
        <Dropdown
          defaultOption="Tab1"
          className="bg-[#f5f5f5] px-3 py-2 rounded-3xl"
          textClassName="text-xs font-semibold text-[#838383]"
          optionContainerClassName="w-40 left-2 rounded-xl self-end mt-4 border-none shadow-lg"
          listOfOptions={["Tab1", "Tab2", "Tab3", "Tab4", "Tab5"]}
          withSearch
        />
      </div>
      <button onClick={onDeleteClick}>
        <img className="w-3" src={xIcon} alt="delete icon" />
      </button>
    </div>
  );
};

export default FileInput;
