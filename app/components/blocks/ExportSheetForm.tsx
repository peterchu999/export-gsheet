import * as React from "react";

import Dropdown from "../cells/Dropdown";
import FileInput from "../cells/FileInput";
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import { connectedSheetNameAtom, signedUsersAtom } from "~/recoils";

const ExportSheetForm = () => {
  const [signedUsers, setSignedUsers] = useRecoilState(signedUsersAtom);
  const connectedSheetName = useRecoilValue(connectedSheetNameAtom);

  const [exportedTime, setExportedTime] = React.useState<Date | null>(null);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(
    null
  );

  const getTimeDiff = () => {
    if (exportedTime) {
      const now = new Date();
      const timeDiff = now.getTime() - exportedTime.getTime();
      return `Last Export ${Math.floor(timeDiff / (1000 * 60 * 60))}h ago`;
    }
    return "";
  };

  React.useEffect(() => {
    const lastExportedDate = localStorage.getItem("lastExported");
    if (!exportedTime && lastExportedDate) {
      setExportedTime(new Date(lastExportedDate));
    } else if (exportedTime) {
      localStorage.setItem("lastExported", exportedTime?.toString());
    }
  }, [exportedTime]);

  const onAddUserClick = () => {
    const username = window.prompt("input user name");
    setSignedUsers([...signedUsers, username || "account name"]);
  };

  const onExportClick = () => {
    setExportedTime(new Date());
  };

  return (
    <div>
      <Text className="flex-1 my-3">Google Account</Text>
      <Dropdown
        setOption={setSelectedOption}
        listOfOptions={signedUsers}
        placeholder="Account Name"
        textClassName="text-sm font-medium"
        postListComponent={
          <button
            onClick={onAddUserClick}
            className="flex w-full items-center p-3 text-sm font-medium text-blue-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-blue-500 hover:underline"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
            </svg>
            Add Users
          </button>
        }
      />
      <Text className="flex-1 my-2">File</Text>
      <FileInput
        fileName={connectedSheetName || "sheet name"}
        iconSource="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"
      />
      <Button
        disabled={!connectedSheetName || !selectedOption}
        onClick={onExportClick}
        className="py-2 text-sm font-medium w-full rounded-md mt-3 disabled:opacity-50"
      >
        Export
      </Button>
      {exportedTime && (
        <Text className="text-center w-full text-xs font-medium text-[#838383] mt-3">
          {getTimeDiff()}
        </Text>
      )}
    </div>
  );
};

export default ExportSheetForm;
