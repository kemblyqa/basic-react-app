import React from "react";
import './styles.css'

export const SearchBox = ({onChangeHandler, placeholder, className}) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
