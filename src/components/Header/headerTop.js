import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTop = () => {
  const navTopItems = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Delivery",
      path: "/delivery",
    },
    {
      name: "Payment",
      path: "/payment",
    },
  ];
  return (
    <>
      <div className=" flex flex-wrap justify-between header-top-main">
        <ul className="header-top-ul flex items-center">
          {navTopItems.map((item, i) => {
            const { name, path } = item;
            return (
              <li className=" text-center 2xl:text-xl" key={i}>
                <NavLink exact activeClassName="text-gray-400 " className="px-3 lg:px-4" to={path}>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="header-top-brand text-2xl">
          My <span className="inline-block text-blue-500">Store</span>
        </div>

        <div className="header-top-contact-no text-xl">+023 2594 844</div>
      </div>
    </>
  );
};

export default HeaderTop;
