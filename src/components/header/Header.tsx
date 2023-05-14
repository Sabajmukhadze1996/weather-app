import React, { useContext } from "react";
import { Translation } from "../../translation/TranslationContextProvider";
import "./header.css";
import Clock from "../clock/Clock";

const Header = () => {

  const { content } = useContext(Translation);

  return (
    <header className="header">
      <nav className="nav-bar">
        <h1>{content.weather_app}</h1>
        <Clock />
      </nav>
    </header>
  );
};

export default Header;
