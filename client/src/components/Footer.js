import React from "react";
import { Grid } from "semantic-ui-react";

import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="footer ash" style={{ position: "relative", zIndex: "1" }}>
        <div className="ui container" style={{ zIndex: "3" }}>
          <Grid stackable columns={2}>
            <Grid.Column className="footer-column">
              <h3 className="ui header">
                <div className="content lighter">Placeholder</div>
              </h3>
              <h4 className="lighter">Placeholder Placeholder Placeholder</h4>
              <h5 className="lighter">
                111/1-1 Placeholder Road, Placeholder, Placeholder, Placeholder
                10000, Placeholder
              </h5>
              <h5 className="lighter">
                Tel: +000-000-0000<span>&ensp;</span>Email:
                Placeholder@email.com
              </h5>
            </Grid.Column>
            <Grid.Column className="footer-column">
              <h3 className="ui header">
                <div className="content lighter">Placeholder</div>
              </h3>
              <h4 className="lighter">Placeholder Placeholder</h4>
              <h5 className="lighter">
                11, 1111 Moo 1, Soi Placeholder 1, Placeholder Road,
                Placeholder, Placeholder Placeholder, 10000 Placeholder
              </h5>
              <h5 className="lighter">Tel: +000-000-0000</h5>
            </Grid.Column>
          </Grid>
        </div>
      </div>
      <div id="copyright">©2020 Benson Jewelry. All Rights Reserved.</div>
    </div>
  );
};
