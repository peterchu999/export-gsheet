import trashIcon from "../../assets/trash.svg";
import Text from "../atoms/Text";

import { useRecoilValue } from "recoil";
import { connectedSheetNameAtom, signedUsersAtom } from "~/recoils";

import ConnectFlowNode from "./ConnectFlowNode";
import ExportSheetForm from "./ExportSheetForm";
import LoginWithGoogle from "./LoginWithGoogle";

const ExportCard = () => {
  const signedUsers = useRecoilValue(signedUsersAtom);
  const connectedSheet = useRecoilValue(connectedSheetNameAtom);

  const renderExportCardContent = () => {
    if (signedUsers.length < 1) {
      return <LoginWithGoogle />;
    } else if (!connectedSheet) {
      return <ConnectFlowNode />;
    } else {
      return <ExportSheetForm />;
    }
  };
  return (
    <div className="flex bg-[#f5f5f5] h-[100vh] justify-center items-center">
      <div className=" bg-white w-[430px] p-4 border-[#dbdbdb] border rounded-xl justify-between">
        <div className="flex flex-row justify-between items-center">
          <div className="bg-[#e7f7f1] p-2 rounded-md">
            <img
              className="w-5 h-5"
              src="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png"
              srcSet="https://www.gstatic.com/images/branding/product/1x/sheets_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/sheets_2020q4_48dp.png 2x "
              alt="spreadsheet logos"
            />
          </div>

          <Text className="flex-1 mx-3">Export to Google Sheets</Text>
          <div className="bg-[#efefef] p-1 rounded-md">
            <img className="w-5" src={trashIcon} alt="delete icon" />
          </div>
        </div>
        {renderExportCardContent()}
      </div>
    </div>
  );
};

export default ExportCard;
