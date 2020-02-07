import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
  eventsArray = [
    {
      img: "ven.jpeg",
      title: "Vicenzaoro",
      desc:
        "Morbi pulvinar turpis sed placerat ultrices. Aenean in tortor convallis"
    },
    {
      img: "bkk.jpg",
      title: "Bangkok Gems and Jewelry Fair",
      desc:
        "Morbi pulvinar turpis sed placerat ultrices. Aenean in tortor convallis"
    },
    {
      img: "hks.png",
      title: "HK International Jewellery Show",
      desc:
        "Morbi pulvinar turpis sed placerat ultrices. Aenean in tortor convallis"
    },
    {
      img: "jck.png",
      title: "JCK Las Vegas",
      desc:
        "Morbi pulvinar turpis sed placerat ultrices. Aenean in tortor convallis"
    },
    {
      img: "hk.jpg",
      title: "Hong Kong Jewellery & Gem",
      desc:
        "Morbi pulvinar turpis sed placerat ultrices. Aenean in tortor convallis"
    }
  ];

  wheelFreeze = false;
  loadedObj = 0;

  async wheel(e) {
    if (this.wheelFreeze === false) {
      this.wheelFreeze = true;
      const obj = this;
      setTimeout(() => {
        obj.wheelFreeze = false;
      }, 1000);

      const items = document.querySelectorAll(
        ".wheel-img.l-active, .wheel-img.r-active"
      );
      const labels = document.querySelectorAll(".letter-active");
      const side = e.getAttribute("side");

      const displayN = window.innerWidth <= 767 ? 1 : 3;

      for (var i = 0; i < items.length; i++) {
        if (side === "left") {
          if (items[i].classList.contains("l-active"))
            items[i].classList.replace("l-active", "l-disable");
          else items[i].classList.replace("r-active", "l-disable");
        } else {
          if (items[i].classList.contains("l-active"))
            items[i].classList.replace("l-active", "r-disable");
          else items[i].classList.replace("r-active", "r-disable");
        }

        labels[i].classList.remove("letter-active");

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
            (side === "left" ? 6 - displayN : displayN)) %
          6;
        await newItem.setAttribute("src", this.wheelArray[next].img);
        newLabel.innerHTML = this.wheelArray[next].tag;
        setTimeout(() => {
          newLabel.classList.add("letter-active");
        }, 500);

        newItem.setAttribute("current", next);

        if (side === "left") newItem.classList.add("l-active");
        else newItem.classList.add("r-active");
      }
    }
  }

  wheelEnd(e) {
    e.classList.remove("l-disable", "r-disable");
  }

  load(e) {
    this.loadedObj++;

    if (this.loadedObj >= 16) {
      document.querySelector(".home-ctn").style.opacity = "1";
    }
  }

  render() {
    return (
      <div className="home-ctn" onLoad={e => this.load(e.target)}>
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
                  <Link to="/contact">
                    <button
                      className="ui pink basic button"
                      style={{ fontWeight: "lighter" }}
                    >
                      Get in touch
                    </button>
                  </Link>
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
                  onClick={e => this.wheel(e.currentTarget)}
                  side="left"
                >
                  <i className="chevron left icon large" />
                </button>
              </div>
              <div className="wheel-item wheel-res">
                <img
                  alt="wheel"
                  className="wheel-img l-active"
                  src={this.wheelArray[0].img}
                  current={0}
                  onAnimationEnd={e => this.wheelEnd(e.target)}
                />
                <img
                  alt="wheel"
                  className="wheel-img"
                  src={this.wheelArray[0].img}
                  onAnimationEnd={e => this.wheelEnd(e.target)}
                />
                <div className="wheel-item-label letter-active">
                  {this.wheelArray[0].tag}
                </div>
                <div className="wheel-item-label">{this.wheelArray[0].tag}</div>
              </div>
              <div className="wheel-item">
                <img
                  alt="wheel"
                  className="wheel-img l-active"
                  src={this.wheelArray[1].img}
                  current={1}
                  onAnimationEnd={e => this.wheelEnd(e.target)}
                />
                <img
                  alt="wheel"
                  className="wheel-img"
                  src={this.wheelArray[0].img}
                  onAnimationEnd={e => this.wheelEnd(e.target)}
                />
                <div className="wheel-item-label letter-active">
                  {this.wheelArray[1].tag}
                </div>
                <div className="wheel-item-label">{this.wheelArray[1].tag}</div>
              </div>
              <div className="wheel-item wheel-res">
                <img
                  alt="wheel"
                  className="wheel-img l-active"
                  src={this.wheelArray[2].img}
                  current={2}
                  onAnimationEnd={e => this.wheelEnd(e.target)}
                />
                <img
                  alt="wheel"
                  className="wheel-img"
                  src={this.wheelArray[0].img}
                  onAnimationEnd={e => this.wheelEnd(e.target)}
                />
                <div className="wheel-item-label letter-active">
                  {this.wheelArray[2].tag}
                </div>
                <div className="wheel-item-label">{this.wheelArray[2].tag}</div>
              </div>
              <div className="wheel-nav">
                <button
                  className="wheel-btn"
                  onClick={e => this.wheel(e.currentTarget)}
                  side="right"
                >
                  <i className="chevron right icon large" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="events-ctn">
          <div className="ui container">
            <div className="events-inner">
              {this.eventsArray.map(event => (
                <div className="events-item">
                  <img
                    className="events-img"
                    src={require(`../pics/${event.img}`)}
                    alt="events"
                  />
                  <div className="events-text-wrapper">
                    <div className="text3">
                      <span>{event.title}</span>
                    </div>
                    <div className="text4">{event.desc}</div>
                  </div>
                </div>
              ))}
              <div className="events-item centered">
                <Link to="/contact" className="text3 schedule">
                  <span style={{ color: "white" }}>Schedule a Meeting</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
