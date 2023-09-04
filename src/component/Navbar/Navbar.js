import React, { useState } from "react";
import "./navbar.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import LanguageIcon from "@mui/icons-material/Language";
import { Stack, Typography } from "@mui/material";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [bar, setBar] = useState(false);
  return (
    <header id="header_main">
      <div className="navbar ">


        <div className="headerbottom">
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

          <div style={{
            "display": 'flex',
            "justifyContent": "center", /* Horizontally center the content */
            "alignItems": "center", /* Vertically center the content */
            "height": "100vh",
            "marginLeft": "80px"
          }}>
            <a role="link" className="logo" tabIndex="-1">
              <img
                src="	https://metalcraftstudio.com/wp-content/uploads/2023/05/images-removebg-preview.webp"
                alt="UCS"
                style={{
                  "maxWidth": "123px",
                  "height": "auto",
                  "overflowClipMargin": "contentBox"
                }}
              ></img>
            </a>
          </div>

          <Stack direction={"row"} gap={2} style={{ marginLeft: "21rem" }}>
            <FaPhoneAlt style={{ backgroundColor: "#e1b654", height: "35px", width: "35px", marginTop: "10px" }} />
            <Stack direction={"column"} gap={0.5}>
              <Typography style={{ fontWeight: "bold" }}>+91 87509 99128</Typography>
              <Typography>+91 87509 99128</Typography>
            </Stack>
            <Typography className="divider" ></Typography>
            <AiFillClockCircle style={{ backgroundColor: "#e1b654", height: "35px", width: "35px", marginTop: "10px", marginLeft: "20px" }} />
            <Stack direction={"column"} gap={0.5}>
              <Typography style={{ fontWeight: "bold" }}>7:30 AM - 7:30 PM
              </Typography>
              <Typography>Monday to Saturday
              </Typography>
            </Stack>
            <FacebookIcon style={{
              position: "relative",
              height: "38px",
              width: "38px",
              marginTop: "10px",
              marginLeft: "20px",
              cursor: "pointer",
              backgroundImage: "linear-gradient(to right, #e1b654 50%, transparent 50%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "-100% 0",
              transition: "background-position 1s ease-in-out"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = "100% 0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = "-100% 0";
              }}

            />
            <TwitterIcon style={{
              position: "relative",
              height: "38px",
              width: "38px",
              marginTop: "10px",
              marginLeft: "10px",
              cursor: "pointer",
              backgroundImage: "linear-gradient(to right, #e1b654 50%, transparent 50%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "-100% 0",
              transition: "background-position 1s ease-in-out"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = "100% 0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = "-100% 0";
              }} />

            <LinkedInIcon style={{
              position: "relative",
              height: "38px",
              width: "38px",
              marginTop: "10px",
              marginLeft: "10px",
              cursor: "pointer",
              backgroundImage: "linear-gradient(to right, #e1b654 50%, transparent 50%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "-100% 0",
              transition: "background-position 1s ease-in-out"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = "100% 0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = "-100% 0";
              }} />
            <InstagramIcon style={{
              position: "relative",
              height: "38px",
              width: "38px",
              marginTop: "10px",
              marginLeft: "10px",
              cursor: "pointer",
              backgroundImage: "linear-gradient(to right, #e1b654 50%, transparent 50%)",
              backgroundSize: "200% 100%",
              backgroundPosition: "-100% 0",
              transition: "background-position 1s ease-in-out"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundPosition = "100% 0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundPosition = "-100% 0";
              }} />
          </Stack>

          {/* <ul className="dropdown" id="navbar_items">
            <NavLink to="/insights" className="underline-one">
              insights
            </NavLink>
            <NavLink to="industries" className="underline-one">
              Industries
            </NavLink>
            <NavLink to="/services" className="underline-one">
              services
            </NavLink>
            <NavLink to="/career" className="underline-one">
              career
            </NavLink>
            <NavLink to="/news" className="underline-one">
              news
            </NavLink>
            <NavLink to="/about" className="underline-one">
              about us
            </NavLink>
          </ul>
          <div className="search-container">
            {bar && (
              <input
                type="search"
                placeholder="search "
                name=""
                id="search-box"
              ></input>
            )}
            <i
              className="fa fa-search"
              onClick={() => {
                if (!bar) setBar(true);
                else setBar(false)
              }}
            ></i>

          </div> */}
        </div>
      </div>
    </header >


  );
};

export default Navbar;