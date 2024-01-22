import React from 'react';
import { useState} from 'react';
import { Line, Circle } from 'rc-progress';
import { useRef,useContext } from 'react';


// Import Bootstrap CSS in your main or index.js file
import 'bootstrap/dist/css/bootstrap.min.css';

function Accordian_logic({project}) {
  console.log(project);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className='accordian_wrapper'>
                <div style={{ display: 'flex' }} onClick={() => setIsOpen(!isOpen)} className='upper'>
                    <h2>{project.project_name}</h2>
                    <p>{project.address}</p> 
                    <Line style={{height:"20px",borderRadius:"20px",width:"70%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                    <p>{`${project.completion} %`}</p> 
                </div>
                {
                    isOpen &&
                    <div className='lower'>
                        <h2>Demolition</h2>
                        <Line style={{height:"20px",borderRadius:"20px",width:"70%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                        <h2>Civil Work</h2>
                        <Line style={{height:"20px",borderRadius:"20px",width:"70%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                        <h2>HVAC</h2>
                        <Line style={{height:"20px",borderRadius:"20px",width:"70%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                        <h2>Glass Work</h2>
                        <Line style={{height:"20px",borderRadius:"20px",width:"70%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                        <h2>Tiling</h2>
                        <Line style={{height:"20px",borderRadius:"20px",width:"70%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                        <h2>Electrical Laying</h2>
                        <Line style={{height:"20px",borderRadius:"20px",width:"70%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                        <h2>Painting Work</h2>
                        <Line style={{height:"20px",borderRadius:"20px",width:"70%"}} percent={project.completion} strokeWidth={0.5} strokeColor="rgb(6, 209, 124)" />
                    </div>
                }

            </div>
        </div>
    );
}

export default Accordian_logic;