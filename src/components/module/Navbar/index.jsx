import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-yellow-300 flex justify-end px-12">
      <ul className="flex">
        <li>
          <NavLink
            className="px-5 py-3 inline-block text-white hover:bg-yellow-700 transition duration-100"
            to="/main/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-5 py-3 inline-block text-white hover:bg-yellow-700 transition duration-100"
            to="/main/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className="px-5 py-3 inline-block text-white hover:bg-yellow-700 transition duration-100"
            to="/main/product"
          >
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
