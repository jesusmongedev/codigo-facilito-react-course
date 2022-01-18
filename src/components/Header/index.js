import React from "react";

const Header = ({ quote, author }) => {
  return (
    <>
      <p>{quote}</p>
      <p>Author: {author} </p>
    </>
  );
};

export default Header;
