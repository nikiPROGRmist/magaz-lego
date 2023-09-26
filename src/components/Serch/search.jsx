import React, { useCallback, useRef, useState } from "react";
import style from "./search.module.scss";
import { setOnSearch } from "../../redux/slices/search";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";

export const Search = () => {
  const [onSearch, setSearch] = useState("");
  const dispath = useDispatch();
  const usRef = useRef();

  const clearValue = () => {
    dispath(setOnSearch(""));
    setSearch("");
    usRef.current.focus();
  };

  const updateSearchInput = useCallback(
    debounce((e) => {
      dispath(setOnSearch(e.target.value));
    }, 250),
    [],
  );

  const onChangeInput = (e) => {
    setSearch(e.target.value);
    updateSearchInput(e);
  };

  return (
    <>
      <div className={style.search__menu}>
        <div className={style.search__img}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#000"
            className={style.search}
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <input
          ref={usRef}
          value={onSearch}
          onChange={onChangeInput}
          placeholder="Поиск товаров"
          type="text"
        />
        {onSearch.length > 0 && (
          <div className={style.search__svg}>
            <svg
              onClick={clearValue}
              className={style.search__close}
              data-name="Layer 1"
              height="17"
              id="Layer_1"
              viewBox="0 0 200 200"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
          </div>
        )}
      </div>
    </>
  );
};
