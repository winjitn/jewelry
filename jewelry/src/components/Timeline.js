import React from "react";
import "./Timeline.css";
import ven from "../pics/ven.jpeg";
import bkk from "../pics/bkk.jpg";
import hk from "../pics/hk.jpg";
import hks from "../pics/hks.png";
import jck from "../pics/jck.png";

export const Timeline = props => {
  return (
    <section id="timeline">
      <h1>Events</h1>
      <p className="leader"></p>
      <div className="demo-card-wrapper">
        <div className="demo-card demo-card--step1">
          <div className="head">
            <div className="number-box">
              <span>01</span>
            </div>
            <h2>
              <span className="small">January</span> Vicenzaoro
            </h2>
          </div>
          <div className="body">
            <img src={ven} alt="Graphic" />
          </div>
        </div>

        <div className="demo-card demo-card--step2">
          <div className="head">
            <div className="number-box">
              <span>02</span>
            </div>
            <h2>
              <span className="small">February</span> Bangkok Gems and Jewelry
              Fair
            </h2>
          </div>
          <div className="body">
            <img src={bkk} alt="Graphic" />
          </div>
        </div>

        <div className="demo-card demo-card--step3">
          <div className="head">
            <div className="number-box">
              <span>03</span>
            </div>
            <h2>
              <span className="small">March</span> HK International Jewellery
              Show
            </h2>
          </div>
          <div className="body">
            <img src={hk} alt="Graphic" />
          </div>
        </div>

        <div className="demo-card demo-card--step4">
          <div className="head">
            <div className="number-box">
              <span>06</span>
            </div>
            <h2>
              <span className="small">June</span> JCK Las Vegas
            </h2>
          </div>
          <div className="body">
            <img src={jck} alt="Graphic" />
          </div>
        </div>

        <div className="demo-card demo-card--step5">
          <div className="head">
            <div className="number-box">
              <span>09</span>
            </div>
            <h2>
              <span className="small">September</span> Hong Kong Jewellery & Gem
              Fair
            </h2>
          </div>
          <div className="body">
            <img src={hks} alt="Graphic" />
          </div>
        </div>
      </div>
    </section>
  );
};
