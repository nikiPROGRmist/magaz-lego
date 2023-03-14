import React from "react";
import { Card } from "../components/card/Card";
import { Footer } from "../components/Footer/Footer";
// import { Serch } from "../components/Serch/serch";
import { Sliders } from "../components/Slider/Slider";
import { Categories } from "../components/Сategories/Categories";

// import legoCart from "../assets/legoCart.json";
import ReactPaginate from "react-paginate";

export const Home = ({
  postCart,
  loadCard,
  onSerch,
  setDisplayCart,
  displayCart,
  favoriteCard,
  setFavoriteCard,
  postFavorite,
  setCurrentPaginate,
}) => {
  return (
    <>
      <Sliders />
      <div className="categories">
        <Categories />
      </div>
      {/* <Serch /> */}

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

      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => setCurrentPaginate(event.selected + 1)}
        pageRangeDisplayed={3}
        pageCount={6}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />

      <Footer />
    </>
  );
};
