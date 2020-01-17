import React from "react";

import Form from "./Form";
import styles from "./Contact.module.css";

class Contact extends React.Component {
  componentDidMount() {
    this.props.load(false);
  }
  componentWillUnmount() {
    this.props.load(true);
  }
  render() {
    return (
      <div className={`${styles.ctn} ${styles.bg}`}>
        <div
          className={`ui container ${styles.main}`}
          style={{ position: "relative", zIndex: "1" }}
        >
          <div className={styles.head}>Contact Us</div>
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;
