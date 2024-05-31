import React from 'react';
import {useSelector} from "react-redux"
import "../../css/DashboardE.css"
import Navbar from '../../components/Navbar';
import {useState,useEffect} from 'react'
import { apiConnector } from "../../services/apiConnector"
function LaborDashboard() {
     
    const [data, setFormData] = useState("");
    const {user}=useSelector((state)=>state.profile)
    console.log("User is ",user)
    const email=user[0].email
    console.log("erpoponreb",email)


    useEffect(() => {
        (async () => {
            try {
               
                const res = await apiConnector("GET", "http://localhost:4000/user/labourdetails");
              console.log("Response:", res.data.data);
              setFormData(res.data.data);
              console.log("form data is ",data);
              console.log("user email is ",user[0].email);
              const filteredLabour = data.filter(labour =>labour.email === user[0].email);
                
              console.log("filterdata is",filteredLabour); // Display the filtered labor details in the console
             setFormData(filteredLabour[0]);
        
             
                // setFormData(res.data.data);
                
            } catch (error) {
                console.log("Could not fetch Categories.", error);
            }
        })();
    }, []);
    


    // useEffect(() => {
    //     console.log("Data is", data);
    // }, []); // Log whenever 'data' changes
    
        console.log(data);
        // console.log(user);
        // console.log(data.labour[0].email)
        // console.log(user.email);
        //  const filteredLabour = data.filter((labour) =>labour.email===user.email);
        //  console.log("filterdata is",filteredLabour); 


    return (
        <>
           <Navbar/>
           <div>
            <div className='labourdashboardmain'>
                <div style={{display:"flex"}} className='col1'>
                    {/* <img src=""/>
                    <h3>Name:Shashwat Mishra</h3>
                    <h3>Age:21</h3> */}

                    <div style={{width:"150px",height:"150px",borderRadius:"50%",backgroundColor:"white",boxShadow:"0px 8px 16px 0px rgba(0, 0, 0, 0.2)"}} className='imagediv'>
                              
                    </div>
                    <div className='detailsdiv'>
                        <p>Name : {data.name}</p>
                        <p>Age: {data.age}</p>
                        <p>Phone</p>
                        <p>Address</p>
                        <p>Email</p>
                        <p>Job Role</p>
                        <p>Availability</p>
                   </div>
                </div>
                <div style={{display:"flex"}} className='col2'>
                    <div style={{display:"flex"}} className='row2'>
                        {/* <h3>Address: Bangalore, Karnataka</h3>
                        <h3>Gender: Male</h3> */}
                    </div>
                    <div style={{display:"flex"}} className='row3'>
                        {/* <h3>Availability: Yes</h3>
                        <h3>Contact:9696655409</h3> */}
                    </div>
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
        </>
       
    );
}

export default LaborDashboard;