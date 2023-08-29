import React from "react";
import { cn as bem } from "@bem-react/classname";
import "style.css";
import { useDispatch, useSelector } from "react-redux";
import { plural } from "../../utils";
import { addBasket } from "../../redux/getLoadList";

const ItemList = ({ item }) => {
  const cn = bem("ItemList");
  const { distance, basket } = useSelector((state) => state.asteroids);
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(addBasket(id));
  }
  return (
    <div className={cn()}>
      <p className={cn("title")}>{item.name.replace(/[()]/g, "")}</p>
      <p className={cn("distance")}>
        {distance == "в километрах"
          ? ` ${Math.trunc(
              item.close_approach_data[0].miss_distance.kilometers
            )} км`
          : ` ${Math.trunc(
              item.close_approach_data[0].miss_distance.lunar
            )} ${plural(
              Math.trunc(item.close_approach_data[0].miss_distance.lunar),
              {
                one: "лунная орбита",
                few: "лунные орбиты",
                many: "лунных орбит",
              }
            )}`}
      </p>
      <p className={cn("diameter")}>
        &#x2300;
        {` ${Math.trunc(
          item.estimated_diameter.meters.estimated_diameter_min
        )}m - ${Math.trunc(
          item.estimated_diameter.meters.estimated_diameter_max
        )}m`}
      </p>
      <p className={cn("date")}>
        {new Date(
          item.close_approach_data[0].close_approach_date_full
        ).toLocaleString()}
      </p>
      {basket.some((el) => el.id == item.id) ? (
        <button className={cn("buy")}>В корзине</button>
      ) : (
        <button className={cn("buy")} onClick={() => handleClick(item.id)}>
          Заказать{" "}
        </button>
      )}
    </div>
  );
};

export default ItemList;
