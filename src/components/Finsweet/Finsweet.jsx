import React from "react";
import "./Finsweet.css";
import about_mic_big_image from "../../images/about_mic_big_image.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Finsweet = () => {
  const notify = () =>
    toast.success(<div className={"toastText"}>Subscribe !</div>, {
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
    <div className="finsweet">
      <div className="finsweet_container">
        <div className="finsweet_container-left">
          <h1>About Finsweet Podcast</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <button onClick={notify} className="finsweet_btn">Subscribe Now!</button>
        </div>
        <div className="finsweet_container-right">
          <img className="finsweet_img" src={about_mic_big_image} />
        </div>
      </div>
    </div>
  );
};

export default Finsweet;
