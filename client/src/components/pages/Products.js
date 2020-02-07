import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Showroom from "./Showroom";
import ShowroomReview from "./ShowroomReview";

class Products extends React.Component {
  state = { showReview: false };
  async componentDidMount() {
    await this.props.fetchRoom();
  }
  renderContent() {
    if (this.state.showReview === true) {
      return (
        <ShowroomReview onCancel={() => this.setState({ showReview: false })} />
      );
    }
    return (
      <Showroom onItemsSubmit={() => this.setState({ showReview: true })} />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default connect(null, actions)(Products);
