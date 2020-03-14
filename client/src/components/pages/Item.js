import React from "react";
import { connect } from "react-redux";

import { storeItem, deleteItem } from "../../actions";
import styles from "./Showroom.module.css";

class Featured extends React.Component {
  onBtnClick(e) {
    const children = e.children;
    children[0].classList.toggle("enable");
    children[1].classList.toggle("disable");

    if (e.getAttribute("status") === "false") {
      e.setAttribute("status", "true");
      this.props.storeItem(e.getAttribute("name"));
    } else {
      this.props.deleteItem(e.getAttribute("name"));
    }
  }

  render() {
    return (
      <>
        <div className={styles.imgctn}></div>
        <div
          key={`_${this.props.code}`}
          name={this.props.code}
          status="false"
          className={styles.imgwrapper}
          onClick={e => this.onBtnClick(e.currentTarget)}
        >
          <div className={styles.ribbon}>Selected</div>
          <div className={styles.plus}>
            <i className="plus large icon"></i>
          </div>
          <img src={this.props.img} alt="product" width="100%" />
          <div className={styles.imginfo}>
            <div>Code: {this.props.code}</div>
            <div>Weight: {this.props.weight}</div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { storeItem, deleteItem })(Featured);
