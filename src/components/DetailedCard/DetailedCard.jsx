import "./DetailedCard.css";
import Makers from "../Makers/Makers";
import InformationPerson from "../InformationPerson/InformationPerson";
import Episodes from "../Episodes/Episodes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailedCard = (props) => {
  const { inCard } = props;
  const notify = () =>
    toast.success(<div className={"toastText"}>Dinle !</div>, {
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
      <section className="detailedCard">
        <div className="detailedCard_container">
          <div className="detailedCard_container-left">
            <div className="detailedCard_container-left_image">
              <img src={inCard.image} alt="" />
            </div>
          </div>

          <div className="detailedCard_container-right">
            <div className="detailed_container_title_text">
              <p className="detailedCard_blue">{inCard.category}</p>
              <h2 className="detailedCard_title_h2">{inCard.title}</h2>
            </div>
            <div className="detailed_desc">
              <p className="detailed_desc_p">{inCard.desc}</p>
            </div>
            <button onClick={notify} className="detailed_container-button">
              <p className="detailed_container-btn_text">Listen now</p>
              <p className="detailed_time">53:32</p>
            </button>
          </div>
        </div>
      </section>

      <Makers />
      <InformationPerson />
      <Episodes />
    </>
  );
};

export default DetailedCard;