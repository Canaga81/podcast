import React from 'react'
import './Comments.css'
import comments from '../../images/CommentsData'
import CommentsItem from '../CommentsItem/CommentsItem'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Comments = () => {

    return (
        
        <section className='comments'>
            <div className="comments_container">
                <div className="comments_container-top">
                    <div className="comments_container-top_left">
                        <h2>What our listeners say</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mus cras lacus tellus morbi viverra suspendisse ornare.
                            Sit volutpat, volutpat ut netus malesuada
                            enim penatibus non aliquet.
                        </p>
                    </div>

                    {/* <div className="comments_container-top_right">
                        <div className="arrows_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="128" height="48" viewBox="0 0 128 48" fill="none">
                                <circle className='svg_left' cx="24" cy="24" r="24" fill="#503AE7" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M18.5614 29.7614L13.2447 24.5761C12.9184 24.2579 12.9184 23.7421 13.2447 23.4239L18.5614 18.2386C18.8877 17.9205 19.4167 17.9205 19.7429 18.2386C20.0692 18.5568 20.0692 19.0727 19.7429 19.3909L15.8524 23.1852L35 23.1852L35 24.8148L15.8524 24.8148L19.7429 28.6091C20.0692 28.9273 20.0692 29.4432 19.7429 29.7614C19.4167 30.0795 18.8877 30.0795 18.5614 29.7614Z" fill="#1AD993" />
                                <circle className='svg_right' cx="104" cy="24" r="24" fill="#503AE7" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M109.439 18.2386L114.755 23.4239C115.082 23.7421 115.082 24.2579 114.755 24.5761L109.439 29.7614C109.112 30.0795 108.583 30.0795 108.257 29.7614C107.931 29.4432 107.931 28.9273 108.257 28.6091L112.148 24.8148H93V23.1852H112.148L108.257 19.3909C107.931 19.0727 107.931 18.5568 108.257 18.2386C108.583 17.9205 109.112 17.9205 109.439 18.2386Z" fill="#1AD993" />
                            </svg>

                        </div>
                    </div> */}

                </div>

                <div className="comments_container-bottom">
                    <Swiper navigation={true} modules={[Navigation]} 
                    spaceBetween={60}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        <div className="comments_container_items">
                            {
                                comments.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <CommentsItem id={item.id} image={item.image} name={item.name} desc={item.desc} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
        
    )

}

export default Comments