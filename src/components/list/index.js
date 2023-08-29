import React from "react";
import { useSelector } from "react-redux";
import { cn as bem } from "@bem-react/classname";
import ClipLoader from "react-spinners/ClipLoader";
import HeaderList from "../headerList";
import ItemList from "../itemList";

import "style.css";
import { currentDate } from "../../utils";

const List = () => {
  const cn = bem("List");
  const { asteroids, status, error } = useSelector((state) => state.asteroids);

  let listAsteroids = [];
  if (status == "resolved") {
    [listAsteroids] = Object.entries(asteroids.near_earth_objects).map(
      (item) => item[1]
    );
  }

  let content;
  if (status == "loading") {
    content = <ClipLoader color="#ffffff" />;
  } else if (status == "resolved") {
    content = listAsteroids.map((item, i) => <ItemList item={item} key={i} />);
  } else if (error) {
    content = (
      <p>
        Error: {error.code}, {error.http_error}
      </p>
    );
  }

  return (
    <div className={cn()}>
      {status === "loading" ? (
        <ClipLoader color="#ffffff" />
      ) : error ? (
        (content = (
          <p>
            Error: {error.code}, {error.http_error}
          </p>
        ))
      ) : (
        status == "resolved" && (
          <>
            <HeaderList />
            {listAsteroids.map((item) => (
              <ItemList item={item} key={item.id} />
            ))}
          </>
        )
      )}
    </div>
  );
};

export default List;
