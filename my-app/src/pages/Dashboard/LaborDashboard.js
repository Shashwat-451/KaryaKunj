import React from 'react';
import "../../css/DashboardE.css"

function LaborDashboard(props) {
    return (
        <div>
            <div className='main1'>
                <div style={{display:"flex"}} className='row1'>
                    <img src=""/>
                    <h3>Name:Shashwat Mishra</h3>
                    <h3>Age:21</h3>
                </div>
                <div style={{display:"flex"}} className='row2'>
                    <h3>Address: Bangalore, Karnataka</h3>
                    <h3>Gender: Male</h3>
                </div>
                <div style={{display:"flex"}} className='row3'>
                    <h3>Availability: Yes</h3>
                    <h3>Contact:9696655409</h3>
                </div>

            </div>
            <div className='main2'>
                <h3>Projects Worked On</h3>
                <h2>GBM Apartments</h2>
                <h2>Minox Mall</h2>
                <h2></h2>
                
            </div>
            <div className='main3'>
            <h3>Ongoing Projects</h3>
            <h2>Deluxe Mall</h2>                
           </div>
        </div>
    );
}

export default LaborDashboard;