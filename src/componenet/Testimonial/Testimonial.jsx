import React from 'react'
import './../Testimonial/Testimonial.css'
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Testimonial = () => {

   

  return (
    <div>
         {/* TESTIMONIAL  */}

       <div className="team-container" id='blog'>
         <div className="prc-hdr">
      <h2 className="sction">
        <span>Testimonial</span>
      </h2>
      <p className="section-p">
       Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
      </p>
      </div>
    </div>

       <Swiper  className='spr'
                    slidesPerView={2}
                  spaceBetween={40}
                    speed={1500}
                    loop={true}
                    autoplay={ {
                            delay: 1500,
                        } } 
                        breakpoints={{
                            0: {
                                slidesPerView:1,
                                spaceBetween:40
                            },
                              768: {
                                slidesPerView:2
                            },
                              900: {
                                slidesPerView:2.2
                            },
                        }}
                        modules={[Autoplay]}
                        
                        >

                <SwiperSlide>
                    <div className="staff_card">
                        {/* <img src="" alt="staff-image" /> */}
                        <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                            The team is professional, responsive, and truly cares about the success of our business. 
                            We highly recommend Positivus to any company looking to grow their online presence."</p>

                       
                    </div>
                     <div className="staff_details">
                            <h3>John Smith</h3>
                           <span>Marketing Director at XYZ Corp</span>
                        </div>
                </SwiperSlide>
                 <SwiperSlide>
                     <div className="staff_card">
                         {/* <img src="" alt="staff-image" /> */}
                         <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                            The team is professional, responsive, and truly cares about the success of our business. 
                            We highly recommend Positivus to any company looking to grow their online presence."</p>


                    </div>
                    
                        <div className="staff_details">
                            <h3>John Smith</h3>
                            <span>Marketing Director at XYZ Corp</span>
                        </div>
                </SwiperSlide>  
                <SwiperSlide>
                   <div className="staff_card">
                         {/* <img src="" alt="staff-image" /> */}
                         <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                            The team is professional, responsive, and truly cares about the success of our business. 
                            We highly recommend Positivus to any company looking to grow their online presence."</p>
    
                    </div>
                    <div className="staff_details">
                            <h3>John Smith</h3>
                            <span>Marketing Director at XYZ Corp</span>
                        </div>
                </SwiperSlide>
                
                <SwiperSlide>
                   <div className="staff_card">
                       {/* <img src="" alt="staff-image" /> */}
                       <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                            The team is professional, responsive, and truly cares about the success of our business. 
                            We highly recommend Positivus to any company looking to grow their online presence."</p>


                        
                    </div>
                     <div className="staff_details">
                            <h3>John Smith</h3>
                          <span>Marketing Director at XYZ Corp</span>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                     <div className="staff_card">
                        {/* <img src="" alt="staff-image" /> */}
                        <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                            The team is professional, responsive, and truly cares about the success of our business. 
                            We highly recommend Positivus to any company looking to grow their online presence."</p>

                    </div>
                    
                         <div className="staff_details">
                            <h3>John Smith</h3>
                          <span>Marketing Director at XYZ Corp</span>
                        </div>
                </SwiperSlide>
                
               
                 <SwiperSlide>
                     <div className="staff_card">
                          {/* <img src="" alt="staff-image" /> */}
                          <p>"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. 
                            The team is professional, responsive, and truly cares about the success of our business. 
                            We highly recommend Positivus to any company looking to grow their online presence."</p>

                       
                    </div>
                     <div className="staff_details">
                            <h3>John Smith</h3>
                            <span>Marketing Director at XYZ Corp</span>
                        </div>
                </SwiperSlide>
            </Swiper>
    </div>
  )
}


export default Testimonial