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
  const navEle = document.querySelector(".nav-child");
  window.onscroll = function() {
    if (window.scrollY >= 100) {
      myNav.classList.add("nav-colored");
      navEle.classList.add("nav-child-colored");
    } else {
      myNav.classList.remove("nav-colored");
      navEle.classList.remove("nav-child-colored");
    }
  };
};

const NavBar = props => {
  useEffect(() => {
    navScroll();
  }, []);
  const rendered = headings.map(heading => (
    <span key={heading.Heading} className="ctn">
      <NavLink to={heading.Link} className={`itemNav ${heading.class}`}>
        {heading.Heading}
      </NavLink>
    </span>
  ));
  return (
    <nav id="nav" className="nav-scroll nav">
      <div className="ui container">
        <div className="nav-child">
          <Link to="/" className="logo">
            Company Company
          </Link>
          <span className="nav-list" style={{ color: "white" }}>
            {rendered}
            {renderLogin(props)}
          </span>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(NavBar);
