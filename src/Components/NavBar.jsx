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
  alignItems: "center",
  padding: "12px 30px",
  backgroundColor: scrolled
    ? "rgba(20, 20, 20, 0.95)"
    : "rgba(20, 20, 20, 0.85)",
  backdropFilter: "blur(10px)",
  zIndex: 1000,
  transition: "all 0.3s ease",
  borderBottom: "1px solid rgba(255,255,255,0.1)"
};

  const logoStyle = {
  color: "#e50914",
  fontSize: "22px",
  fontWeight: "bold",
  textDecoration: "none",
  letterSpacing: "-1px",
  marginRight: "30px"
};


 const navLinksStyle = {
  display: "flex",
  gap: "22px",
  alignItems: "center",
  listStyle: "none",
  margin: 0,
  padding: 0,
  overflowX: "hidden",
  whiteSpace: "nowrap"
};




 const navLinkStyle = {
  color: "rgba(255, 255, 255, 0.85)",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  padding: "6px 0",
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
  bottom: "-6px",
  left: 0,
  right: 0,
  height: "2px",
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
       {/* <li>
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
            to="/series" 
            style={location.pathname === "/series" ? activeNavLinkStyle : navLinkStyle}
          >
            Series
            {location.pathname === "/series" && <span style={activeIndicatorStyle} />}
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
            to="/about" 
            style={location.pathname === "/about" ? activeNavLinkStyle : navLinkStyle}
          >
            About
            {location.pathname === "/about" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/Teams" 
            style={location.pathname === "/Teams" ? activeNavLinkStyle : navLinkStyle}
          >
            Teams
            {location.pathname === "/Teams" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/UseState1" 
            style={location.pathname === "/UseState1" ? activeNavLinkStyle : navLinkStyle}
          >
            UseState1
            {location.pathname === "/UseState1" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
         <li>
          <Link 
            to="/UseState2" 
            style={location.pathname === "/UseState2" ? activeNavLinkStyle : navLinkStyle}
          >
            UseState2
            {location.pathname === "/UseState2" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
         <li>
          <Link 
            to="/UseState3" 
            style={location.pathname === "/UseState3" ? activeNavLinkStyle : navLinkStyle}
          >
            UseState3
            {location.pathname === "/UseState3" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        */}
        <li>
          <Link 
            to="/FunctionDemo" 
            style={location.pathname === "/FunctionDemo" ? activeNavLinkStyle : navLinkStyle}
          >
            FunctionDemo
            {location.pathname === "/FunctionDemo" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
         <li>
          <Link 
            to="/Employees" 
            style={location.pathname === "/Employees" ? activeNavLinkStyle : navLinkStyle}
          >
            Employees
            {location.pathname === "/Employees" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
         <li>
          <Link 
            to="/InputDemo" 
            style={location.pathname === "/InputDemo" ? activeNavLinkStyle : navLinkStyle}
          >
            InputDemo
            {location.pathname === "/InputDemo" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
         <li>
          <Link 
            to="/FormDemo1" 
            style={location.pathname === "/FormDemo1" ? activeNavLinkStyle : navLinkStyle}
          >
            FormDemo1
            {location.pathname === "/FormDemo1" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/FormDemo2" 
            style={location.pathname === "/FormDemo2" ? activeNavLinkStyle : navLinkStyle}
          >
            FormDemo2
            {location.pathname === "/FormDemo2" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/FormDemo3" 
            style={location.pathname === "/FormDemo3" ? activeNavLinkStyle : navLinkStyle}
          >
            FormDemo3
            {location.pathname === "/FormDemo3" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/FormDemo4" 
            style={location.pathname === "/FormDemo4" ? activeNavLinkStyle : navLinkStyle}
          >
            FormDemo4
            {location.pathname === "/FormDemo4" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
         <li>
          <Link 
            to="/FormDemo5" 
            style={location.pathname === "/FormDemo5" ? activeNavLinkStyle : navLinkStyle}
          >
            FormDemo5
            {location.pathname === "/FormDemo5" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/FormWatch" 
            style={location.pathname === "/FormWatch" ? activeNavLinkStyle : navLinkStyle}
          >
            FormWatch
            {location.pathname === "/FormWatch" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/ApiDemo1" 
            style={location.pathname === "/ApiDemo1" ? activeNavLinkStyle : navLinkStyle}
          >
            ApiDemo1
            {location.pathname === "/ApiDemo1" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/ApiDemo2" 
            style={location.pathname === "/ApiDemo2" ? activeNavLinkStyle : navLinkStyle}
          >
            ApiDemo2
            {location.pathname === "/ApiDemo2" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        <li>
          <Link 
            to="/ApiDemo3" 
            style={location.pathname === "/ApiDemo3" ? activeNavLinkStyle : navLinkStyle}
          >
            ApiDemo3
            {location.pathname === "/ApiDemo3" && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
         <li>
          <Link 
            to="/ApiDemo4" 
            style={location.pathname === "/ApiDemo4" ? activeNavLinkStyle : navLinkStyle}
          >
            ApiDemo4
            {location.pathname === "/ApiDemo41  " && <span style={activeIndicatorStyle} />}
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};