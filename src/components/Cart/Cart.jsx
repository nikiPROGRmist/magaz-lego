import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "./cart.module.scss";

export const Cart = ({ displayCart, removeCart, delCart, display }) => {
  const [count, setCount] = useState(0);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const displayOrder = () => {
    setIsOrderComplete(true);
    delCart();
  };

  {
    return (
      <>
        <div className={style.basket}>
          {displayCart.length > 0 ? (
            <>
              <h1 className={style.basket__title}>Корзина</h1>

              {displayCart.map((item) => {
                return (
                  <>
                    <div key={item.cart} className={style.cart__item}>
                      <div onClick={() => removeCart(item.id)} className={style.closeCart__item}>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
                            fill="#B5B5B5"
                          />
                        </svg>
                      </div>
                      <div className={style.img__item}>
                        <img src={item.image} alt="" />
                      </div>
                      <div className={style.text}>{item.title}</div>
                      <div className={style.cart__count}>
                        <div onClick={onClickPlus} className={style.plus}>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.84019 4.04001H5.96019V1.16001C5.96019 0.629852 5.53035 0.200012 5.00019 0.200012C4.47003 0.200012 4.04019 0.629852 4.04019 1.16001V4.04001H1.1602C0.630035 4.04001 0.200195 4.46985 0.200195 5.00001C0.200195 5.53017 0.630035 5.96001 1.1602 5.96001H4.04019V8.84001C4.04019 9.37017 4.47003 9.80001 5.00019 9.80001C5.53035 9.80001 5.96019 9.37017 5.96019 8.84001V5.96001H8.84019C9.37035 5.96001 9.80019 5.53017 9.80019 5.00001C9.80019 4.46985 9.37035 4.04001 8.84019 4.04001Z"
                              fill="#EB5A1E"
                            />
                          </svg>
                        </div>
                        <div className={style.count}>{count}</div>
                        <div onClick={onClickMinus} className={style.minus}>
                          <svg
                            width="10"
                            height="2"
                            viewBox="0 0 10 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z"
                              fill="#FE5F1E"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className={style.price__menu}>
                        <div className={style.cart__price}>цена:</div>
                        <div className={style.price}>{item.price} руб</div>
                      </div>
                    </div>
                  </>
                );
              })}
              <div className={style.pay__item}>
                <div className={style.sum__title}>
                  <span>Сумма заказа: {display} ₽</span>
                </div>
                <div className={style.btn__menu}></div>
                <button onClick={displayOrder} className={style.pay__btn}>
                  Оплатить
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={style.cart__empty}>
                <div className={style.emty__blog}>
                  <img src={isOrderComplete ? "/img/order.png" : "/img/empty.png"} alt="empty" />
                  <h2>{isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}</h2>
                  <Link to="/">
                    <div className={style.button}>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 13L1 7L7 1"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className={style.title}>Вернуться назад</div>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
};
