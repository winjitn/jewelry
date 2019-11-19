import React from "react";
import "./NavBar.css";

const headings = [
  { Heading: "Jewelry", List: [] },
  { Heading: "About Us", List: [] },
  { Heading: "Contact Us", List: [] }
];

export const NavBar = () => {
  const rendered = headings.map(heading => (
    <span className="ctn">
      <span className="item">{heading.Heading}</span>
    </span>
  ));
  return (
    <div className="fixed nav">
      <span className="logo">Benson Jewelry</span>
      <span className="nav-list">{rendered}</span>
    </div>
  );
};
