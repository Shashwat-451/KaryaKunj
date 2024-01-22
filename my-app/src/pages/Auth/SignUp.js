import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setSignupData } from "../../slices/authSlice"
import {signUp} from "../../services/operations/authAPI"


const SignUp = () => {
  const navigate=useNavigate()
  
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    confirmPassword: '',
    accounttype:'',
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

    // Validate the form data before submission
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const signupData = {
        ...formData,
      }
               // To be used after otp verification
    dispatch(setSignupData(signupData))


    console.log('Form data submitted:', formData);
    const{firstName,lastName,email,password,confirmPassword,accounttype}=formData;
  
    setFormData({
    firstname: '',
    lastname:'',
    email: '',
    password: '',
    confirmPassword: '',
    accounttype:'',
    });

    dispatch(signUp(firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accounttype))
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <label>
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </label>

        <label>
          accountType:
          <input
            type="text"
            name="accounttype"
            value={formData.accounttype}
            onChange={handleInputChange}
          />
        </label>

        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
