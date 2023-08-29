import React from "react";
import { cn as bem } from "@bem-react/classname";
import { plural } from "../../utils";
import PropTypes from "prop-types";

import "style.css";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "../../redux/getLoadList";

const Controls = (props) => {
  const cn = bem("Controls");
  const basket = useSelector((state) => state.asteroids.basket);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch( clearBasket());
  };

  return (
    <div className={cn()}>
      <div className={cn("container")}>
        <div className={cn("text")}>
          <span className={cn("title")}>Корзина:</span>
          <span className={cn("subTitle")}>
            {basket.length >= 0 &&
              `${basket.length} ${plural(basket.length, {
                one: "астероид",
                few: "астероида",
                many: "астероидов",
              })}`}
          </span>
        </div>
        <button onClick={handleClick} className={cn("send")}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Controls;

Controls.propsTypes = {
  counter: PropTypes.number,
};
