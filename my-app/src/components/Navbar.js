import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import WeBuild from '../assets/images/Webuild.png'
import "../css/Navbar.css"
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseDispatch } from 'react-redux';
import {logout} from "../services/operations/authAPI"

function Navbar() {
    const navigate=useNavigate();
 const dispatch=useDispatch();
    const { token } = useSelector((state)=>state.auth)
   
    // const authState = useSelector((state) => state.auth);
    // console.log("authstate is",authState)
    // const token = authState?authState.token : null;
    // console.log("Token is ",token);
    // const user=authState?authState.user:null;

    console.log("Token is ",token);
    const { user } = useSelector((state) => state.profile)
    console.log("user is",user);
  
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isdropped, setIsDropped] = useState(false);

    useEffect(() => {
        // Check if the token has changed after login
        if (token) {
          console.log('User has logged in. Token:', token);
          // You can perform additional actions or show a confirmation message here
        }
      }, [token]);

    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <img src={WeBuild} />
                </div>
                <div className='links'>
                    <NavLink style={navLinkStyle} to="/">Home</NavLink>
                    {/* <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Services
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <NavLink style={navLinkStyle} to="/hire">Hire Workers</NavLink>
                            <NavLink style={navLinkStyle} to="/tracker">Progress Tracking</NavLink>
                            <NavLink style={navLinkStyle} to="/budget">Budget Management</NavLink>
                            <NavLink style={navLinkStyle} to="/home_shop">Material Procurement</NavLink>
                        </Dropdown.Menu>
                    </Dropdown> */}

                    {/* {console.log("User Details: ",user)}
                    {console.log("User Details 0000: ",user[0].accounttype)} */}

                    {user && user.length > 0  &&  user[0].accounttype=="Employer" &&<> 

                    <NavLink onClick={()=>setIsDropped(!isdropped)} style={navLinkStyle}>Services <IoMdArrowDropdown /></NavLink>
                    
                    {isdropped &&
                        <>
                           <div style={{marginLeft:"70px", position: "absolute", display: "flex", flexDirection: "column", outline: "none", border: "none", textDecoration: "none", backgroundColor: "white", padding: "10px", fontSize: "15px" }}></div>
                            <div style={{marginLeft:"70px", position: "absolute", display: "flex", flexDirection: "column", outline: "none", border: "none", textDecoration: "none", backgroundColor: "white", padding: "10px", fontSize: "15px" }} className='servicesdropdown'>
                            <Link style={{ textDecoration: 'none', color: 'grey' }} to="/home_shop">Shop</Link>
                            <Link style={{ textDecoration: 'none', color: 'grey' }} to="/hire">Hire Workers</Link>
                            <Link style={{ textDecoration: 'none', color: 'grey' }} to="/tracker">Progress Tracker</Link>
                            <Link style={{ textDecoration: 'none', color: 'grey' }} to="/budget">Budget Management</Link>
                            </div>
                        </>

                    }
                    
                    </> 
                    } 
                     {/* {console.log("there is a user",user)}
                     {console.log("there is a length",user.length)}
                     {console.log("there is a accounttype",user[0].password)} */}
                    {user && user.length > 0 &&user[0].accounttype=="Worker" && <> 

                    <NavLink onClick={()=>setIsDropped(!isdropped)} style={navLinkStyle}>Work</NavLink>
 
                     </>} 

                   
                     {user && user.length > 0  &&  user[0].accounttype=="Worker" && <NavLink style={navLinkStyle} to="/labourregister">Register</NavLink>}
                   {user && user.length > 0  &&  user[0].accounttype=="Employer" && <NavLink style={navLinkStyle} to="/aboutus">About Us</NavLink>} 
                    <NavLink style={navLinkStyle} to="/contactus">Contact Us</NavLink>
                    {
                        token===null && <NavLink style={navLinkStyle} to="/login">Login</NavLink>
                    }
                    {
                        token===null && <NavLink style={navLinkStyle} to="/signup">Sign Up</NavLink>
                    }
                    {
                       user && user.length > 0  &&  user[0].accounttype=="Worker" &&  token!==null && <NavLink style={navLinkStyle} to="/dashboardl">Dashboard</NavLink>
                    }
                    {
                       user && user.length > 0  &&  user[0].accounttype=="Employer" &&  token!==null && <NavLink style={navLinkStyle} to="/dashboarde">Dashboard</NavLink>
                    }
                    {
                        token!==null && <p onClick={()=>dispatch(logout(navigate))} style={navLinkStyle} >Logout</p>
                    }

                </div>

            </div>
        </>
    )
}

const navLinkStyle = {
    textDecoration: 'none', // Remove underline
    // Set text color
    cursor:"pointer",
    color: "grey",
    margin: '10px',
    hover: "Underline",
    fontSize:"14px"
};

export default Navbar
