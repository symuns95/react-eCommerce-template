import React from "react";
import "./header.scss";
import HeaderMiddle from "./headerMiddle";
import HeaderTop from "./headerTop";
const HeaderMain = () => {
  return (
    <header className="section-header-main bg-white p-3">
      <div className="container-header-main container mx-auto">
        <HeaderTop />
        <HeaderMiddle />
      </div>
    </header>
  );
};

export default HeaderMain;
