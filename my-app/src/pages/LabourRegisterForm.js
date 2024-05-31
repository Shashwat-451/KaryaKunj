import React, { useState } from 'react';
import "../css/LabourReg.css"
import {labourregister} from "../services/operations/authAPI"
import register from "../assets/images/register.gif"
import {useDispatch} from 'react-redux'

function LabourRegisterForm() {
    const dispatch=useDispatch();
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
  const {name,age,phone,address,email,jobrole,availability,projects} = formData
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
      dispatch(labourregister(name,age,phone,address,email,jobrole,availability,projects));


  }
  
  return (
    <>
      <div  className='labourregisterformdiv'>
       
        <form className="labourregisterform"onSubmit={handleSubmit}>
        <h1 style={{marginTop:"-20px",textAlign:"center",fontFamily:"Georgia",fontWeight:"bold",color:"white",padding:"6px"}}>REGISTER</h1>
            <input type='text' onChange={handleChange} placeholder='Name' name='name' value={formData.name} />
          
            <input type='text' onChange={handleChange} placeholder='Age' name='age' value={formData.age} />
         
            <input type='text' onChange={handleChange} placeholder='Phone' name='phone' value={formData.phone} />
          
            <input type='text' onChange={handleChange} placeholder='Address' name='address' value={formData.address} />
          
            <input type='text' onChange={handleChange} placeholder='Email' name='email' value={formData.email} />
          
            <input type='text' onChange={handleChange} placeholder='Job Role' name='jobrole' value={formData.jobrole} />
          
            <input type='text' onChange={handleChange} placeholder='Availability' name='availability' value={formData.availability} />
          
            <textarea type='text' onChange={handleChange} placeholder='Projects' name='projects' value={formData.projects} />
        
          <button style={{marginTop:"20px",marginBottom:"-40px",backgroundColor:'white',color:"black"}} className="btn"type='submit'>Submit</button>
        </form>

        <div className='divvi reversed-image'>
      <img style={{backgroundColor:"rgb(61, 49, 98)"}} width="100%" height="520px"src={register}/>
      </div>
      </div>
     <div style={{height:"30px"}}>

     </div>
   
    </>
  );
}

export default LabourRegisterForm;
