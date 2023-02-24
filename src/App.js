import "./App.css";
import { Cart } from "./components/Cart/Cart";
import { Home } from "./components/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function App() {
  const [displayCart, setDisplayCart] = useState([]);

  const removeCart = (id) => {
    console.log(id);
    axios.delete(`https://63f881ad1dc21d5465c0cd00.mockapi.io/cart/${id}`);
    setDisplayCart(displayCart.filter((item) => item.id !== id));
  };

  const object = (obj) => {
    console.log(obj);
  };
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <Home object={object} setDisplayCart={setDisplayCart} displayCart={displayCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                removeCart={removeCart}
                setDisplayCart={setDisplayCart}
                displayCart={displayCart}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
