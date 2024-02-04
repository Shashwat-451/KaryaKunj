import React from 'react';
import { useState} from 'react';
import { Line, Circle } from 'rc-progress';
import { useRef,useContext } from 'react';
import "../css/Accordian.css"
import { FaEdit } from "react-icons/fa";


// Import Bootstrap CSS in your main or index.js file
import 'bootstrap/dist/css/bootstrap.min.css';

function Accordian_logic({project}) {
  console.log(project);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className='accordian_wrapper'>
                <div style={{ display: 'flex' }} onClick={() => setIsOpen(!isOpen)} className='upper'>
                    <h2 style={{fontSize:"1rem",fontFamily:"georgia",fontWeight:"bold",marginRight:"20px"}}>{project.project_name}, {project.address}</h2>
                    
                    <Line style={{height:"20px",borderRadius:"20px",width:"50%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                    <p>{`${project.completion} %`}</p> 
                    <div style={{marginLeft:"260px",justifyContent:"flex-end"}}>
                         <FaEdit />
                         </div>
                </div>
                {
                    isOpen &&
                    <div className='lower'>
                        <div className='individual'>
                        <h2>Demolition</h2>
                        <Line style={{height:"20px",borderRadius:"20px",width:"50%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                         <p>{`${project.completion} %`}</p> 
                         <div style={{marginLeft:"260px",justifyContent:"flex-end"}}>
                         <FaEdit />
                         </div>
                        </div>
                        <div className='individual'>
                        <h2>Civil Work</h2>
                        
                     
                        <Line style={{height:"20px",borderRadius:"20px",width:"50%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                         <p>{`${project.completion} %`}</p> 
                         <div style={{marginLeft:"260px",justifyContent:"flex-end"}}>
                         <FaEdit />
                         </div>
                        </div>
                       
                        <div className='individual'>
                        <h2>HVAC</h2>
                        
                        <Line style={{height:"20px",borderRadius:"20px",width:"50%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                         <p>{`${project.completion} %`}</p> 
                         <div style={{marginLeft:"260px",justifyContent:"flex-end"}}>
                         <FaEdit />
                         </div>
                        </div>
                        <div className='individual'>
                        <h2>Glass Work</h2>
                        
                        <Line style={{height:"20px",borderRadius:"20px",width:"50%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                         <p>{`${project.completion} %`}</p> 
                         <div style={{marginLeft:"260px",justifyContent:"flex-end"}}>
                         <FaEdit />
                         </div>
                        </div> 
                        <div className='individual'>
                        <h2>Tiling</h2>
                       
                       
                        <Line style={{height:"20px",borderRadius:"20px",width:"50%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                         <p>{`${project.completion} %`}</p> 
                         <div style={{marginLeft:"260px",justifyContent:"flex-end"}}>
                         <FaEdit />
                         </div>
                        </div>
                        <div className='individual'>
                        <h2>Electrical Laying</h2>
                      
                       
                        <Line style={{height:"20px",borderRadius:"20px",width:"50%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                         <p>{`${project.completion} %`}</p> 
                         <div style={{marginLeft:"260px",justifyContent:"flex-end"}}>
                         <FaEdit />
                         </div>
                        </div>
                        <div className='individual'>
                        <h2>Painting Work</h2>
                        <Line style={{height:"20px",borderRadius:"20px",width:"50%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                         <p>{`${project.completion} %`}</p> 
                         <div style={{marginLeft:"260px",justifyContent:"flex-end"}}>
                         <FaEdit />
                         </div>
                       </div>
                    </div>
                }

            </div>
        </div>
    );
}

export default Accordian_logic;