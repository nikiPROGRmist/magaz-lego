import "./categories.scss";
import { setCategoriesId } from "../../redux/slices/categorieSlice";
import { useSelector, useDispatch } from "react-redux";
import Categoris from "../../assets/Categoris.json";

export const Categories = () => {
  const categoriesActive = useSelector((state) => state.filter.value);
  const dispath = useDispatch();

  return Categoris.map((item, i) => {
    return (
      <>
        <div className="cat__item">
          <img src={item.img} alt="" />
          <div className="ul__item">
            <li
              onClick={() => dispath(setCategoriesId(i))}
              className={categoriesActive === i ? "active" : ""}
            >
              {item.text}
            </li>
          </div>
        </div>
      </>
    );
  });
};
