import React from 'react';
import header from "../assets/images/services1.jpg"
import "../css/Services.css"
import services_data from "../assets/data/ServicesContent"
import {Link} from 'react-router-dom'
function Services(props) {
    return (
        <>
          <div className='services_top'>
              <img src={header} />
              <h1>Services</h1>
          </div>    
        
         <div style={{width:"1200px",marginLeft:"140px"}} className='services_container'>
           {
            services_data.map((services,index)=>{
                return(
                    <>
                       <div className='services_row' style={{display:"flex",flexDirection:index%2===0?'row':'row-reverse'}}>
                         <div className='services_image'>
                              <img style={{height:"400px",width:"auto"}} src={services.image}/>
                         </div>
                         <div className='services_content'>
                               <h1>{services.title}</h1>
                               <p>{services.content}</p>
                               <button>
                                <Link to={services.href}>{services.button}</Link>
                                </button>
                            
                         </div>

                       </div>
                    </>
                )
            })
           }
         </div>
     {/* <Footer/> */}
        </>
    );
}

export default Services;