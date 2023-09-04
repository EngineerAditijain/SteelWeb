import React, { useState } from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import LanguageIcon from "@mui/icons-material/Language";
import { Button, Menu, Typography } from "@mui/material";

function BottomNavbar() {
  const [open, setOpen] = useState(false);
  const [bar, setBar] = useState(false);
  const [productsMenuopen, setProductMenuOpen] = useState(false);

 
  return (
    <header id="header_main">
      <div className="bottomNavbar">

        <div className="container">
          <div className="menu-icon" onClick={() => setOpen(!open)}>
            {open ? (
              <FaTimes className=""></FaTimes>
            ) : (
              <FaBars className=""></FaBars>
            )}
          </div>
          {open && (
            <div className="hidden-nav-container">
              <ul className={`${open ? "open-nav" : "close-nav"}`}>
                <NavLink to="/insights" className="underlines">
                  insights
                </NavLink>
                <NavLink to="industries" className="underlines">
                  Industries
                </NavLink>
                <NavLink to="/services" className="underlines">
                  services
                </NavLink>
                <NavLink to="/career" className="underlines">
                  career
                </NavLink>
                <NavLink to="/news" className="underlines">
                  news
                </NavLink>
                <NavLink to="/about" className="underlines">
                  about us
                </NavLink>
                <NavLink to="/investors" className="underlines">
                  Investors
                </NavLink>
                <NavLink to="/Contactus" className="underlines">
                  Contact us
                </NavLink>
                <NavLink to="/language" className="underlines">
                  Global | EN{" "}
                </NavLink>
              </ul>
            </div>
          )}

          <ul className="dropdown" id="navbar_items">
            <NavLink to="/Home" className="underline-one">
              Home
            </NavLink>
            <NavLink to="/About" className="underline-one">
              About
            </NavLink>
            <li
              className="underline-one"
              onMouseEnter={() => setProductMenuOpen(true)}
              onMouseLeave={() => setProductMenuOpen(false)}
            >
              Products
              {productsMenuopen && (
                <ul className="submenu">
                  <li>
                    <NavLink to="/product1">PVD Louver Panels</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product2">PVD Metal Sheets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product3">Textured Sheets</NavLink>
                  </li>
                  <li>
                    <NavLink to="/product4">Stainless Steel Decorative Profiles</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <NavLink to="/Infrastructure" className="underline-one">
              Infrastructure
            </NavLink>
            <NavLink to="/contact" className="underline-one">
              Contact Us
            </NavLink>
          </ul>
          <div className="search-container">
            <Button className="my-button">Read More</Button>

          </div>
        </div>
      </div>
    

    </header>
  );
}

export default BottomNavbar;
