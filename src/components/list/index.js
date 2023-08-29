import React from "react";
import { cn as bem } from "@bem-react/classname";
import HeaderList from "../headerList";

import "style.css";

const List = () => {
  const cn = bem("List");
  return (
    <div className={cn()}>
      <HeaderList />
      List
    </div>
  );
};

export default List;
