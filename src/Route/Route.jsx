import { createBrowserRouter } from "react-router-dom";
import SignIn from "../login/SignIn/SignIn";
import SignUpContact from "../SignUp/SignUpContact";
import SignUpPass from "../SignUp/signUpPass/SignUpPass";
import OtpPage from "../SignUp/OTP/OtpPage";
import DashBoard from "../DashBoard/DashBoard";



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
    },
    {
      path:'/otpPage',
      element:<OtpPage></OtpPage>
    },
    {
      path:'/dashBoard',
      element:<DashBoard></DashBoard>
    },
    
  ])
  