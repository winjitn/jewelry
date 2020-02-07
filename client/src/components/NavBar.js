import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./NavBar.css";

const headings = [
  { Heading: "About Us", class: "about", Link: "/about" },
  { Heading: "Contact Us", class: "contact", Link: "contact" }
];

const purge = props => {
  // props.load(true);
  // props.persistor.purge();
};

const renderLogin = props => {
  switch (props.auth) {
    case null: {
      return;
    }
    case false: {
      return (
        <span className="ctn">
          <NavLink
            activeClassName="active"
            className="itemNav login"
            to="/login"
          >
            Login
          </NavLink>
        </span>
      );
    }
    default: {
      return [
        <span className="ctn" key="1">
          <NavLink className="itemNav products" to="/products">
            Showroom
          </NavLink>
        </span>,
        <span className="ctn" key="2">
          <a onClick={purge(props)} className="itemNav" href="/api/logout">
            Logout
          </a>
        </span>
      ];
    }
  }
};

const navScroll = () => {
  const myNav = document.querySelector(".nav-scroll");
  window.onscroll = function() {
    if (window.scrollY >= 100) {
      myNav.classList.add("nav-colored");
    } else {
      myNav.classList.remove("nav-colored");
    }
  };

  const burger = document.querySelector(".nav-burger");
  window.onresize = function() {
    if (window.innerWidth > 767) burger.classList.remove("b-active");
  };
};

const burgerDropdown = e => {
  if (e.classList.contains("b-active")) e.classList.toggle("menu-active");
  else
    setTimeout(() => {
      e.classList.toggle("menu-active");
    }, 800);

  e.classList.toggle("b-active");
};

const NavBar = props => {
  useEffect(() => {
    navScroll();
  }, []);
  const rendered = headings.map(heading => (
    <span key={heading.Heading} className="ctn">
      {/* <NavLink to={heading.Link} className={`itemNav ${heading.class}`}> */}
      <NavLink to={heading.Link} className="itemNav">
        {heading.Heading}
      </NavLink>
    </span>
  ));
  return (
    <nav className="nav-scroll nav">
      <div className="ui container nav-ctn">
        <Link to="/" className="logo">
          Company Company
        </Link>
        <div className="nav-list">
          {rendered}
          {renderLogin(props)}
        </div>
        <div
          className="nav-burger"
          onClick={e => burgerDropdown(e.currentTarget)}
        >
          <div id="burger-1"></div>
          <div id="burger-2"></div>
          <div id="burger-3"></div>
          <div id="burger-dropdown">
            <div id="burger-menu">
              {rendered}
              {renderLogin(props)}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(NavBar);
