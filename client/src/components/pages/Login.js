import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../actions";
import "./Login.css";

class Login extends React.Component {
  errorLogin(e, btn) {
    e.reset();
    btn.classList.remove("loading");
    e.classList.add("error");
  }
  onSubmit(e) {
    e.preventDefault();
    e.currentTarget.classList.add("loading");

    e.target.classList.remove("error");
    const loginData = `username=${
      document.getElementById("username").value
    }&password=${document.getElementById("password").value}`;

    this.props.login(
      loginData,
      this.props.history,
      this.errorLogin,
      e.target,
      e.currentTarget
    );
  }
  render() {
    return (
      <div className="login-ctn">
        <div className="ui container login-inner-ctn">
          <Form onSubmit={e => this.onSubmit(e)} className="login-form">
            <label className="login-label">Username</label>
            <input
              className="login-input"
              type="text"
              id="username"
              placeholder="username"
              value="admin"
            />
            <label className="login-label">Password</label>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="password"
              value="admin"
            />
            <Button
              className="fluid ui secondary button login-btn"
              type="submit"
            >
              Login
            </Button>
            <div className="no-acc">
              <Link to="/contact">No account? Contact us</Link>
            </div>
            <div style={{ fontSize: "10px" }} className="ui error message">
              Account does not exist
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(null, { login })(withRouter(Login));
