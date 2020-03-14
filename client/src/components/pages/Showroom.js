import React from "react";
import { connect } from "react-redux";

import { clearItem } from "../../actions";
import styles from "./Showroom.module.css";

import Item from "./Item";

//testing
import ring_holder from "../../pics/product_ring.jpg";
import bracelet_holder from "../../pics/product_bracelet.jpg";
import necklace_holder from "../../pics/product_necklace.jpg";

//for testing only
const list = [
  { label: "Rings", img: ring_holder },
  { label: "Bracelets", img: bracelet_holder },
  { label: "Necklaces", img: necklace_holder }
];

class Showroom extends React.Component {
  state = { view: "featured" };

  componentDidMount() {
    this.props.item.forEach(code => {
      const img = document.querySelector(`div[name="${code}"]`);
      if (img !== undefined) {
        img.setAttribute("status", "true");
        const children = img.children;
        children[0].classList.add("enable");
        children[1].classList.add("disable");
      }
    });
  }

  onBtnClear() {
    this.props.item.forEach(code => {
      const img = document.querySelector(`div[name="${code}"]`);
      img.setAttribute("status", "false");
      const children = img.children;
      children[0].classList.remove("enable");
      children[1].classList.remove("disable");
    });
    this.props.clearItem();
  }

  catalogue() {
    if (this.props.img[list[0].label] !== undefined) {
      if (this.state.view === "featured") {
        return list.map(type => {
          const imgs = this.props.img[type.label].map(item => (
            <Item code={item.code} weight={item.weight} img={type.img} />
          ));
          return (
            <>
              <div className={styles.subhead}>{type.label}</div>
              <div className={styles.imgctn}>{imgs}</div>
            </>
          );
        });
      }
    }

    return;
  }

  componentDidUpdate() {
    console.log(this.props.item);
  }

  render() {
    return (
      <div className={styles.showroomctn}>
        <div className={styles.productsBarWrapper}>
          <ul>
            <li className={styles.dropdown}>
              Categories
              <div className={styles.dropdownContent}>
                <div>Rings</div>
                <div>Bracelets</div>
                <div>Necklaces</div>
              </div>
            </li>
            <li onClick={this.props.onItemsSubmit}>
              Review
              <div className={styles.cartTally}>{this.props.item.length}</div>
            </li>
          </ul>
        </div>
        <div className={styles.main}> {this.catalogue()} </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { img: state.img, item: state.item };
};

export default connect(mapStateToProps, { clearItem })(Showroom);
