
// import {setToken} from "../../slices/authSlice"
import { apiConnector } from "../apiConnector"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
// import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"

import { setUser } from "../../slices/profileSlice"


// const {
//   SENDOTP_API,
//   SIGNUP_API,
//   LOGIN_API,
//   RESETPASSTOKEN_API,
//   RESETPASSWORD_API,
// } = endpoints

// export function sendOtp(email, navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", SENDOTP_API, {
//         email,
//         checkUserPresent: true,
//       })
//       console.log("SENDOTP API RESPONSE............", response)

//       console.log(response.data.success)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }

//       toast.success("OTP Sent Successfully")
//       navigate("/verify-email")
//     } catch (error) {
//       console.log("SENDOTP API ERROR............", error)
//       toast.error("Could Not Send OTP")
//     }
//     dispatch(setLoading(false))
//     toast.dismiss(toastId)
//   }
// }

export function signUp(

  firstname,
  lastname,
  email,
  password,
  confirmpassword,
  accounttype,
)
{
  // const {navigate}=useNavigate()
 
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...")
    // dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", "http://localhost:4000/user/signup", {
        firstname,
        lastname,
        email,
        password,
        confirmpassword,
        accounttype,
      })

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      // toast.success("Signup Successful")
      // navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      // toast.error("Signup Failed")
      // navigate("/signup")
    }
    // dispatch(setLoading(false))
    // toast.dismiss(toastId)
  }
}

export function login(email, password){
  
  return async (dispatch) => {
    // const toastId = toast.loading("Loading...")
    // dispatch(setLoading(true))
    console.log("iubuwiernvoinrwi1");
    try {
      const response = await apiConnector("POST","http://localhost:4000/user/login", {
        email,
        password,
      })
      console.log("iubuwiernvoinrwi2");
     console.log("Response from server",response);
  
    
      console.log("LOGIN API RESPONSE............", response)
      console.log("toke",response.data.token)
      // toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      //  console.log(token)
      // const userImage = response.data?.existinguser?.image
      //   ? response.data.existinguser.image
      //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.existinguser.firstname} ${response.data.existinguser.lastname}`
     dispatch(setUser(response.data.existinguser))
     console.log("Response haio",response)
      // dispatch(setUser({ ...response.data.existinguser, image: userImage }))
      
      localStorage.setItem("token", JSON.stringify(response.data.token))
     localStorage.setItem("user", JSON.stringify(response.data.existinguser))
     const user = localStorage.getItem('user');
     console.log("user is here",user)
      const token = localStorage.getItem('token');
      console.log("token is here",token)
      // navigate("/dashboard/my-profile")
      console.log("Inside operations token is",response.data.token);
      
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      // toast.error("Login Failed")
    }
    console.log("iubuwiernvoinrwi");
    // dispatch(setLoading(false))
    // toast.dismiss(toastId)
    let response;
        try {
      response = await apiConnector("POST", "http://localhost:4000/user/login", {
        email,
        password
      })
     
    }
      catch(err){
           console.log(err);
      }


      console.log(response);
  }
}

export function labourregister(
  name,
  age,
  phone,
  address,
  email,
  jobrole,
  availability,
  projects
){
  return async (dispatch)=>{

    try{
       const response=await apiConnector("POST","http://localhost:4000/user/labourregister",{
        name,
        age,
        phone,
        address,
        email,
        jobrole,
        availability,
        projects
       });

       console.log(response);
    }
    catch(error){
          console.log(error);
    }
  }
}

// export function getPasswordResetToken(email, setEmailSent) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", RESETPASSTOKEN_API, {
//         email,
//       })

//       console.log("RESETPASSTOKEN RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }

//       toast.success("Reset Email Sent")
//       setEmailSent(true)
//     } catch (error) {
//       console.log("RESETPASSTOKEN ERROR............", error)
//       toast.error("Failed To Send Reset Email")
//     }
//     toast.dismiss(toastId)
//     dispatch(setLoading(false))
//   }
// }

// export function resetPassword(password, confirmPassword, token, navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", RESETPASSWORD_API, {
//         password,
//         confirmPassword,
//         token,
//       })

//       console.log("RESETPASSWORD RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }

//       toast.success("Password Reset Successfully")
//       navigate("/login")
//     } catch (error) {
//       console.log("RESETPASSWORD ERROR............", error)
//       toast.error("Failed To Reset Password")
//     }
//     toast.dismiss(toastId)
//     dispatch(setLoading(false))
//   }
// }

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    // dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    // toast.success("Logged Out")
    navigate("/")
  }
}