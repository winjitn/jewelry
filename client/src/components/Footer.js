import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer ash" style={{ position: "relative", zIndex: "1" }}>
      <div className="ui container">
        <div className="ui grid">
          <div className="eight wide column">
            <h2 className="ui header">
              <i className="location arrow icon" />
              <div className="content lighter">Placeholder</div>
            </h2>
            <h3 className="lighter">Placeholder Placeholder Placeholder</h3>
            <h4 className="lighter">
              111/1-1 Placeholder Road, Placeholder, Placeholder, Placeholder
              10000, Placeholder
            </h4>
            <h4 className="lighter">
              <i className="phone icon" />
              Tel: +000-000-0000 <i className="envelope icon" />
              Email: Placeholder@email.com
            </h4>
          </div>
          <div className="eight wide column">
            <h2 className="ui header">
              <i className="building icon" />
              <div className="content lighter">Placeholder</div>
            </h2>
            <h3 className="lighter">Placeholder Placeholder</h3>
            <h4 className="lighter">
              11, 1111 Moo 1, Soi Placeholder 1, Placeholder Road, Placeholder,
              Placeholder Placeholder, 10000 Placeholder
            </h4>
            <h4 className="lighter">
              <i className="phone icon" />
              Tel: +000-000-0000
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
