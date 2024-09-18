import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import '../App.css';
const NavbarApp = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          justifyContent: "space-around",
        }}
      >
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Outlet />

    </div>
  );
};

export default NavbarApp;
