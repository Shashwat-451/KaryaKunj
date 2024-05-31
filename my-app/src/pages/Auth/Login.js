import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/operations/authAPI"
import "../../css/Login.css"
import { Link } from 'react-router-dom';
import loginimage from "../../assets/images/loginfinal.png"
const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data submitted:', formData);
    setFormData({
      email: '',
      password: '',
    });

    dispatch(login(email, password));
    navigate("/");
  };

  return (
    // <div>
    //   <h2>Simple Form</h2>
    //   <form onSubmit={handleSubmit}>
    //     <br />
    //     <label>
    //       Email:
    //       <input
    //         type="text"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleInputChange}
    //       />
    //     </label>
    //     <br />

    //     <label>
    //       Password:
    //       <input
    //         type="password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleInputChange}
    //       />
    //     </label>
    //     <br />
    //     <button type="submit">Submit</button>
    //   </form>
    // </div>

    <>
      <div style={{ borderRadius: "100", display: "flex", width: "850px", height: "500px", justifyContent: "center", alignItems: "center", margin: "auto",marginTop:"40px" }} className='login_main'>

       
        <div style={{ display: "flex", gap: "4px", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} className='right'>
          <h3 style={{ fontFamily: "Georgia", color: "white" ,fontWeight:"bold"}}>LOGIN</h3>
          <h6 style={{ fontFamily: "Georgia", color: "white" ,marginBottom:"25px"}}>Please Login to Continue</h6>
          <input onChange={handleInputChange} type='text' name="email" value={formData.email} placeholder='Email'/>
          <input onChange={handleInputChange} type='password' name="password" value={formData.password} placeholder='Password' />
          
          <div style={{backgroundColor:"white",color: "black",marginTop:"10px"}} className='btn'>
           
            <button style={{ backgroundColor:"white",color: "black"}} className="btnauth" onClick={handleSubmit}>Login</button>
          </div>

          <p style={{color:"white",marginTop:"15px"}}>Don't have an Account?</p>

          <div style={{backgroundColor:"white",color: "black",marginTop:"-10px"}} className='btn'>
           
            <button style={{ backgroundColor:"white",color: "black" }} className="btnauth" onClick={()=>navigate("/signup")}>Sign Up</button>
          </div>

        </div>
        <div style={{ width: "100%", height: "100%", alignItems: "center", margin: "auto" ,backgroundColor:"rgb(61, 49, 98)"}} className='left'>
          <img className="reversed-image" src={loginimage} />
        </div>

      </div>
    </>
  );
};

export default Login;
