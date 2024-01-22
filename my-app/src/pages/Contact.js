import React from 'react';
import { IoMdChatbubbles } from "react-icons/io";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

function Contact(props) {
    return (
         <>
           <div style={{display:"flex"}} className='contactus_container'>
                 <div className='left'>
                     <div className='contact_left_row1'>
                        
                        <p><span><IoMdChatbubbles/></span>Chat on Us</p>
                        <p>Our friendly team is here to help</p>
                        <p>info@constructnex.com</p>
                     </div>
                     <div className='contact_left_row2'>
                        
                        <p><span><BsGlobeCentralSouthAsia/></span> Visit Us</p>
                        <p>Come and say Hello at our office HQ</p>
                        <p>Akshay Nagar, 1st Block, New Delhi, India</p>
                     </div>
                     <div className='contact_left_row3'>
                        
                        <p><span><FaPhoneAlt/></span> Call Us</p>
                        <p>Mon-Fri(8am-5pm)</p>
                        <p>8984422135</p>
                     </div>
                 </div>
                 <div className='right'>
                       <h1>Let's Team Up</h1>
                       <p>Tell us more about yourself</p>
                       <form>
                      
                          <input></input>
                       </form>
                 </div>
            </div>   
        </>
    );
}

export default Contact;