import React from 'react';
import "../css/Home.css"
import header from '../assets/images/Landing.jpg'
import data from "../assets/data/HomeContent"
import Testimonials from "../components/Testimonial"
import Footer from "../components/Footer_comp"
function Home(props) {
    return (
        <>
        <div className='section_landing'> 
           <div className='content'>
            <h1>Unleash Construction Excellence with Construct Nex</h1>
            <h2>Where Every Blueprint Finds its Brilliance!</h2>
           </div>
          <div className='image'>
            <img src={header} alt="Image"/>
          </div>
        </div>

        <div className='container' style={{width:"1300px",height:"auto",marginLeft:"100px"}}>
            {
                data.map((section,index)=>{
                    console.log(section);
                    console.log(section.header);
                   return(
                    <>
                     <div className="sec" style={{display:'flex',flexDirection:index%2===0?'row':'row-reverse',alignSelf:"center"}}>
                         <div className='content_section'>
                             <h1>{section.headline}</h1>
                             <p>{section.Content}</p>
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
       <Testimonials/>
       <Footer/>
        </>
        

        
    );
}

export default Home;