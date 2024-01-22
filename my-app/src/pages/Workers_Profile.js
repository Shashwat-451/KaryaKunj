import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import workers_data from "../assets/data/Workers"
function Workers_Profile(props) {
  
     const {param1}=useParams();
     console.log("param",param1);
    const data = workers_data.find(worker => String(worker.id) === param1);
    return (
        <>
           <h1>{data.name}</h1> 
           <h1>{data.address}</h1>
           <h1>{data.available}</h1>  
        </>
    );
}

export default Workers_Profile;