import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../login/LoginPage";
import SignIn from "../login/SignIn/SignIn";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn></SignIn>,
    },
    {
        path:'/login',
        element: <LoginPage></LoginPage>
    }
  ])