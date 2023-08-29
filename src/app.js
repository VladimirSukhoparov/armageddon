import React from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/home";
import { cn as bem } from "@bem-react/classname";


const App = () => {
    const cn = (bem("App"))
  return (
    <div className={cn()}>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
};

export default App;
