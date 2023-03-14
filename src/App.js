import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { Home } from "./routes/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { Favorite } from "./routes/favorite";
import { useSelector } from "react-redux";

function App() {
  const [currentPaginate, setCurrentPaginate] = useState(1);
  const [displayCart, setDisplayCart] = useState(
    JSON.parse(window.localStorage.getItem("items")) || [],
  );
  // const [onCaregoris, setOnCategoris] = useState(0);
  const categoriesActive = useSelector((state) => state.filter.value);

  const [onSerch, setOnSerch] = useState("");
  const [loadCard, setLoadCard] = useState([]);

  const [favoriteCard, setFavoriteCard] = useState(
    JSON.parse(window.localStorage.getItem("favorite")) || [],
  );

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(displayCart));
  }, [displayCart]);

  useEffect(() => {
    window.localStorage.setItem("favorite", JSON.stringify(favoriteCard));
  }, [favoriteCard]);

  useEffect(() => {
    axios
      .get(
        `https://63f881ad1dc21d5465c0cd00.mockapi.io/lego-card?page=${currentPaginate}&limit=6${
          categoriesActive !== 0 ? `&categories=${categoriesActive}` : ""
        }`,
      )
      .then((res) => {
        setLoadCard(res.data);
      });
  }, [currentPaginate, categoriesActive]);

  const postCart = (obj) => {
    if (displayCart.find((item) => item.id === obj.id)) {
      setDisplayCart(displayCart.filter((item) => item.id !== obj.id));
    } else {
      setDisplayCart((prev) => [...prev, obj]);
    }
  };

  const removeCart = (id) => {
    if (window.confirm("Хотите удалить ?")) {
      setDisplayCart(displayCart.filter((item) => item.id !== id));
    }
  };

  const delCart = () => {
    setDisplayCart(displayCart.filter((item) => item.length));
  };

  const display = displayCart.reduce((sum, item) => Number(item.price) + sum, 0);

  const postFavorite = (obj) => {
    console.log(obj.id);
    if (favoriteCard.find((item) => item.id === obj.id)) {
      setFavoriteCard(favoriteCard.filter((item) => item.id !== obj.id));
    } else {
      setFavoriteCard((prev) => [...prev, obj]);
    }
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header display={display} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                categoriesActive={categoriesActive}
                setCurrentPaginate={setCurrentPaginate}
                postFavorite={postFavorite}
                postCart={postCart}
                loadCard={loadCard}
                onSerch={onSerch}
                setDisplayCart={setDisplayCart}
                displayCart={displayCart}
                favoriteCard={favoriteCard}
                setFavoriteCard={setFavoriteCard}
              />
            }
          />
          <Route
            path="/cart"
            exact
            element={
              <Cart
                delCart={delCart}
                removeCart={removeCart}
                setDisplayCart={setDisplayCart}
                displayCart={displayCart}
                favorited
                display={display}
              />
            }
          />

          <Route
            path="/favorite"
            element={
              <Favorite
                favoriteCard={favoriteCard}
                setFavoriteCard={setFavoriteCard}
                postFavorite={postFavorite}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
