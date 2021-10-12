import { AccountCircle } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const HeaderMiddle = () => {
  return (
    <div className="header-middle-main flex items-center justify-between py-4">
      <Link to="/" className="header-middel-brand">
        My <span className="text-blue-500 font-bold text-xl">Store</span>
      </Link>
      <div className="header-middle-src-box flex items-center lg:w-1/4 bg-gray-100 rounded-md">
        <div className="header-middle-src-icon text-lg font-light px-2">
          <FaSearch />
        </div>
        <div className="header-middle-input">
          <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
