import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setSignupData } from "../../slices/authSlice"
import {signUp} from "../../services/operations/authAPI"
import loginimage from "../../assets/images/login.jpg"
import { Link } from 'react-router-dom';

const SignUp = () => {

  const navigate=useNavigate()
  
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    confirmpassword: '',
    accounttype:'Employer',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello This is data", formData)
   
    if (formData.password !== formData.confirmpassword) {
      alert('Passwords do not match');
      return;
    }
    const signupData = {
        ...formData,
      }
             
    dispatch(setSignupData(signupData))


    console.log('Form data submitted:', formData);
  const{firstname,lastname,email,password,confirmpassword,accounttype}=formData;
  
    dispatch(signUp(firstname,
      lastname,
      email,
      password,
      confirmpassword,
      accounttype))


    setFormData({
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    confirmpassword: '',
    accounttype:'',
    
    });

  
  };

  return (
  
       <>
       <div style={{ borderRadius: "100", display: "flex", width: "400px", height: "500px", backgroundColor: "black", justifyContent: "center", alignItems: "center", margin: "auto", marginBottom: "100px" }} className='login_main'>

{/* <div style={{ width: "50%", height: "100%", backgroundColor: "white", alignItems: "center", margin: "auto" }} className='left'>
  <img src={loginimage} />
</div> */}
<div style={{ display: "flex", gap: "4px", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "white" }} className='right'>
  <h3 style={{ fontFamily: "Georgia", color: "black" ,fontWeight:"bold"}}>SIGN UP</h3>
  <h6 style={{ fontFamily: "Georgia", color: "rgb(111, 113, 114)" ,marginBottom:"25px"}}>Please sign up to Continue</h6>
  <input onChange={handleInputChange} type='text' name="firstname" value={formData.firstname} placeholder='First Name'/>
  <input onChange={handleInputChange} type='text' name="lastname" value={formData.lastname} placeholder='Last Name'/>
  <input onChange={handleInputChange} type='text' name="email" value={formData.email} placeholder='Email'/>
  <input onChange={handleInputChange} type='password' name="password" value={formData.password} placeholder='Password'/>
  <input onChange={handleInputChange} type='password' name="confirmpassword" value={formData.confirmpassword} placeholder='Confirm Password'/>
  <label htmlFor="selectOption">Sign Up As:
  <select id="selectOption" name="accounttype" value={formData.accounttype}  onChange={handleInputChange}>
        <option value="Employer">Employer</option>
        <option value="Worker">Worker</option>
 </select>
  
   </label> 
   <p>Already have an Account? <Link to="/signup"><span>Login</span></Link></p>
            <p>Or</p>
  <div style={{marginTop:"30px"}} className='btn'>
    <button styele={{ color: "white" }} className="btnauth" onClick={handleSubmit}>Sign Up</button>
  </div>
 </div>

</div>
    </>
  
  );
};

export default SignUp;
