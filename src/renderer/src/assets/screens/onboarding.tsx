import star from "../images/star.svg";
import { useNavigate } from "react-router-dom";

function Onboarding(): JSX.Element {
  const navigate = useNavigate();

  const handleNavigateToLogin = (): void => {
    navigate("/login");
  };

  return (
    <>
      <div className="static overflow-hidden	bg-cover bg-center select-none h-screen w-screen bg-onboarding-svg">
        <div className="absolute draggable-zone flex justify-center bg-transparent h-14 w-screen text-center">
          <div className="logo relative w-fit mt-3">
            <img className="logo-star absolute left-56 top-0 w-6" src={star} />
            <div className="logo-text text-5xl">PrimeLink</div>
          </div>
        </div>
        <div className="w-screen h-screen flex flex-col justify-center content-center">
          <div className="heading text-6xl text-center">
            You will need an account
          </div>
          <div className="heading text-6xl text-center">to enter the app</div>
          <button
            onClick={handleNavigateToLogin}
            className="heading bg-primary-blue hover:bg-cyan-500  ease-out duration-500 text-lg rounded-full px-16 py-3 mx-auto text-center mt-4 w-fit"
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
}

export default Onboarding;
