import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faRankingStar,
  faPenFancy,
  faBook,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";

const Header = () => {
  const categoriesRow = [
    {
      id: "LN",
      content: "Light Novel",
    },
    {
      id: "CM",
      content: "Comic",
    },
    {
      id: "WN",
      content: "Web novel",
    },
  ];

  const rankingRow = [
    {
      id: "DL",
      content: "Daily",
      url: "ranking/dailyranking",
    },
    {
      id: "WL",
      content: "Weekly",
      url: "ranking/weeklyranking",
    },
    {
      id: "ML",
      content: "Monthly",
      url: "ranking/monthlyranking",
    },
    {
      id: "YL",
      content: "Yearly",
      url: "ranking/yearlyranking",
    },
  ];

  return (
    <nav>
      <div className="navbar-container">
        <Link to="/home" className="logo">
          LOGO
        </Link>
        <ul className="navbar-items">
          <li className="navbar-link">
            <FontAwesomeIcon icon={faCompass} />
            <Dropdown label={"Browser"} categories={categoriesRow} />
          </li>

          <li className="navbar-link">
            <FontAwesomeIcon icon={faRankingStar} />
            <Dropdown label={"Ranking"} categories={rankingRow} />
          </li>

          <li className="navbar-link">
            <FontAwesomeIcon icon={faPenFancy} />
            <Link to="/">Create</Link>
          </li>

          <li className="navbar-link">
            <SearchBox />
          </li>

          <li className="navbar-link">
            <FontAwesomeIcon icon={faBook} />
            <Link to="/">Library</Link>
          </li>
          <li className="navbar-link">
            <FontAwesomeIcon icon={faPenFancy} />
            <Link to="/">Forum</Link>
          </li>
          <li className="navbar-link">
            <FontAwesomeIcon icon={faGears} />
          </li>
          <div className="profile">
            <img
              className="profile-img"
              src="https://images.unsplash.com/photo-1647764304616-d951e5f860c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="avatar"
            ></img>
          </div>
        </ul>
      </div>
      <br />
    </nav>
  );
};

export default Header;
