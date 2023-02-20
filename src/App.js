import "./App.css";
import { Card } from "./components/card/Card";
import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Sliders } from "./components/Slider/Slider";
import { Categories } from "./components/Сategories/Categories";
import Categoris from "./assets/Categoris.json";
import legoCart from "./assets/legoCart.json";
import { useState } from "react";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [caregoris, setCategoris] = useState(0);
  const [onClickCart, setOnClickCart] = useState(false);
  const [onClickClose, setOnClickClose] = useState(true);

  const openCart = () => {
    setOnClickCart(true);
  };

  const closeCart = () => {
    setOnClickCart(false);
  };
  return (
    <div className="wrapper">
      {onClickCart ? <Cart closeCart={closeCart} /> : null}
      <Header openCart={openCart} />
      <Sliders />
      <div className="categories">
        {Categoris.map((obj, i) => {
          return (
            <Categories
              categoris={caregoris}
              img={obj.img}
              text={obj.text}
              index={i}
              setCategoris={setCategoris}
            />
          );
        })}
      </div>

      <div className="card__items">
        {legoCart.map((obj) => {
          return (
            <Card image={obj.image} product={obj.product} title={obj.title} price={obj.price} />
          );
        })}
        <Footer />
      </div>
    </div>
  );
}

export default App;
