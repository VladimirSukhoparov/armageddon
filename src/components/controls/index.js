import React from "react";
import { cn as bem } from "@bem-react/classname";
import { plural } from "../../utils";
import PropTypes from "prop-types";

import "style.css";

const Controls = (props) => {
  const cn = bem("Controls");
  const counter = 5;
  return (
    <div className={cn()}>
      <div className={cn("container")}>
        <div className={cn("text")}>
          <span className={cn("title")}>Корзина:</span>
          <span className={cn("subTitle")}>
            {counter > 0 &&
              `${counter} ${plural(counter, {
                one: "астероид",
                few: "астероида",
                many: "астероидов",
              })}`}
          </span>
        </div>
        <button onClick={() => {}} className={cn("send")}>
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
