import React from 'react';
import img from "../assets/images/services8.jpg"
import data from "../assets/data/Workers"
import { useState } from 'react';
import {Link} from 'react-router-dom'
import "../css/Hire.css"
function Hire(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / 5);
    const startIndex = (currentPage - 1) * 5;
    const endIndex = startIndex + 5;
    const currentItems = data.slice(startIndex, endIndex);
    const handlePageChange = (page) => {
        setCurrentPage(page);
      };

    return (
        <div>
             {/* <div className='services_top'>
              <img src={img} />
              <h1>Hire</h1>
            </div>   */}

            <div className='hire_container'>
                
                               <table className='workertable'>
                                <thead>
                                    <tr>
                                        <th style={{width:"150px"}}>Worker</th>
                                        <th style={{width:"150px"}}>Age</th>
                                        <th style={{width:"150px"}}>Availability</th>
                                        <th style={{width:"150px"}}>Experience</th>
                                        <th style={{width:"150px"}}>Job Role</th>
                                        <th style={{width:"150px"}}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentItems.map((worker)=>{
                                          
                                            return(
                                                <>
                                                <div className='workerscolumns'>
                                                 <tr>
                                                    <th style={{width:"150px"}}>{worker.name}</th>
                                                    <th style={{width:"150px"}}>{worker.age}</th>
                                                    <th style={{width:"150px"}}>{worker.available}</th>
                                                    <th style={{width:"150px"}}>{worker.experience}</th>
                                                    <th style={{width:"150px"}}>{worker.jobrole}</th>
                                                    <th style={{paddingLeft:"30px"}}><button className='btn'><Link to={`/worker/${worker.id}`}>Explore Profile</Link></button></th>
                                                 </tr>
                                                 </div>
                                                </>
                                            )
                                        
                                        })
                                    }
                                </tbody>
                               </table>
                               

                               <div>
                                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                                Previous
                                </button>
                                <span>Page {currentPage} of {totalPages}</span>
                                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                                Next
                                </button>
                               </div>
                            
            </div> 

        </div>
    );
}

export default Hire;