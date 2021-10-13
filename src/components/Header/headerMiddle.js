import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, TextField } from "@mui/material";
import React from "react";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeaderMiddle = () => {
  return (
    <div className="header-middle-main flex items-center justify-between py-4">
      <div className="header-middel-brand lg:w-2/12  ">
        <Link to="/" className="header-middel-brand-name text-2xl font-bold">
          My <span className="text-blue-500  ">Store</span>
        </Link>
      </div>
      <div className="header-middle-src-box lg:w-6/12 pl-3  ">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <label htmlFor="standard-search">
            <SearchIcon sx={{ color: "action.active", mr: 2, my: 0.5 }} />
          </label>
          <TextField fullWidth={true} id="standard-search" label="Search field" type="search" variant="standard" />
        </Box>
      </div>
      <div className="header-middle-icons-account flex items-center justify-center lg:w-4/12 ">
        <div className="icon-wish px-2 text-xl">
          <FiHeart />
        </div>
        <div className="icon-cart px-2 text-2xl flex  items-center text-blue-500 font-bold">
          <FiShoppingCart />
          <div className="amount-cart flex flex-col text-lg pl-3">
            <span>MY CART</span>
            <span>
              0 ITEMS
              <span className="inline-block">
                <ArrowDropDownIcon sx={{ margin: "-3px", fontSize: "1.6rem" }} />
              </span>
            </span>
          </div>
        </div>
        <div className="acount-login-signin flex items-center justify-center">
          <button className="btn-log-in px-2">Login</button>
          <span className="inline-block">or</span>
          <button className="btn-sign-in px-2">Register</button>
        </div>
      </div>
      <button className="btn-menu text-xl">
        <FaBars />
      </button>
    </div>
  );
};

export default HeaderMiddle;
