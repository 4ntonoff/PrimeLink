import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Onboarding from "./assets/screens/onboarding";
import Login from "./assets/screens/login/login";
import EmailEnterPage from "./assets/screens/login/emailEnterPage";
import EmailRegistrationPage from "./assets/screens/login/emailRegistrationPage";

const router = createBrowserRouter([
  { path: "/", Component: Onboarding },
  {
    path: "/login",
    Component: Login,
    children: [
      {
        index: true,
        path: "email-enter",
        element: <EmailEnterPage />,
      },
      {
        path: "email-reg",
        element: <EmailRegistrationPage />,
      },
    ],
  },
]);

function App(): JSX.Element {
  return (
    <RouterProvider
      router={router}
      future={{
        // Wrap all state updates in React.startTransition()
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
