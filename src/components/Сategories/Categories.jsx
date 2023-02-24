import React from "react";
import "./categories.scss";

export const Categories = ({ img, text, setOnCategoris, index, onCaregoris }) => {
  return (
    <div className="cat__item">
      <img src={img} alt="" />
      <div className="ul__item">
        <li
          onClick={() => console.log(setOnCategoris(index))}
          className={onCaregoris === index ? "active" : ""}
        >
          {text}
        </li>
      </div>
    </div>
  );
};
