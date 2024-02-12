import star from "../images/star.svg";
import { Link } from "react-router-dom";

function Onboarding(): JSX.Element {
  return (
    <>
      <div className="static overflow-hidden	bg-cover bg-center select-none h-screen w-screen bg-background bg-onboarding-svg">
        <div className="absolute draggable-zone flex justify-center bg-transparent h-14 w-screen text-center">
          <div className="logo relative w-fit mt-3">
            <img className="logo-star absolute left-56 top-0 w-6" src={star} />
            <div className="logo-text text-gray-200  text-5xl">PrimeLink</div>
          </div>
        </div>
        <div className="w-screen h-screen flex flex-col justify-center content-center">
          <div className="text text-gray-200  text-6xl text-center">
            You will need an account
          </div>
          <div className="text text-6xl text-gray-200 text-center">
            to enter the app
          </div>
          <Link
            to="/login/email-enter"
            className="button bg-primary-blue hover:bg-cyan-500 text-gray-200 ease-out duration-500 text-lg rounded-full px-16 py-3 mx-auto text-center mt-4 w-fit"
          >
            Enter
          </Link>
        </div>
      </div>
    </>
  );
}

export default Onboarding;
