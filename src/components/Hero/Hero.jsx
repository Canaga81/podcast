import React from "react";
import "./Hero.css";
import color_stripe_1 from "../../images/Color_stripe_1.png";
import color_stripe_2 from "../../images/Color_stripe_2.png";
import color_stripe_3 from "../../images/Color_stripe_3.png";
import color_stripe_4 from "../../images/Color_stripe_4.png";
import color_stripe_5 from "../../images/Color_stripe_5.png";
import color_stripe_6 from "../../images/Color_stripe_6.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const notify = () =>
    toast.success(<div className={"toastText"}>Email Hazirdir !</div>, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <section className="hero">
        <div className="hero_container">
          <div className="hero_container-left">
            <div className="hero_title">
              <h1 className="hero_title-h1">
                Become The Hero Of Your Own Story
              </h1>
            </div>
            <div className="hero_text">
              <p className="hero_text-p">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat.
              </p>
            </div>
            <div className="hero_input_submit">
              <input
                className="hero_input"
                type="email"
                placeholder="Enter Your Email Id"
              />
              <button onClick = {notify} className="hero_btn">Subscribe</button>
            </div>
          </div>
          <div className="hero_container-right">
            <div className="hero_images">
              <img
                className="hero_img"
                src={color_stripe_1}
                alt="color_stripe_1"
              />
              <img
                className="hero_img"
                src={color_stripe_2}
                alt="color_stripe_2"
              />
              <img
                className="hero_img"
                src={color_stripe_3}
                alt="color_stripe_3"
              />
              <img
                className="hero_img"
                src={color_stripe_4}
                alt="color_stripe_4"
              />
              <img
                className="hero_img"
                src={color_stripe_5}
                alt="color_stripe_5"
              />
              <img
                className="hero_img"
                src={color_stripe_6}
                alt="color_stripe_6"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
