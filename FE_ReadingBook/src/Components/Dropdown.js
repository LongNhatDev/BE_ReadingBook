import React from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <div className="dropdown__select">
        <span className="dropdown_selected">{props.label}</span>
      </div>
      <ul className="dropdown__list">
        {props.categories.map((category) => (
          <li className="dropdown__item" key={category.id}>
            <Link to={`/${category.url}`} className="dropdown__text">
              {category.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
