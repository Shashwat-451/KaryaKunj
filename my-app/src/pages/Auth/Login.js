import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/operations/authAPI"
import "../../css/Login.css"
import { Link } from 'react-router-dom';
import loginimage from "../../assets/images/login.jpg"
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
      <div style={{ borderRadius: "100", display: "flex", width: "400px", height: "500px", backgroundColor: "black", justifyContent: "center", alignItems: "center", margin: "auto", marginBottom: "100px" }} className='login_main'>

        {/* <div style={{ width: "50%", height: "100%", backgroundColor: "white", alignItems: "center", margin: "auto" }} className='left'>
          <img src={loginimage} />
        </div> */}
        <div style={{ display: "flex", gap: "4px", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", backgroundColor: "white" }} className='right'>
          <h3 style={{ fontFamily: "Georgia", color: "black" ,fontWeight:"bold"}}>LOGIN</h3>
          <h6 style={{ fontFamily: "Georgia", color: "rgb(111, 113, 114)" ,marginBottom:"25px"}}>Please Login to Continue</h6>
          <input onChange={handleInputChange} type='text' name="email" value={formData.email} placeholder='Email'/>
          <input onChange={handleInputChange} type='password' name="password" value={formData.password} placeholder='Password' />
          <p>Click here to <Link to="/signup"><span>Sign Up</span></Link></p>
            <p>Or</p>
          <div style={{marginTop:"30px"}} className='btn'>
           
            <button styele={{ color: "white" }} className="btnauth" onClick={handleSubmit}>Login</button>
          </div>

        </div>

      </div>
    </>
  );
};

export default Login;
