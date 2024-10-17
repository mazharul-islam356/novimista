import { createBrowserRouter } from "react-router-dom";
import SignIn from "../login/SignIn/SignIn";
import SignUpContact from "../SignUp/SignUpContact";
import SignUpPass from "../SignUp/signUpPass/SignUpPass";
import OtpPage from "../SignUp/OTP/OtpPage";
import DashBoardSlider from "../DashBoard/DashBoardSlider";
import Employee from "../DashBoard/Employee/Employee";
import AdminDashBoard from "../DashBoard/AdminDashBoard";



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
      path:'/dashBoardSlider',
      element:<DashBoardSlider></DashBoardSlider>,
      children:[
        {
          path:'dashBoard',
          element:<AdminDashBoard></AdminDashBoard>
        },
        {
          path:'employee',
          element:<Employee></Employee>
        }
      ]
    },
    
  ])
  