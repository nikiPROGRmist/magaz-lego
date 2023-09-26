import { useSelector, useDispatch } from "react-redux";
import { setSortType } from "../../redux/slices/categorieSlice";
import { SetOnSort } from "../../redux/slices/categorieSlice";
import "./sort.scss";

export const Sort = () => {
  const arr = [
    { name: "Популярности", sortProperty: "raiting" },
    { name: "Цена по возрастанию", sortProperty: "price" },
    { name: "Цена по убыванию", sortProperty: "-price" },
    { name: "Алфавиту", sortProperty: "title" },
  ];
  // const [sort, setSort] = useState(false);
  const sortType = useSelector((state) => state.filter.sortType);
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filter);

  const handleSortIcon = (type) => {
    dispatch(setSortType(type));
    dispatch(SetOnSort(false));
  };
  return (
    <div className="sort">
      <div onClick={() => dispatch(SetOnSort(!sort))} className="sort__title">
        {sort ? (
          <svg className="sort__svg" height="15px" version="1.1" viewBox="0 0 512 512" width="15px">
            <path d="M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z" />
          </svg>
        ) : (
          <svg height="15px" className="sort__svg" version="1.1" viewBox="0 0 512 512" width="15px">
            <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" />
          </svg>
        )}
        Сортировка по: <span>{sortType.name}</span>
      </div>
      {sort ? (
        <div className="sort__icon">
          {arr.map((item) => {
            return (
              <>
                <div
                  key={item}
                  onClick={() => handleSortIcon(item)}
                  className={`sort__item ${
                    sortType.sortProperty === item.sortProperty ? "active" : ""
                  }`}
                >
                  {item.name}
                </div>
              </>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
