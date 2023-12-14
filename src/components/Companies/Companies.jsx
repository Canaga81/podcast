import './Companies.css'
import Podcast_Available_On from '../../images/Podcast_Available_On.png'
import Sound_Cloud from '../../images/Sound_Cloud.png';
import Spotify from '../../images/Spotify.png';
import Google_Podcast from '../../images/Google_Podcast.png';
import Apple_Podcast from '../../images/Apple_Podcast.png';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
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
                    slidesPerView={5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
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