import React, { useState } from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { useRef } from 'react';

import data from "../assets/data/Tracker_Accordian"
import Accordian_logic from './Accordian_logic';
function Accordian() {
    const [isOpen,setIsOpen]=useState(false);

    function toggle(index){
        
    }
    return (
        <>
            <div className='accordiancontainer'>
                {
                    data.map((project,index)=>{
                        return(
                            <>
                               <Accordian_logic project={project}/>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Accordian;