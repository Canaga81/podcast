import React from "react";
import CardsData from "../../images/CardsData";
import "./FilterButtons.css";

const FilterButtons = ({ menuItems, filterItems, setItem }) => {
  return (
    <div className="filterButtons">
      <button onClick={() => setItem(CardsData)} className="btn_filter_cards">
        All Podcasts
      </button>

      {menuItems.map((val, i) => (
        <button
          key={i}
          className="btn_filter_cards"
          onClick={() => filterItems(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
