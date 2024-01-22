import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {login} from "../../services/operations/authAPI"
const Login = () => {

    const dispatch = useDispatch()
    const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: '',
  });

  const {username,email, password } = formData
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

    dispatch(login(email, password, navigate))
    console.log('Form data submitted:', formData);
    // Reset the form after submission
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="username"
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
