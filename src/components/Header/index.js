import React from "react";
import "./styles.css";

const Header = ({ quote, author }) => {
  return (
    <header>
      <blockquote>
        <h2>{quote}</h2>
        <h3> {author} </h3>
      </blockquote>
    </header>
  );
};

export default Header;
