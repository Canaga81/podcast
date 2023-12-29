import { useState } from "react";
import "./Episodes.css";
import CardsData from "../../images/CardsData";
import CardItem from "../CardItem/CardItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Episodes = () => {
  const [visible, setVisible] = useState(3);

  const showMoreMeals = () => {
    notify();
    setVisible((item) => (item += 6));
  };

  const notify = () =>
    toast.success(<div className={"toastText"}>Mehsullar Artirildi !</div>, {
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
    <section className="episodes">
      <div className="episodes_container">
        <div className="episodes_container-top">
          <div className="episodes_container-top_left">
            <h2>Recent Episodes</h2>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black.
            </p>
          </div>
          <div className="episodes_container-top_right">
            <ToastContainer
              className={"toatCont"}
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <button onClick={() => showMoreMeals()} className="episodes_btn">
              See All Episiodes
            </button>
          </div>
        </div>
        <div className="episodes_container-bottom">
          <div className="cards_container">
            {CardsData.slice(0, visible).map((item, i) => {
              return (
                <CardItem
                  key={i}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Episodes;
