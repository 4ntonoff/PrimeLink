/* eslint-disable @typescript-eslint/no-unused-vars */
import star from "../../images/star.svg";
import EmailEnterPage from "./emailEnterPage";
import EmailRegistrationPage from "./emailRegistrationPage";
import * as React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Await,
  createBrowserRouter,
  defer,
  Form,
  json,
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  unstable_useViewTransitionState,
  useActionData,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from "react-router-dom";

function Login(): JSX.Element {
  return (
    <>
      <div className="bg-cover bg-center select-none h-screen w-screen flex justify-center bg-register-bg-4">
        {/* TODO Random bg image*/}
        <div className="absolute draggable-zone bg-transparent h-10 w-screen"></div>
        <div className="w-96 flex justify-center pt-6 h-fit text-center rounded-3xl bg-background flex-col transition-all duration-300 self-center">
          <div className="logo relative w-fit self-center">
            <img className="logo-star absolute left-36 top-1 w-3" src={star} />
            <div className="logo-text text-gray-200 text-3xl">PrimeLink</div>
          </div>
          <div className="login-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
