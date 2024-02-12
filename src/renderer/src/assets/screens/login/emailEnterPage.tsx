import google from "../../images/google-logo.png";
import facebook from "../../images/fb-logo.svg";
import Input from "@renderer/assets/components/input";
import PrimaryButton from "@renderer/assets/components/primaryButton";
import { Link } from "react-router-dom";

function EmailEnterPage(): JSX.Element {
  return (
    <>
      <div className="w-96 flex justify-center p-6 h-fit text-center rounded-3xl flex-col self-center">
        <h1 className="text text-gray-200 text-xl">
          Enter a username or an E-mail
        </h1>
        <Input type="text" placeholder="Username or E-mail" />
        <PrimaryButton onClick={() => console.log("asdf")} text={"Enter"} />
        <Link
          className="button text-lg border-2 border-zinc-800 hover:bg-zinc-800 text-gray-200 bg-transparent transition-all duration-300 mt-2 rounded-2xl leading-[50px] h-14"
          to={"/login/email-reg"}
          unstable_viewTransition
        >
          Create an account
        </Link>
        <div className="text text-gray-400 text-sm mt-6">or</div>
        <div className="grid grid-cols-2 divide-zinc-800 h-fit border-2 border-zinc-800 rounded-2xl divide-x-2 mt-4">
          <button className="hover:bg-zinc-800 transition-all duration-300 py-2 rounded-l-xl text flex justify-center ">
            <img className="h-6 mr-3" src={google} alt="" />
            <div className="button text-gray-200 ">Google</div>
          </button>
          <button className="hover:bg-zinc-800 transition-all duration-300 py-2  rounded-r-xl text flex justify-center">
            <img className="h-6 mr-3" src={facebook} alt="" />
            <div className="button text-gray-200 ">Facebook</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default EmailEnterPage;
