import React from "react";
import { Grid, Image } from "semantic-ui-react";

import "./Home.css";
import banner from "../pics/banner_main.jpg";
import one from "../pics/1.jpg";
import two from "../pics/2.jpg";
import three from "../pics/3.jpg";
import four from "../pics/4.jpg";

import pc1 from "../pics/pc1.png";
import pc2 from "../pics/pc2.png";
import pc3 from "../pics/pc3.png";
import pc4 from "../pics/pc4.png";
import pc5 from "../pics/pc5.png";
import pc6 from "../pics/pc6.png";

class Home extends React.Component {
  wheelArray = [
    { img: pc1, tag: "Heart" },
    { img: pc2, tag: "Ball" },
    { img: pc3, tag: "Ring" },
    { img: pc4, tag: "Chain" },
    { img: pc5, tag: "Necklace" },
    { img: pc6, tag: "Earring" }
  ];

  componentDidMount() {
    setTimeout(() => {
      this.props.load(false);
    }, 100);
  }
  componentWillUnmount() {
    this.props.load(true);
  }

  wheel(e) {
    const items = document.querySelectorAll(".wheel-img.w-active");
    const labels = document.querySelectorAll(".l-active");

    const displayN = window.innerWidth <= 767 ? 1 : 3;

    for (var i = 0; i < items.length; i++) {
      items[i].classList.replace("w-active", "w-disable");

      labels[i].classList.remove("l-active");

      const newLabel =
        labels[i].nextElementSibling === null
          ? labels[i].previousElementSibling
          : labels[i].nextElementSibling;
      const newItem =
        items[i].previousElementSibling === null
          ? items[i].nextElementSibling
          : items[i].previousElementSibling;

      const next =
        (Number(items[i].getAttribute("current")) +
          (e.classList.contains("left") ? 6 - displayN : displayN)) %
        6;
      newLabel.innerHTML = this.wheelArray[next].tag;
      setTimeout(() => {
        newLabel.classList.add("l-active");
      }, 500);

      newItem.setAttribute("src", this.wheelArray[next].img);
      newItem.setAttribute("current", next);
      newItem.classList.add("w-active");
    }
  }

  wheelEnd(e) {
    e.classList.remove("w-disable", "r");
  }

  render() {
    return (
      <div className="home-ctn">
        <div className="banner-ctn">
          <img alt="banner" src={banner} className="banner" />
        </div>
        <div className="body1-ctn">
          <div className="ui container">
            <Grid stackable columns={2}>
              <Grid.Column className="body-inner-ctn-wrapper" width={6}>
                <div className="body1-inner-ctn">
                  <div className="text1">
                    Hand-finished pieces for every style
                  </div>
                  <div className="text2">Discover a world of jewelry</div>
                  <button
                    className="ui pink basic button"
                    style={{ fontWeight: "lighter" }}
                  >
                    Get in touch
                  </button>
                </div>
              </Grid.Column>
              <Grid.Column width={10}>
                <Grid className="body-inner-ctn-wrapper">
                  <Grid.Column item="bracelets" width={5}>
                    <Image src={one} />
                  </Grid.Column>
                  <Grid.Column item="necklaces" width={5}>
                    <Image src={two} />
                  </Grid.Column>
                  <Grid.Column item="necklaces" width={5}>
                    <Image src={two} />
                  </Grid.Column>
                  <Grid.Column item="bangles" width={5}>
                    <Image item="bangles" src={three} />
                  </Grid.Column>
                  <Grid.Column item="rings" width={5}>
                    <Image src={four} />
                  </Grid.Column>
                  <Grid.Column item="rings" width={5}>
                    <Image src={four} />
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid>
          </div>
        </div>
        <div className="carousel">
          <div className="ui container">
            <div className="text2 text-centered">The Collection</div>
            <div className="text1 text-centered">
              Browse top selling products.
            </div>
            <div className="wheel">
              <div className="wheel-nav">
                <button
                  className="wheel-btn"
                  onClick={e => this.wheel(e.target)}
                >
                  <i className="chevron left icon large" />
                </button>
              </div>
              <div className="wheel-item wheel-res">
                <img
                  alt="wheel"
                  className="wheel-img w-active"
                  src={this.wheelArray[0].img}
                  current={0}
                  onTransitionEnd={e => this.wheelEnd(e.target)}
                />
                <img
                  alt="wheel"
                  className="wheel-img"
                  src={this.wheelArray[0].img}
                  onTransitionEnd={e => this.wheelEnd(e.target)}
                />
                <div className="wheel-item-label l-active">
                  {this.wheelArray[0].tag}
                </div>
                <div className="wheel-item-label">{this.wheelArray[0].tag}</div>
              </div>
              <div className="wheel-item">
                <img
                  alt="wheel"
                  className="wheel-img w-active"
                  src={this.wheelArray[1].img}
                  current={1}
                  onTransitionEnd={e => this.wheelEnd(e.target)}
                />
                <img
                  alt="wheel"
                  className="wheel-img"
                  src={this.wheelArray[0].img}
                  onTransitionEnd={e => this.wheelEnd(e.target)}
                />
                <div className="wheel-item-label l-active">
                  {this.wheelArray[1].tag}
                </div>
                <div className="wheel-item-label">{this.wheelArray[1].tag}</div>
              </div>
              <div className="wheel-item wheel-res">
                <img
                  alt="wheel"
                  className="wheel-img w-active"
                  src={this.wheelArray[2].img}
                  current={2}
                  onTransitionEnd={e => this.wheelEnd(e.target)}
                />
                <img
                  alt="wheel"
                  className="wheel-img"
                  src={this.wheelArray[0].img}
                  onTransitionEnd={e => this.wheelEnd(e.target)}
                />
                <div className="wheel-item-label l-active">
                  {this.wheelArray[2].tag}
                </div>
                <div className="wheel-item-label">{this.wheelArray[2].tag}</div>
              </div>
              <div className="wheel-nav">
                <button
                  className="wheel-btn"
                  onClick={e => this.wheel(e.target)}
                >
                  <i className="chevron right icon large" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
