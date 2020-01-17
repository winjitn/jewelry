import React from "react";
import banner from "../pics/banner_main.jpg";
import "./Home.css";
import one from "../pics/1.jpg";
import two from "../pics/2.jpg";
import three from "../pics/3.jpg";
import four from "../pics/4.jpg";
import { Timeline } from "./Timeline";
import tif from "../pics/tif.jpg";

const imgArray = [
  { img: one, tag: "NEW ARRIVALS" },
  { img: two, tag: "NECKLACES" },
  { img: three, tag: "BRACELETS" },
  { img: four, tag: "RINGS" }
];

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.load(false);
    }, 1000);
  }
  componentWillUnmount() {
    this.props.load(true);
  }
  render() {
    return (
      <div>
        <div className="banner" style={{ position: "relative" }}>
          <img src={banner} alt={banner} className="bg" />
          <div
            style={{
              position: "absolute",
              width: "15%",
              bottom: "40%",
              right: "8%"
            }}
          >
            <p className="head1">consectetur adipiscing elit</p>
            <p className="head-label">
              Morbi pulvinar turpis sed placerat ultrices. Aenean in tortor
              convallis, eleifend libero eget, varius justo
            </p>
          </div>
        </div>
        <div className="ui container discover" style={{ height: "710px" }}>
          <div className="ui grid" style={{ margin: "0" }}>
            <div className="six wide column dis">
              <p
                className="head-label"
                style={{
                  fontWeight: "bold",
                  marginTop: "140px"
                }}
              >
                Hand-finished pieces for every style
              </p>
              <p
                className="head1"
                style={{
                  fontWeight: "bold"
                }}
              >
                Discover a world of jewelry
              </p>
              <button
                className="ui pink basic button"
                style={{ width: "160px" }}
              >
                Products
              </button>
            </div>
            <div className="ten wide column dis">
              {imgArray.map(({ img, tag }) => (
                <div key={tag} className="img-ctn">
                  <img src={img} alt={img} className="img" />
                  <div className="img-tag">{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="middle">
          <img src={tif} alt={tif} className="bg" />
          <div className="middle-text">
            <div className="text text-big">Discover new Pandora</div>
            <div className="text text-mid">
              This collection was born from a fascination with the timelessness
              of the universe.
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
              <a id="btn" className="text" href="/">
                Discover
              </a>
            </div>
          </div>
        </div>
        <Timeline />
      </div>
    );
  }
}

export default Home;
