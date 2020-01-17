import React from "react";

import style from "./About.module.css";
import styles from "./Contact.module.css";

class About extends React.Component {
  componentDidMount() {
    this.props.load(false);
  }
  componentWillUnmount() {
    this.props.load(true);
  }

  render() {
    return (
      <div
        className={`${styles.ctn} ${styles.bg}`}
        style={{ paddingTop: "200px" }}
      >
        <div className="ui container" style={{ marginBottom: "50px" }}>
          <p className={style.about}>About Us</p>
          <div className="ui grid">
            <div className="eight wide column">
              <div className={style.subhead}>History</div>
              <div className={style.body}>
                Vestibulum velit felis, gravida et faucibus quis, egestas vitae
                orci. Integer non erat tempor, faucibus erat vel, blandit justo.
                Donec in condimentum diam. Mauris dignissim lectus et ex
                lobortis, eu semper est efficitur. Aenean sed pretium ex, et
                varius ligula. Praesent in purus elit. Vestibulum dictum nisi ut
                nisi posuere, vitae aliquam tellus gravida. Etiam varius libero
                non est tincidunt placerat. Nulla facilisi. Donec placerat elit
                eu mauris auctor, non gravida tellus elementum. Sed pretium eget
                lorem sollicitudin tincidunt. Curabitur tincidunt, metus et
                sagittis lacinia, ligula lectus dapibus diam, id faucibus purus
                odio sed erat. Nunc ultricies massa in vestibulum pharetra.
              </div>
            </div>
            <div className="eight wide column">
              <div className={style.subhead}>Capabilities</div>
              <div className={style.body}>
                Etiam rutrum iaculis dui ut dictum. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Proin hendrerit vehicula libero sed aliquet. Nunc bibendum
                condimentum magna, in scelerisque urna ultricies a. Fusce
                ultricies pellentesque nunc at gravida. Suspendisse mattis
                lobortis sapien quis porta. Quisque bibendum libero tortor, ac
                finibus nibh elementum a. Proin rhoncus id mauris vitae
                condimentum. Proin consectetur eros orci, a tempus tellus
                commodo a. Etiam dapibus odio dapibus dui lobortis, eget
                tincidunt dui porta. Donec posuere sit amet purus a commodo.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
