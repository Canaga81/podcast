import React from "react";
import "./Makers.css";
import apple_Podcast_item from "../../images/Apple_Podcast_item.png";
import google_Podcast_item from "../../images/Google_Podcast_item.png";
import sound_Podcast_item from "../../images/Soundcloud_item.png";
import spotify_Podcast_item from "../../images/Spotify_item.png";

const Makers = () => {
  

  return (
    <section className="makers">
      <div className="makers_container">
        <div className="makers_container-left">
          <div className="makers_left_text_cont">
            <h2 className="makers_title">
              A podcast for makers and entrepreneurs
            </h2>
            <p className="makers_desc">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. <br /> <br />
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
          <div className="makers_left_text_cont">
            <h3 className="makers_title">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black
            </h3>
            <p className="makers_desc">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
            <ul className="makers_ul">
              <li className="makers_li">we both celebrate and challenge</li>
              <li className="makers_li">
                the culture around us as we orient our lives around Jesus
              </li>
              <li className="makers_li">
                we want to help you take that next step
              </li>
            </ul>
            <p className="makers_desc">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
          </div>
        </div>
        <div className="makers_container-right">
          <h3 className="makers_right-h3">Listen on</h3>
          <img src={apple_Podcast_item} />
          <img src={google_Podcast_item} />
          <img src={sound_Podcast_item} />
          <img src={spotify_Podcast_item} />
        </div>
      </div>
    </section>
  );
};

export default Makers;
