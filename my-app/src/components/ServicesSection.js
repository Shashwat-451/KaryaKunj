import React from 'react'
import img1 from "../assets/images/services2.jpg"
import img2 from "../assets/images/services4.jpg"
import img3 from "../assets/images/services5.jpg"
import img4 from "../assets/images/services6.jpg"
import img5 from "../assets/images/services7.jpg"
import "../css/ServicesSection.css"

function ServicesSection() {
    return (
        <>
        <div style={{marginTop:"160px",marginBottom:"60px"}} className='stay'>
        <h1 >Our Services</h1>
        </div>
        
            <div className='servicesection'>
                <div className='img1'>
                    <img src={img1} />
                    <h5>Hire Workers</h5>
                </div>
                <div className='img2'>
                    <img src={img2} />
                    <h5>Budget Management</h5>
                </div>
                <div className='img3'>
                    <img src={img3}/>
                    <h5>Material Procurement</h5>
                </div>
                <div className='img4'>
                    <img src={img4}/>
                    <h5>Progress Tracking</h5>
                </div>
              
            </div>
        </>
    )
}

export default ServicesSection
