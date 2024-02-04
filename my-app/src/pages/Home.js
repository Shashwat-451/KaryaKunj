import React from 'react';
import "../css/Home.css"
import header from '../assets/images/Landing.jpg'
import data from "../assets/data/HomeContent"
import Testimonials from "../components/Testimonial"
import Footer from "../components/Footer"
import ServicesSection from '../components/ServicesSection';
import "../css/Stay.css"
function Home(props) {
    return (
        <>
        <div className='section_landing' style={{marginBottom:"160px"}}> 
           <div className='content'>
            <h1 style={{fontFamily:"Georgia",fontWeight:"bold"}}>Unleash Construction Excellence with <span style={{color:"rgb(88,69,186"}}>We Build</span></h1>
            <h4 style={{fontFamily:"Georgia",fontWeight:"bold",color:"rgb(227,158,51)"}}>Where Every Blueprint Finds its Brilliance!</h4>
           </div>
          <div className='image'>
            <img src={header} alt="Image"/>
          </div>
          
        </div>
        
       
        <div style={{marginTop:"6px",marginBottom:"60px"}} className='underline'>
        <h1 style={{fontFamily:"georgia",fontWeight:"bold",textAlign:"center",marginTop:"-100px",marginBottom:"80px"}}>Welcome to <span style={{color:"rgb(88,69,186"}}>We Build</span></h1>
        <p style={{marginLeft:"140px",marginBottom:"80px",textAlign:"center",width:"80%",fontSize:"20px"}}>Welcome to We Build, your all-in-one platform designed to streamline construction projects seamlessly. We understand the complexities of the construction industry, and that's why we've created a user-friendly interface that caters to both employers and laborers.</p>
        </div>
        <div style={{marginTop:"6px",marginBottom:"60px"}} className='underline2'>
        <p style={{marginLeft:"140px",marginBottom:"100px",textAlign:"center",width:"80%",fontSize:"20px"}}>Join We Build today to experience a revolution in construction management. Sign up now to unlock the full potential of your construction projects!
      </p>
        </div>

        <div className='container ' style={{width:"100%",height:"auto",marginLeft:"30px",marginTop:"200px"}}>
            {
                data.map((section,index)=>{
                    console.log(section);
                    console.log(section.header);
                   return(
                    <>
                     <div className="sec" style={{display:'flex',flexWrap:'wrap',alignSelf:"center",marginBottom:"180px",flexDirection:index%2==0?'row':'row-reverse'}}>
                         <div className='content_section'>
                             <h1 style={{marginBottom:"20px",fontFamily:"Georgia",fontWeight:"bold",textAlign:"center"}}>{section.headline}</h1>
                             <p  style={{marginBottom:"20px",fontFamily:"Georgia",textAlign:"center"}}>{section.Content}</p>
                         </div>
                         <div className='image_section'>
                           <img src={section.image}/>
                         </div>
                     </div>
                    </>
                   )
                })
            }
       </div>
       <ServicesSection/>
       <Testimonials/>
       
       
        </>
        

        
    );
}

export default Home;