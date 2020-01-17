import React from "react";
import { connect } from "react-redux";

import { storeItem, deleteItem, clearItem } from "../../actions";
import styles from "./Showroom.module.css";

const list = [
  { label: "Rings" },
  { label: "Bracelets" },
  { label: "Necklaces" }
];

class Showroom extends React.Component {
  componentDidMount() {
    this.props.item.forEach(code => {
      const button = document.querySelector(`button[name="${code}"]`);
      button.setAttribute("disabled", true);
    });
  }
  onBtnClear() {
    this.props.clearItem();
  }
  onBtnClick(element) {
    element.setAttribute("disabled", true);
    this.props.storeItem(element.name);
  }
  onBtnRemoveClick(element) {
    const code = element.getAttribute("rname");
    this.props.deleteItem(code);
    const button = document.querySelector(`button[name="${code}"]`);
    button.removeAttribute("disabled");
  }
  renderCart() {
    return this.props.item.map(item => (
      <div key={item} style={{ overflow: "auto" }}>
        {item}
        <button
          className="ui mini icon button"
          onClick={e => this.onBtnRemoveClick(e.currentTarget)}
          rname={item}
          style={{ float: "right" }}
        >
          <i className="x icon"></i>
        </button>
      </div>
    ));
  }
  renderImg(label) {
    return this.props.img[label].map(img => {
      return (
        <div
          id={styles.imgctn}
          key={`_${img.code}`}
          className={`four wide column ${styles.imgctn}`}
        >
          <img
            src={img.img}
            alt=""
            width="100%"
            style={{ borderRadius: "10px" }}
          />
          <div className={styles.imgcard}>
            <div>
              Code: {img.code}
              {"    "}
            </div>
            <div>Weight: {img.weight}</div>
            <button
              disabled={false}
              onClick={e => this.onBtnClick(e.currentTarget)}
              name={img.code}
              className="ui button mini"
            >
              Add
            </button>
          </div>
        </div>
      );
    });
  }
  renderContent() {
    if (this.props.img[list[0].label] !== undefined) {
      return list.map(item => (
        <div key={item.label}>
          <div className={styles.subhead}>{item.label}</div>
          <div className="ui grid">{this.renderImg(item.label)}</div>
        </div>
      ));
    }
    return;
  }
  render() {
    return (
      <div style={{ backgroundColor: "#f5f5f5" }} styles={{ height: "100%" }}>
        <div className={styles.cart}>
          <div className={styles.cartbody}>Cart</div>
          <div className={styles.cartbodytext}>{this.renderCart()}</div>
          <button
            className={`ui red button ${styles.cartbutton}`}
            onClick={() => this.onBtnClear()}
            style={{
              left: "0",
              margin: "0"
            }}
          >
            Clear
          </button>
          <button
            className={`ui grey button ${styles.cartbutton}`}
            onClick={() => this.props.onItemsSubmit()}
            style={{
              right: "0",
              margin: "0"
            }}
          >
            Review
          </button>
        </div>
        <div className={styles.main}>{this.renderContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { img: state.img, item: state.item };
};

export default connect(mapStateToProps, { storeItem, deleteItem, clearItem })(
  Showroom
);
