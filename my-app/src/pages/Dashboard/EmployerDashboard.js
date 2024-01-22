import React from 'react';
import { Link } from 'react-router-dom'
import "../../css/DashboardE.css"
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { FaMoneyBillWave } from "react-icons/fa";
import { HiRectangleStack } from "react-icons/hi2";

function EmployerDashboard(props) {
    return (
        <>
            <div className='dashboard_container'>
                <div style={{ color: "white" }} className='sidebar'>
                    <div style={{ display: "flex" }} className='profile'>
                        <CgProfile />
                        <Link to="/"><h3 color='white'>Profile</h3></Link>
                    </div>
                    <div style={{ display: "flex" }} className='progresstracker'>
                        <GiProgression />
                        <Link to="/"><h3 color='white'>Progress Tracker</h3></Link>
                    </div>
                    <div style={{ display: "flex" }} className='budget'>
                        <FaMoneyBillWave />
                        <Link to="/"><h3 color='white'>Budget Management</h3></Link>
                    </div>
                    <div style={{ display: "flex" }} className='hire'>
                        <HiRectangleStack />
                        <Link to="/"><h3 color='white'>Hire</h3></Link>
                    </div>
                    <div style={{ display: "flex" }} className='shop'>
                        <FaCartShopping />
                        <Link to="/"><h3 color='white'>Shop</h3></Link>
                    </div>
                </div>
                <div style={{ display: "flex" }} className='dashboardmain'>
                    <div className='generalinfo'>
                        <div className='profilepic'>
                            <img src="profilepic" />
                        </div>
                        <div className='nameemail'>
                            <h2>Shashwat Mishra</h2>
                            <h3>mishrashashwat985@gmail.com</h3>
                        </div>
                        <div className='editbutton'>
                            <button>Edit</button>
                        </div>


                    </div>
                    <div className='maininfo'>
                        <div className='maininfoheader'>
                            <h1>Personal Details</h1>
                            <button>Edit</button>
                        </div>
                        <div className='personaldetails'>
                            <div className='left main1'>
                                <div style={{ display: "flex" }} className='row1 '>
                                    <img src="" />
                                    <h3>Name:Shashwat Mishra</h3>
                                    <h3>Age:21</h3>
                                </div>
                                <div style={{ display: "flex" }} className='row2'>
                                    <h3>Address: Bangalore, Karnataka</h3>
                                    <h3>Gender: Male</h3>
                                </div>
                                <div style={{ display: "flex" }} className='row3'>
                                    <h3>Availability: Yes</h3>
                                    <h3>Contact:9696655409</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projects'>
                        <div className='main2'>
                            <h3>Projects Completed</h3>
                            <h2>GBM Apartments</h2>
                            <h2>Minox Mall</h2>
                            <h2></h2>

                        </div>
                        <div className='main3'>
                            <h3>Ongoing Projects</h3>
                            <h2>Deluxe Mall</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployerDashboard;