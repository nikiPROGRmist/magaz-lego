import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../card/Card";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Serch } from "../Serch/serch";
import { Sliders } from "../Slider/Slider";
import { Categories } from "../Сategories/Categories";
import Categoris from "../../assets/Categoris.json";

export const Home = ({ setDisplayCart, displayCart, object }) => {
  const [onCaregoris, setOnCategoris] = useState(0);
  const [onSerch, setOnSerch] = useState("");
  const [loadCard, setLoadCard] = useState([]);

  useEffect(() => {
    axios.get("https://63f881ad1dc21d5465c0cd00.mockapi.io/lego-card").then((res) => {
      setLoadCard(res.data);
    });
  }, []);

  const postCart = (obj) => {
    axios.post("https://63f881ad1dc21d5465c0cd00.mockapi.io/cart", obj);
    setDisplayCart([...displayCart, obj]);
  };

  return (
    <>
      <Header />
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
      <Serch setOnSerch={setOnSerch} />

      <div className="card__items">
        {loadCard
          .filter((item) => item.title.toLowerCase().includes(onSerch.toLowerCase()))
          .map((obj, i) => {
            return (
              <Card
                key={i}
                image={obj.image}
                product={obj.product}
                title={obj.title}
                obj={obj}
                price={obj.price}
                onPlus={(obj) => postCart(obj)}
                setDisplayCart={setDisplayCart}
                displayCart={displayCart}
              />
            );
          })}
      </div>

      <Footer />
    </>
  );
};
