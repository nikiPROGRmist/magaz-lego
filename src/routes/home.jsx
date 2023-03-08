import React from "react";
import { Card } from "../components/card/Card";
import { Footer } from "../components/Footer/Footer";
import { Serch } from "../components/Serch/serch";
import { Sliders } from "../components/Slider/Slider";
import { Categories } from "../components/Сategories/Categories";
import Categoris from "../assets/Categoris.json";
import legoCart from "../assets/legoCart.json";

export const Home = ({
  postCart,
  loadCard,
  onSerch,
  setDisplayCart,
  displayCart,
  setOnCategoris,
  setOnSerch,
  onCaregoris,
  favoriteCard,
  setFavoriteCard,
  postFavorite,
}) => {
  return (
    <>
      <Sliders />
      <div className="categories">
        {Categoris.map((obj, i) => {
          return (
            <Categories
              onCaregoris={onCaregoris}
              setOnCategoris={setOnCategoris}
              key={i}
              img={obj.img}
              text={obj.text}
              index={i}
              object={obj}
            />
          );
        })}
      </div>
      {/* <Serch setOnSerch={setOnSerch} /> */}

      <div className="card__items">
        {loadCard
          .filter((item) => item.title.toLowerCase().includes(onSerch.toLowerCase()))
          .map((obj) => {
            return (
              <Card
                key={obj.id}
                {...obj}
                onPlus={(obj) => postCart(obj)}
                onFavorite={(obj) => postFavorite(obj)}
                setDisplayCart={setDisplayCart}
                setFavoriteCard={setFavoriteCard}
                isAdded={displayCart.some((item) => item.id === obj.id)}
                isFavorite={favoriteCard.some((item) => item.id === obj.id)}
              />
            );
          })}
      </div>

      <Footer />
    </>
  );
};
