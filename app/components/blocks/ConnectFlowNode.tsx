import * as React from "react";
import { useSetRecoilState } from "recoil";
import databaseIcon from "~/assets/database.svg";
import { connectedSheetNameAtom } from "~/recoils";

export const ConnectFlowNode = () => {
  const setconnectedSheetNameAtom = useSetRecoilState(connectedSheetNameAtom);

  const onConnectButtonClick = () => {
    const input = window.prompt("Input File Name");
    setconnectedSheetNameAtom(input || "sheetname");
  };

  return (
    <div>
      <button
        onClick={onConnectButtonClick}
        className="text-xs mt-4 text-[#2c2c2c] font-medium flex flex-row bg-[#f0f0f0] w-full justify-center items-center py-2 rounded-2xl"
      >
        <img className="w-4 mr-2" src={databaseIcon} alt="database icon" />
        <span>Connect Flow Node to Import to Google Sheets</span>
      </button>
    </div>
  );
};

export default ConnectFlowNode;
