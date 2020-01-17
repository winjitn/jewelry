import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import { Footer } from "./Footer";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";
import * as actions from "../actions";

class App extends React.Component {
  state = { loading: true };
  componentDidMount() {
    this.props.fetchUser();
  }

  loading = state => {
    this.setState({ loading: state });
  };

  render() {
    return (
      <div>
        {this.state.loading === true ? (
          <div className="load-ctn">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          ""
        )}
        <BrowserRouter>
          <NavBar persistor={this.props.persistor} load={this.loading} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} load={this.loading} />}
            />
            <Route
              exact
              path="/component/:type"
              render={props => <Feedback {...props} load={this.loading} />}
            />
            <Route
              exact
              path="/login"
              render={props => <Login {...props} load={this.loading} />}
            />
            <Route
              exact
              path="/about"
              render={props => <About {...props} load={this.loading} />}
            />
            <Route
              exact
              path="/contact"
              render={props => <Contact {...props} load={this.loading} />}
            />
            <Route
              exact
              path="/products"
              render={props => <Products {...props} load={this.loading} />}
            />
            <Route
              exact
              path="/:type"
              render={props => <Feedback {...props} load={this.loading} />}
            />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
