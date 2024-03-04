import React from "react";
import { FaBlogger, FaCoffee, FaShoppingBag } from "react-icons/fa";
import CategoryIcon from "@mui/icons-material/Category";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Logo from "../assests/babyclaps-logo.webp";
import "./headerStyle.css";
import SearchBar from "./Search_Bar/SearchBar";
import CustomButton from "./Button/CustomButton";
import { Icon } from "@mui/material";

function Header() {
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="logoContainer">
          <img src={Logo} className="logo" />
          <h3 className="name">BABYCLAPS</h3>
        </div>
        <div className="search">
          <SearchBar />
        </div>
        <div className="buttonCont">
          <CustomButton label="BRANDS">
            <CategoryIcon color="action" />
          </CustomButton>
          <CustomButton label="CART">
            <LocalMallOutlinedIcon color="action" />
          </CustomButton>

          <CustomButton label="ACCOUNT">
            <PersonOutlineOutlinedIcon color="action" />
          </CustomButton>
        </div>
      </div>
      <div className="innerContainer">
        <CustomButton label="Wishlist" />
        <CustomButton label="Brand" />
        <CustomButton label="Privacy Policy" />
        <CustomButton label="Refund Policy" />
        <CustomButton label="About Us" />
        <CustomButton label="Terms and Conditions" />
        <CustomButton label="Contact Us" />
      </div>
    </div>
  );
}

export default Header;
