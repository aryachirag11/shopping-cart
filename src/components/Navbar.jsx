import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { IconButton, StyledBadge } from "@mui/material";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.items);
  return (
    <>
      <nav className="flex justify-between  items-center h-20 max-w-6xl mx-auto ">
        <div>
          <NavLink to="/">
            <img src="logo.png" alt="App Logo" className="h-14" />
          </NavLink>
        </div>
        <div className="flex font-medium text-xl space-x-5 justify-between items-center text-slate-100 mr-5">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl" />
            {items.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {items.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
