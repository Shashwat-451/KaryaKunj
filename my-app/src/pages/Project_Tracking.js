import React from 'react';
import img from "../assets//images/section4.jpg"
import Accordian from '../components/Accordian';
import Navbar from '../components/Navbar';

function Project_Tracking(props) {
    return (
        <>
             {/* <div className='services_top'>
              <img src={img} />
              <h1>Project Tracking Dashboard</h1>
          </div>    */}
       <Navbar/>
          <Accordian/>
        </>
    );
}

export default Project_Tracking;