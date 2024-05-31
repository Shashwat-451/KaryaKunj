import { IoMdChatbubbles } from "react-icons/io";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../services/operations/authAPI"
import contactimage from "../assets/images/contactusimage.jpg"
import "../css/Contact.css"
import Navbar from "../components/Navbar";

function Contact(props) {

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
   };

   return (
      //    <>
      //      <div style={{display:"flex"}} className='contactus_container'>
      //            <div className='left'>
      //                <div className='contact_left_row1'>

      //                   <p><span><IoMdChatbubbles/></span>Chat on Us</p>
      //                   <p>Our friendly team is here to help</p>
      //                   <p>info@constructnex.com</p>
      //                </div>
      //                <div className='contact_left_row2'>

      //                   <p><span><BsGlobeCentralSouthAsia/></span> Visit Us</p>
      //                   <p>Come and say Hello at our office HQ</p>
      //                   <p>Akshay Nagar, 1st Block, New Delhi, India</p>
      //                </div>
      //                <div className='contact_left_row3'>

      //                   <p><span><FaPhoneAlt/></span> Call Us</p>
      //                   <p>Mon-Fri(8am-5pm)</p>
      //                   <p>8984422135</p>
      //                </div>
      //            </div>
      //            <div className='right'>
      //                  <h1>Let's Team Up</h1>
      //                  <p>Tell us more about yourself</p>

      //            </div>
      //       </div>   
      //   </>
      <>
      <Navbar/>
         <div className="contactuswrapper">
            <div className="top_content">
               <h2 style={{textAlign:"center"}}>Have Some Question?</h2>
               <p style={{textAlign:"center"}}>Thank you for showing interest in  our services. Please fill out this form and we will get back to you promptly regarding your request.</p>
            </div>

            <div style={{ borderRadius: "100", display: "flex", width: "1000px", height: "500px", backgroundColor: "black", justifyContent: "center", alignItems: "center", margin: "auto", marginBottom: "100px" }} className='login_main'>

               <div style={{ display:"flex",flexDirection:"column",width: "50%", height: "100%", backgroundColor: "white", alignItems: "center", margin: "auto" }} className='contactusleft'>
                  <img src={contactimage} />
                  <div className="getintouch">
                       <h2 style={{marginBottom:"20px",marginTop:"40px",fontFamily:"Georgia",fontWeight:"bold"}}>Get In Touch</h2>
                     <div  className='contactus_container'>
                        <div className='lefty'>
                           <div className='contact_left_row1'>

                              {/* <p>Chat on Us</p> */}
                              {/* <p>Our friendly team is here to help</p> */}
                              <p><span style={{marginRight:"10px"}}><IoMdChatbubbles /></span> info@constructnex.com</p>
                           </div>
                           <div className='contact_left_row2'>

                              {/* <p> Visit Us</p> */}
                              {/* <p>Come and say Hello at our office HQ</p> */}
                              <p> <span style={{marginRight:"10px"}} ><BsGlobeCentralSouthAsia /></span> Akshay Nagar, 1st Block, New Delhi, India</p>
                           </div>
                           <div className='contact_left_row3'>

                              {/* <p> Call Us</p> */}
                              <p><span style={{marginRight:"10px"}}><FaPhoneAlt /></span> 8984422135 , Mon-Fri(8am-5pm)</p>
                              <p></p>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
               <div style={{ display: "flex", gap: "4px", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "50%", height: "100%", backgroundColor: "white" }} className='contactright'>
     
                  <input onChange={handleInputChange} type='text' name="firstname" value={formData.email} placeholder='Firstname' />
                  <input onChange={handleInputChange} type='text' name="lastname" value={formData.email} placeholder='Lastname' />
                  <input onChange={handleInputChange} type='text' name="phone" value={formData.email} placeholder='Phone' />
                  <input onChange={handleInputChange} type='text' name="email" value={formData.email} placeholder='Email' />
                  <textarea onChange={handleInputChange} type='text' name="message" value={formData.email} placeholder='Message' />
                   
                   <div className="btn">
                      <button className onClick={handleSubmit}>Send Message</button>
                   </div>
                  
               </div>

            </div>
         </div>


      </>
   );
}

export default Contact;