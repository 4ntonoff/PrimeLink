import Input from "@renderer/assets/components/input";
import PrimaryButton from "@renderer/assets/components/primaryButton";
import { Link } from "react-router-dom";
import axios from "axios";

function EmailRegistrationPage(): JSX.Element {

  const onSubmit = async () => {
    try {
      const fields = {
        email: "u24114770@gmail.com",
      };
      const response = await axios.post("http://localhost:8080/auth/register", fields);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-96 flex justify-center p-6 h-fit text-center rounded-3xl flex-col self-center">
        <h1 className="text text-gray-200 text-xl">Register using e-mail</h1>
        <Input type="text" placeholder="E-mail" />
        <PrimaryButton
          onClick={
            onSubmit
            // () =>
            //   // submit(
            //   //   {},
            //   //   {
            //   //     method: "post",
            //   //     action: "/action",
            //   //     unstable_viewTransition: true,
            //   //   }
            //   // )
            //   console.log("asdf")
          }
          text={"Enter"}
        />
        <Link
          className="button text-lg border-2 border-zinc-800 hover:bg-zinc-800 text-gray-200 bg-transparent transition-all duration-300 mt-2 rounded-2xl leading-[50px] h-14"
          to={"/login/email-enter"}
          unstable_viewTransition
        >
          Enter an account
        </Link>
      </div>
    </>
  );
}

export default EmailRegistrationPage;
