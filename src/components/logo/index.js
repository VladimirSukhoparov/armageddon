import React from "react";
import { cn as bem } from "@bem-react/classname";
import "style.css";

const Logo = () => {
  const cn = bem("Logo");
  return (
    <div className={cn()}>
      <p className={cn("title")}>Armageddon 2023</p>
      <p className={cn("subTitle")}>
        ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.
      </p>
    </div>
  );
};

export default Logo;
