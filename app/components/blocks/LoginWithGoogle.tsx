import Button from "../atoms/Button";
import Text from "../atoms/Text";

import { useRecoilState } from "recoil";
import { signedUsersAtom } from "~/recoils";
import googleIcon from "../../assets/google.svg";

const LoginWithGoogle = () => {
  const [signedUsers, setSignedUsers] = useRecoilState(signedUsersAtom);
  const onConnectClick = () => {
    const username = window.prompt("input user name");
    setSignedUsers([...signedUsers, username || "account name"]);
  };

  return (
    <>
      <div className="px-3 my-6">
        <div className="flex flex-column  items-center">
          <div className="bg-[#f4f6f3] p-3 rounded-[100%]">
            <img className="w-4" src={googleIcon} alt="google icon" />
          </div>
          <div className="mx-3">
            <Text>Connect Google Account</Text>
            <p className="text-[#858585] font-medium text-xs mt-0.5">
              Please connect Google Account to use this block
            </p>
          </div>
        </div>
        <Button
          onClick={onConnectClick}
          className="px-2.5 py-1.5 text-xs font-medium rounded-md mt-3.5"
        >
          Connect
        </Button>
      </div>
    </>
  );
};

export default LoginWithGoogle;
