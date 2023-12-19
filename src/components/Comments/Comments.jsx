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

                </div>

                <div className="comments_container-bottom">
                    <Swiper navigation={true} modules={[Navigation]}
                        spaceBetween={60}
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            900: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 70,
                            },
                        }}
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