
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom"; // Import useLocation and Link from react-router-dom
import Logo from "../assets/logo-white.png";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation(); // Use location hook to get the current route
  
  // Close the navbar when clicking outside
  useEffect(() => {
    const html = document.querySelector("html");
    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar") && isNavOpen) { // Prevent closing if nav is already closed
        setIsNavOpen(false);
      }
    };

    html.addEventListener("click", handleClickOutside);
    return () => html.removeEventListener("click", handleClickOutside);
  }, [isNavOpen]);

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    if (isNavOpen) {
      setIsNavOpen(false); // Close navbar on link click in mobile view
    }
  };

  return (
    <Container state={isNavOpen ? 1 : 0} className="navbar">
      <div className="brand">
        <img src={Logo} alt="logo" />
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : "show"}`}>
        <ul>
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/destination" className={isActive("/destination") ? "active" : ""} onClick={handleLinkClick}>
              Trekking
            </Link>
          </li>
          <li>
            <Link to="/expedition" className={isActive("/expedition") ? "active" : ""} onClick={handleLinkClick}>
              Expedition
            </Link>
          </li>
          <li>
            <Link to="/tour" className={isActive("/tour") ? "active" : ""} onClick={handleLinkClick}>
              Tour
            </Link>
          </li>
          <li>
            <Link to="/tracking" className={isActive("/tracking") ? "active" : ""} onClick={handleLinkClick}>
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="account-info">
        <div className="account">

          <span className="book">Book Now  </span>
        </div>

      </div>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b5e20; /* Dark green background for the navbar */
  border-radius: 20px;
  padding: 1rem; /* Space around content */
  position: relative;
  color: white; /* Set text color to white by default */

  .book {
  
  background-color:white;
  color:green;
  padding: 8px;
  border-radius:5px;
  margin-right:20px;
  margin-left:10px;
  font-size:15px;
  

  }
  .brand {
    img {
      cursor: pointer;
    }
  }

  .toggle {
    display: none;
  }

  .links {
    ul {
      display: flex;
      gap: 3rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          color: white;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.5rem 1rem;
          transition: all 0.3s ease;
          &:hover {
            background-color: white;
            color: #1b5e20; /* Green color on hover */
            border-radius: 4px;
          }
          &.active {
            color: #1b5e20; /* Green for active link */
            font-weight: bold; /* Bold font for active link */
            background-color: white; /* Background color for active state */
            border-radius: 4px; /* Rounded corners for active link */
          }
        }
      }
    }
  }

  .account-info {
    display: flex;
    gap: 2rem;
    .account {
      display: flex;
      gap: 0.5rem;
      cursor: pointer;
    }
    .search {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: relative;
    padding: 1rem 0.5rem;
    z-index: 10;

    .account-info {
      display: none;
    }

    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .toggle {
      padding-right: 1rem;
      display: block;
      z-index: 1;
    }

    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }

    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "60%" : "0%")};
      height: 100vh;
      background-color: var(--primary-color); /* Background color for mobile view */
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;

      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;

        li {
          a {
            color: white;
          }
        }
      }
    }
  }
`;










