import React from "react";
import style from "./cart.module.scss";

export const Cart = ({ closeCart }) => {
  return (
    <div className={style.overlay}>
      <div className={style.overlay__item}>
        <div className={style.menu}>
          <div className={style.title}>Корзина</div>
          <div onClick={closeCart} className={style.close}>
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
        </div>
        <div className={style.cart__item}>
          <div className={style.img__item}>
            <img src="/img/t.webp" alt="" />
          </div>
          <div className="cart__title">Титаник</div>
          <div className="cart__price">4999 руб</div>
        </div>
      </div>
    </div>
  );
};
