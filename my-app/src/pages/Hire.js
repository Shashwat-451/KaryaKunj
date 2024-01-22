import React from 'react';
import img from "../assets/images/services8.jpg"
import data from "../assets/data/Workers"
import { useState } from 'react';
import {Link} from 'react-router-dom'
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
             <div className='services_top'>
              <img src={img} />
              <h1>Hire</h1>
            </div>  

            <div className='hire_container'>
                
                               <table>
                                <thead>
                                    <tr>
                                        <th>Worker</th>
                                        <th>Age</th>
                                        <th>Availability</th>
                                        <th>Experience</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentItems.map((worker)=>{
                                            return(
                                                <>
                                                 <tr>
                                                    <th><Link to={`/worker/${worker.id}`}>{worker.name}</Link></th>
                                                    <th>{worker.age}</th>
                                                    <th>{worker.available}</th>
                                                    <th>{worker.experience}</th>
                                                 </tr>
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