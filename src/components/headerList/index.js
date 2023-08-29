import React, { useState } from "react";
import { cn as bem } from "@bem-react/classname";
import "style.css";
import { useDispatch, useSelector } from "react-redux";
import { setDistance } from "../../redux/getLoadList";

const HeaderList = () => {
  const cn = bem("HeaderList");
  const distance = useSelector((state) => state.asteroids.distance);
  const dispatch = useDispatch();
  function activeWrite(e) {
    dispatch(setDistance(e.target.textContent));
  }
  return (
    <div className={cn()}>
      <p className={cn("title")}>Ближайшие подлёты астероидов</p>
      <span
        className={distance == "в километрах" ? cn("active") : cn("sorting")}
        onClick={(e) => activeWrite(e)}
      >
        в километрах
      </span>
      <span className={cn("divider")}>|</span>
      <span
        className={
          distance == "в лунных орбитах" ? cn("active") : cn("sorting")
        }
        onClick={(e) => activeWrite(e)}
      >
        в лунных орбитах
      </span>
    </div>
  );
};

export default HeaderList;
