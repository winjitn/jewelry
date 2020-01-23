import React from "react";
import { Timeline } from "./Timeline";
import { Grid, Image, Segment } from "semantic-ui-react";

import "./Home.css";
import banner from "../pics/banner_main.jpg";
import one from "../pics/1.jpg";
import two from "../pics/2.jpg";
import three from "../pics/3.jpg";
import four from "../pics/4.jpg";
import banner2 from "../pics/tif.jpg";

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
    }, 100);
  }
  componentWillUnmount() {
    this.props.load(true);
  }
  render() {
    return (
      <div className="home-ctn">
        <div className="banner-ctn">
          <img src={banner} className="banner" />
        </div>
        <div className="ui container">
          <Grid stackable columns={2}>
            <Grid.Column width={6}>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
