import React, { useState } from 'react';
import bathroom from "../../assets/images/bathroom.jpeg"
import flooring from "../../assets/images/flooring.jpg"
import Lighting from "../../assets/images/Lighting.jpg"
import lights from "../../assets/images/lights.png"
import tiles from "../../assets/images/tiles.png"
import sanitaryware from "../../assets/images/sanitary.png"
import datacategories from "../../assets/data/Home_ShopTab"
import alldata from "../../assets/data/Home_ShopTab2"

import "../../css/Home_shop.css"


function Home_shop(props) {

    const[data,setData]=useState(alldata);

    function handleClick(types){

        if(types.title==="All")
        {
        
            setData(alldata);  
        }
        else
        {
            const data=alldata.filter((elem)=>elem.category===types.title);
            setData(data);  
        }         
    }
    return (
        <>
            <div className='carousal_container'>
            
            </div>
    
            <div className='windows' style={{display:'flex',alignItems:'center',justifyContent:"center",gap:"30px"}}>
                   <div  className='window1'>
                     <img style={{height:"200px",width:"150px"}} src={bathroom}/>
                     <p>Build your bathrooms within</p>
                   </div>
                   <div className='window2'>
                     <img style={{height:"200px",width:"150px"}} src={flooring}/>
                     <p>Complete your lighting under</p>
                   </div>
                   <div className='window3'>
                     <img style={{height:"200px",width:"150px"}} src={Lighting}/> 
                     <p>Finalise your flooring within</p>
                   </div>
            </div>
            
            <div className='deals' >
                       <h1 style={{textAlign:"center"}}>Great deals, selling fast!</h1>
                <div style={{display:'flex',alignItems:'center',justifyContent:"center",gap:"30px"}} className='deals_items'>
                      <div className='deal1'>
                          <img src={lights}/>
                          <h3>LED lights </h3>
                          <h3># Best_price_deal!</h3>
                      </div>
                      <div className='deal2'>
                         <img src={tiles}/>
                         <h3>Tiles at 50% off</h3>
                         <h3>Check them now</h3>
                     </div>
                      <div className='deal3'>
                        <img src={sanitaryware}/>
                        <h3>Sanitaryware & fittings</h3>
                        <h3>#Wholesale_price_offer</h3>
                      </div>
                </div>
            </div>

            <div style={{display:"flex"}} className='buttons'>
                {
                   datacategories.map((elem)=>{
                    return(
                        <>
                           <div onClick={()=>handleClick(elem)}>{elem.title}</div>
                           
                        </>
                    )
                      
                   })
                }
            </div>
                       {
                            data.map((elem)=>{
                                return(
                                    <>
                                      <div style={{display:"flex"}}>
                                        <div>
                                        <img src={elem.img}/>
                                        <h2>{elem.name}</h2>
                                        </div>
                                        
                                      </div>
                                    </>
                                )
                            })
                           }
        </>
        
    );
}

export default Home_shop;