import React from "react";

import Form from "./Form";
import styles from "./Contact.module.css";

class Contact extends React.Component {
  render() {
    return (
      <div className={`${styles.ctn}`}>
        <div className={`ui container ${styles.main}`}>
          <div className={styles.head}>Contact Us</div>
          <Form />
          <div className={styles.contactInfo}>
            <div className={styles.subhead}>Vestibulum</div>
            <div className={styles.subhead2}>00-0-000-0000</div>
            <div className={styles.subhead2}>
              Monday - Friday: 9am - 6pm (GMT+7)
            </div>
            <div className={styles.subhead}>Pellentesque Center</div>
            <div className={styles.subhead2}>00-0-000-0000</div>
            <div className={styles.subhead2}>
              Monday - Friday: 9am - 6pm (GMT+7)
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
