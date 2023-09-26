import { Cart } from "./components/Cart/Cart";
import { Home } from "./routes/home";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./components/Header/Header";
import { Favorite } from "./routes/favorite";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { SetOnSort } from "./redux/slices/categorieSlice";
import qs from "qs";

function App() {
  const navigate = useNavigate();
  const [displayCart, setDisplayCart] = useState(
    JSON.parse(window.localStorage.getItem("items")) || [],
  );
  const { value, sortType, sort, paginate } = useSelector((state) => state.filter);
  const dispath = useDispatch();
  const { search } = useSelector((state) => state.search);
  const [loadCard, setLoadCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [favoriteCard, setFavoriteCard] = useState(
    JSON.parse(window.localStorage.getItem("favorite")) || [],
  );

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      console.log(params);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(displayCart));
  }, [displayCart]);

  useEffect(() => {
    window.localStorage.setItem("favorite", JSON.stringify(favoriteCard));
  }, [favoriteCard]);

  useEffect(() => {
    axios
      .get(
        `https://63f881ad1dc21d5465c0cd00.mockapi.io/lego-card?search=${search}&sortBy=${sortType.sortProperty.replace(
          "-",
          "",
        )}&order=${sortType.sortProperty.includes("-") ? "desc" : "asc"}&page=${paginate}&limit=6${
          value !== 0 ? `&categories=${value + 1}` : ""
        }`,
      )
      .then((res) => {
        setLoadCard(res.data);
        setIsLoading(false);
      });
  }, [paginate, value, sortType.sortProperty, search]);

  useEffect(() => {
    const StrQs = qs.stringify({
      paginate: paginate,
      value: value,
      sortType: sortType.sortProperty,
    });
    navigate(`?${StrQs}`);
  }, [paginate, value, sortType.sortProperty, search]);

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
    <div className="overlay" onClick={sort ? () => dispath(SetOnSort(!sort)) : ""}>
      <div className="wrapper">
        <Header display={display} favoriteCard={favoriteCard} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoading={isLoading}
                postFavorite={postFavorite}
                postCart={postCart}
                loadCard={loadCard}
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
    </div>
  );
}

export default App;
