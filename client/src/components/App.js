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
import { Feed } from "semantic-ui-react";

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
        <BrowserRouter>
          <NavBar persistor={this.props.persistor} load={this.loading} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/component/:type" component={Feedback} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/:type" component={Feedback} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
