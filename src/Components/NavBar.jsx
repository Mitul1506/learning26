import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    backgroundColor: scrolled ? "rgba(20, 20, 20, 0.95)" : "rgba(20, 20, 20, 0.8)",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
    transition: "all 0.3s ease",
    borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none"
  };

  const logoStyle = {
    color: "#e50914",
    fontSize: "32px",
    fontWeight: "bold",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    textDecoration: "none",
    letterSpacing: "-1px"
  };

  const navLinksStyle = {
    display: "flex",
    gap: "40px",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    padding: 0
  };

  const navLinkStyle = {
    color: "rgba(255, 255, 255, 0.9)",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    padding: "8px 0",
    position: "relative",
    transition: "all 0.3s ease"
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    color: "#ffffff",
    fontWeight: "600"
  };

  const activeIndicatorStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    backgroundColor: "#e50914",
    borderRadius: "2px"
  };

  const loginButtonStyle = {
    backgroundColor: "#e50914",
    color: "white",
    border: "none",
    padding: "10px 25px",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    display: "inline-block"
  };

  const activeLoginButtonStyle = {
    ...loginButtonStyle,
    backgroundColor: "#f40612",
    boxShadow: "0 0 10px rgba(229, 9, 20, 0.5)"
  };

  return (
    <nav style={navbarStyle}>
      {/* Netflix Logo */}
      <Link to="/" style={logoStyle}>
        NETFLIX
      </Link>

      {/* Navigation Links - Side by side */}
      <ul style={navLinksStyle}>
        <li>
          <Link 
            to="/netflixhome" 
            style={location.pathname === "/netflixhome" ? activeNavLinkStyle : navLinkStyle}
          >
            Home
            {location.pathname === "/netflixhome" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/netflixmovies" 
            style={location.pathname === "/netflixmovies" ? activeNavLinkStyle : navLinkStyle}
          >
            Movies
            {location.pathname === "/netflixmovies" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/netflixshows" 
            style={location.pathname === "/netflixshows" ? activeNavLinkStyle : navLinkStyle}
          >
            TV Shows
            {location.pathname === "/netflixshows" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            style={location.pathname === "/about" ? activeNavLinkStyle : navLinkStyle}
          >
            About
            {location.pathname === "/about" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/payment" 
            style={location.pathname === "/payment" ? activeNavLinkStyle : navLinkStyle}
          >
            Payment
            {location.pathname === "/payment" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/login" 
            style={location.pathname === "/login" ? activeNavLinkStyle : navLinkStyle}
          >
            Series
            {location.pathname === "/login" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
      </ul>
    </nav>
  );
};