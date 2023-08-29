import React, { useEffect } from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/home";
import { cn as bem } from "@bem-react/classname";
import { useDispatch } from "react-redux";
import { fetchAsteroids } from "./redux/getLoadList";

const App = () => {
  const cn = bem("App");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsteroids());
  }, [dispatch]);

  return (
    <div className={cn()}>
      <Home />
    </div>
  );
};

export default App;
