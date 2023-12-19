import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import google_podcast_footer from '../../images/Google_Podcast_footer.png'
import Sound_cloud_footer from '../../images/Sound_cloud_footer.png'
import Apple_Podcast_footer from '../../images/Apple_Podcast_footer.png'
import spotify_footer from '../../images/spotify_footer.png'
import Logo_footer from '../../images/Logo_footer.svg'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="footer_container">
                <div className="footer_container-item">
                    <div className="footer_logo">
                        <Link to='/' >
                            <img className='logo_footer' src={Logo_footer} alt="" />
                        </Link>
                    </div>

                    <div className="footer_title_pages">
                        <div className="footer_title">
                            <h4>Pages</h4>
                        </div>
                        <div className="footer_pages">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/podcasts'>Podcasts</Link></li>
                            <li><Link to='/host'>Host</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </div>
                    </div>
                </div>
                <div className="footer_container-item">
                    <div className="footer_title_pages">
                        <div className="footer_title">
                            <h4>Reach Us</h4>
                        </div>
                        <div className="footer_pages">
                            <li><Link to='/contack'>Contact</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </div>
                    </div>
                    <div className="footer_title_pages">
                        <div className="footer_title">
                            <h4>Subscribe</h4>
                        </div>
                        <div className="footer_pages">
                            <img src={Apple_Podcast_footer} alt="" />
                            <img src={google_podcast_footer} alt="" />
                            <img src={Sound_cloud_footer} alt="" />
                            <img src={spotify_footer} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer