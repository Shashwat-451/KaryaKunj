import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import workers_data from "../assets/data/Workers"
import "../css/WorkerProfile.css"
import {useSelector} from "react-redux"
import Navbar from '../components/Navbar';
function Workers_Profile(props) {

    const { param1 } = useParams();
    console.log("param", param1);
    const {user}=useSelector((state)=>state.profile)
    const data = workers_data.find(worker => String(worker.id) === param1);
    return (
        <>
        <Navbar/>
            {/* <h1>{data.name}</h1> 
           <h1>{data.address}</h1>
           <h1>{data.available}</h1>   */}


            <div className='workerprofile_main'>
                <div className='workerprofile_container'>
                    <div className='workerprofile_left'>
                         {/* <img src={user && user.length > 0 && user[0].image} /> */}
                         {/* <h2>{`user && user.length > 0 && user?.${user[0].firstname} user?.${user[0].lastname}` }</h2> */}

                         {user && user.length > 0 && <><h2>{user[0].firstname} {user[0].lastname}</h2></>}
                         {user && user.length > 0 && <><h2>{user[0].email}</h2></>}

                    </div>
                    <div className='workerprofile_right'>
                        <div className='workerprofile_right1'>
                             
                        </div>
                        <div className='workerprofile_right2'>
                           
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Workers_Profile;