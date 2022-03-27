import React from "react";
import "./SearchBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
  return (
    <div className="search-box-container">
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      <input className="search-box" placeholder="Search" type="text"></input>
    </div>
  );
};

export default SearchBox;
