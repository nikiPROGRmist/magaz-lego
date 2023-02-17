import "./App.css";
import { Card } from "./components/card/Card";
import { Header } from "./components/Header/Header";
import { Sliders } from "./components/Slider/Slider";
import { Categories } from "./components/Сategories/Categories";
import Categoris from "./assets/Categoris.json";
import legoCart from "./assets/legoCart.json";
import { useState } from "react";

function App() {
  const [caregoris, setCategoris] = useState(0);
  return (
    <div className="wrapper">
      <Header />
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
      </div>
    </div>
  );
}

export default App;
