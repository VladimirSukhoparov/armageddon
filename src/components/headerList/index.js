import React, { useState } from "react";
import { cn as bem } from "@bem-react/classname";
import "style.css";

const HeaderList = () => {
  const cn = bem("HeaderList");
  const [active, setActive] = useState("в километрах");
  function activeWrite(e) {
    setActive(e.target.textContent);
  }
  return (
    <div className={cn()}>
      <p className={cn("title")}>Ближайшие подлёты астероидов</p>
      <span
        className={active == "в километрах" ? cn("active") : cn("sorting")}
        onClick={(e) => activeWrite(e)}
      >
        в километрах
      </span>
      <span className={cn("divider")}>|</span>
      <span
        className={active == "в лунных орбитах" ? cn("active") : cn("sorting")}
        onClick={(e) => activeWrite(e)}
      >
        в лунных орбитах
      </span>
    </div>
  );
};

export default HeaderList;
