import React from "react";
import "./categories.scss";

export const Categories = ({ img, text, categoris, setCategoris, index }) => {
  return (
    <div className="cat__item">
      <img src={img} alt="" />
      <div className="ul__item">
        <li
          onClick={() => console.log(setCategoris(index))}
          className={categoris === index ? "active" : ""}
        >
          {text}
        </li>
      </div>
    </div>
  );
};
