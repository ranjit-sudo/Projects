import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      {/*logo */}
      <Link to="/">
        <img
          src="https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png"
          alt=""
          className="logo_image"
          href="/"
        />
      </Link>

      <div className="header_options">
        {/*List of Options o Header */}
        <div className="home">
          <span>Home</span>
        </div>
        <div className="contactUs">
          <span>Contact Us</span>
        </div>
      </div>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      {/*Sihn In option */}
      <div className="signIn">Sign In</div>
    </div>
  );
}

export default Header;
