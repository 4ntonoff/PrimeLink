import star from "../images/star.svg";
import google from "../images/google-logo.png";
import facebook from "../images/fb-logo.svg";

function Login(): JSX.Element {
  return (
    <>
      <div className="static overflow-hidden bg-cover bg-center select-none h-screen w-screen flex justify-center bg-register-bg-4">
        <div className="absolute draggable-zone bg-transparent h-10 w-screen"></div>
        <div className="w-96 flex justify-center p-6 h-fit text-center rounded-3xl bg-[#1B1B1F] flex-col self-center">
          <div className="logo relative w-fit self-center">
            <img className="logo-star absolute left-36 top-1 w-3" src={star} />
            <div className="logo-text text-3xl">PrimeLink</div>
          </div>
          <h1 className="text mt-8 text-xl">Enter using e-mail</h1>
          <input
            className="text pt-1 outline-none focus:ring focus:ring-gray-300 transition-all duration-300 text-2xl h-14 border-2 border-zinc-800 rounded-2xl mt-4 px-4 bg-transparent"
            type="text"
            placeholder="Username or email"
          />
          <button className="text text-sm text-gray-800 bg-gray-200 hover:bg-gray-300 transition-all duration-300 mt-8 rounded-2xl h-14">
            Enter
          </button>
          <button className="text border-2 border-zinc-800 hover:bg-zinc-800 text-sm text-gray-200 bg-transparent transition-all duration-300 mt-2 rounded-2xl h-14">
            Create an account
          </button>
          <div className="text text-gray-400 text-sm mt-6">Enter with</div>
          <div className="grid grid-cols-2 divide-zinc-800 h-fit border-2 border-zinc-800 rounded-2xl divide-x-2 mt-4">
            <button className="hover:bg-zinc-800 py-2 rounded-l-xl text flex justify-center ">
              <img className="h-6 mr-3" src={google} alt="" />
              <div className="text mt-0.5">Google</div>
            </button>
            <button className="hover:bg-zinc-800 py-2  rounded-r-xl text flex justify-center">
              <img className="h-6 mr-3" src={facebook} alt="" />
              <div className="text mt-0.5">Facebook</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
