import React, { useState } from 'react';
import "../css/LabourReg.css"
function LabourRegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
    email: '',
    jobrole: '',
    availability: '',
    projects: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
    const setFormData = {
        ...formData,
      }
  }

  return (
    <>
      <div className='labourregisterform'>
        <form className="labourregisterform"onSubmit={handleSubmit}>
          
            <input type='text' onChange={handleChange} placeholder='Name' name='name' value={formData.name} />
          
            <input type='text' onChange={handleChange} placeholder='Age' name='age' value={formData.age} />
         
            <input type='text' onChange={handleChange} placeholder='Phone' name='phone' value={formData.phone} />
          
            <input type='text' onChange={handleChange} placeholder='Address' name='address' value={formData.address} />
          
            <input type='text' onChange={handleChange} placeholder='Email' name='email' value={formData.email} />
          
            <input type='text' onChange={handleChange} placeholder='Job Role' name='jobrole' value={formData.jobrole} />
          
            <input type='text' onChange={handleChange} placeholder='Availability' name='availability' value={formData.availability} />
          
            <textarea type='text' onChange={handleChange} placeholder='Projects' name='projects' value={formData.projects} />
        
          <button className="btn"type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}

export default LabourRegisterForm;
