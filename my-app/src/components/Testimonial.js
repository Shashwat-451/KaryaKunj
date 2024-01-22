import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "../assets/data/Reviews"
// Import Swiper styles
import 'swiper/css';

const Testimonial=() => {
  console.log(data)
  return (
   <>
 <Swiper
  spaceBetween={50}
  slidesPerView={4}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
  {data.map((reviews, index) => (
    <SwiperSlide key={index}>
      <div className='testimonial_outer' style={{width:"200px",marginLeft:"70px"}}>
        <h1 style={{textAlign:"justify"}}>{reviews.name}</h1>
        {/* <h1>{reviews.ratings}</h1> */}
        <p>{reviews.comment}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

   </>
 
  );
};

export default Testimonial;


// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>

//     </Swiper>
//   );
// };