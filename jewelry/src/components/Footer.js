import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="ui container">
        <div className="ui grid">
          <div className="eight wide column">
            <h2 className="ui header">
              <i className="location arrow icon" />
              <div className="content">Headquarters</div>
            </h2>
            <h3>Benson Jewelry Building</h3>
            <h4>
              311/2-8 Surawong Road, Suriyawong, Bangrak, Bangkok 10500,
              Thailand
            </h4>
            <h4>
              <i className="phone icon" />
              Tel: +662-635-7500 <i className="envelope icon" />
              Email: sales@bensonjewelry.com
            </h4>
          </div>
          <div className="eight wide column">
            <h2 className="ui header">
              <i className="building icon" />
              <div className="content">Manufacturing Center</div>
            </h2>
            <h3>Benson Jewelry Co. Ltd.</h3>
            <h4>
              18, 18/9 Moo 8, Soi Tessaban 2, Phetkasem Road, Omyai, Sampran
              Nakornpathom, 73160 Thailand
            </h4>
            <h4>
              <i className="phone icon" />
              Tel: +662-813-5577
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
