import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { Home } from "./routes/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { Favorite } from "./routes/favorite";

function App() {
  const [displayCart, setDisplayCart] = useState(
    JSON.parse(window.localStorage.getItem("items")) || [],
  );
  const [onCaregoris, setOnCategoris] = useState(0);
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
    axios.get("https://63f881ad1dc21d5465c0cd00.mockapi.io/lego-card").then((res) => {
      setLoadCard(res.data);
    });
  }, []);

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
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                postFavorite={postFavorite}
                postCart={postCart}
                loadCard={loadCard}
                onSerch={onSerch}
                setDisplayCart={setDisplayCart}
                displayCart={displayCart}
                setOnCategoris={setOnCategoris}
                setOnSerch={setOnSerch}
                onCaregoris={onCaregoris}
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
                removeCart={removeCart}
                setDisplayCart={setDisplayCart}
                displayCart={displayCart}
                favorited
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
