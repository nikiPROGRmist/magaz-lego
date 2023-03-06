import React from "react";
import { Card } from "../components/card/Card";
import style from "./favorite.module.scss";

export const Favorite = ({ favoriteCard = [], setFavoriteCard, postFavorite }) => {
  return (
    <>
      <h1>Закладки</h1>
      <div className={style.favorite}>
        <div className={style.container}>
          {favoriteCard.map((obj) => {
            return (
              <Card
                favorited={true}
                isCart={true}
                key={obj.id}
                {...obj}
                onFavorite={(obj) => postFavorite(obj)}
                setFavoriteCard={setFavoriteCard}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
