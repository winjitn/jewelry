import React from "react";

import "./Feedback.css";

class Feedback extends React.Component {
  render() {
    const { match } = this.props;

    if (match.params.type === "form-submit") {
      return (
        <div className="holder">
          <span>We will be in touch</span>
        </div>
      );
    }
    if (match.params.type === "submit-error") {
      return (
        <div className="holder">
          <span>Something went wrong please try again later</span>
        </div>
      );
    }
    return (
      <div className="holder">
        <span>Looks like something went wrong :(</span>
      </div>
    );
  }
}

export default Feedback;
