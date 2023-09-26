import React from "react";
import { Card } from "../components/card/Card";
import { Footer } from "../components/Footer/Footer";
import { Sliders } from "../components/Slider/Slider";
import { Categories } from "../components/Сategories/Categories";
import { useDispatch } from "react-redux";
import { setCurrentPaginate } from "../redux/slices/categorieSlice";
import ReactPaginate from "react-paginate";
import { Sort } from "../components/Sort/Sort";
import { Search } from "../components/Serch/search";
import { Skeleton } from "../components/Skeleton/Skeleton";

export const Home = ({
  isLoading,
  postCart,
  loadCard,
  setDisplayCart,
  displayCart,
  favoriteCard,
  setFavoriteCard,
  postFavorite,
}) => {
  // const { search } = useSelector((state) => state.search);
  const dispath = useDispatch();

  const onClickPaginate = (event) => {
    dispath(setCurrentPaginate(event.selected + 1));
  };

  return (
    <>
      <Sliders />
      <div className="categories">
        <Categories />
      </div>

      <div className="sort__container">
        <Search />
        <Sort />
      </div>

      <div className="card__items">
        {isLoading ? (
          [...new Array(6)].map((_, index) => <Skeleton key={index} />)
        ) : (
          <>
            {loadCard
              // .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
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
          </>
        )}
      </div>

      <ReactPaginate
        className="paginate"
        breakLabel=""
        nextLabel=">"
        onPageChange={onClickPaginate}
        pageRangeDisplayed={3}
        pageCount={6}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />

      <Footer />
    </>
  );
};
