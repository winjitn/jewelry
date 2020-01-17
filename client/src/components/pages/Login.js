import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../actions";
import styles from "./Contact.module.css";

class Login extends React.Component {
  componentDidMount() {
    this.props.load(false);
  }
  componentWillUnmount() {
    this.props.load(true);
  }
  errorLogin(e, btn) {
    e.reset();
    btn.classList.remove("loading");
    e.classList.add("error");
  }
  onSubmit(e) {
    e.preventDefault();
    const children = e.target.childNodes;
    const btn = children[2];
    btn.classList.add("loading");
    e.target.classList.remove("error");
    const loginData = `username=${
      document.getElementById("username").value
    }&password=${document.getElementById("password").value}`;

    this.props.login(
      loginData,
      this.props.history,
      this.errorLogin,
      e.target,
      btn
    );
  }
  render() {
    return (
      <div className={`${styles.ctn} ${styles.bg}`}>
        <div
          className="ui container"
          style={{
            paddingTop: "150px"
          }}
        >
          <Form
            onSubmit={e => this.onSubmit(e)}
            style={{
              width: "20%",
              margin: "auto",
              zIndex: "2"
            }}
          >
            <Form.Field>
              <label>Username</label>
              <input type="text" id="username" placeholder="username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" id="password" placeholder="password" />
            </Form.Field>
            <Button type="submit">Login</Button>
            <div style={{ paddingTop: "20px" }}>
              <Link to="/contact">No account? Contact us</Link>
            </div>
            <div style={{ fontSize: "10px" }} className="ui error message">
              Account does not exist
            </div>
          </Form>
        </div>
        <div className={styles.loginblob}></div>
      </div>
    );
  }
}

export default connect(null, { login })(withRouter(Login));
