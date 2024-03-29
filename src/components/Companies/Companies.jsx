import './Companies.css'
import Podcast_Available_On from '../../images/Podcast_Available_On.png'
import Sound_Cloud from '../../images/Sound_Cloud.png';
import Spotify from '../../images/Spotify.png';
import Google_Podcast from '../../images/Google_Podcast.png';
import Apple_Podcast from '../../images/Apple_Podcast.png';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Companies = () => {

    return (

        <>


            <section className='companies'>

                <Swiper
                    spaceBetween={100}
                    loop
                    slidesPerView={5}
                    autoplay={{
                        delay: 500
                    }}
                    modules={[Autoplay]}
                    pagination={{
                        clickable: true,
                    }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        610: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 100,
                        },
                        968: {
                            slidesPerView: 3,
                            spaceBetween: 100,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 100,
                        },
                    }}
                >

                    <div className="copmanies_container">
                        <SwiperSlide>
                            <div className="compa-img">
                                <img src={Podcast_Available_On} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="compa-img">
                                <img src={Sound_Cloud} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="compa-img">
                                <img src={Google_Podcast} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="compa-img">
                                <img src={Spotify} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="compa-img">
                                <img src={Apple_Podcast} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="compa-img">
                                <img src={Podcast_Available_On} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="compa-img">
                                <img src={Sound_Cloud} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="compa-img">
                                <img src={Google_Podcast} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="compa-img">
                                <img src={Spotify} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="compa-img">
                                <img src={Apple_Podcast} alt="" />
                            </div>
                        </SwiperSlide>
                    </div>

                </Swiper>

            </section >

        </>

    )

}

export default Companies