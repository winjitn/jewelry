import React from "react";
import banner from "../pics/banner_main.jpg";
import "./Home.css";
import one from "../pics/1.jpg";
import two from "../pics/2.jpg";
import three from "../pics/3.jpg";
import four from "../pics/4.jpg";
import { Timeline } from "./Timeline";
import { Footer } from "./Footer";
import tif from "../pics/tif.jpg";

const imgArray = [
  { img: one, tag: "NEW ARRIVALS" },
  { img: two, tag: "NECKLACES" },
  { img: three, tag: "BRACELETS" },
  { img: four, tag: "RINGS" }
];

export const Home = () => {
  return (
    <div>
      <img src={banner} alt={banner} style={{ maxWidth: "100%" }} />
      <div className="ui container discover" style={{ height: "710px" }}>
        <div className="ui grid" style={{ margin: "0" }}>
          <div className="six wide column dis">
            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "140px"
              }}
            >
              Hand-finished pieces for every style
            </p>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold"
              }}
            >
              Discover a world of jewelry
            </p>
            <button className="ui pink basic button" style={{ width: "160px" }}>
              Products
            </button>
          </div>
          <div className="ten wide column dis">
            {imgArray.map(({ img, tag }) => (
              <div className="img-ctn">
                <img src={img} alt={img} className="img" />
                <div className="img-tag">{tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="middle">
        <img src={tif} className="bg" />
        <div className="middle-text">
          <div className="text text-big">Discover new Pandora</div>
          <div className="text text-mid">
            This collection was born from a fascination with the timelessness of
            the universe.
          </div>
          <div
            style={{
              padding: "5px 10px",
              border: "solid 1px black",
              margin: "auto",
              width: "20%",
              marginTop: "20px"
            }}
          >
            <a id="btn" className="text" href="">
              Discover
            </a>
          </div>
        </div>
      </div>
      <Timeline />
      <Footer />
    </div>
  );
};
