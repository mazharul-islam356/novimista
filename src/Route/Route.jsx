import { createBrowserRouter } from "react-router-dom";
import SignIn from "../login/SignIn/SignIn";
import SignUpContact from "../SignUp/SignUpContact";
import SignUpPass from "../SignUp/signUpPass/SignUpPass";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn></SignIn>,
    },
    {
      path:'/signUpContact',
      element:<SignUpContact></SignUpContact>
    },
    {
      path:'/signUpPass',
      element:<SignUpPass></SignUpPass>
    }
    
  ])