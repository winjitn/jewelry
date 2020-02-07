import React from "react";

import "./Feedback.css";

class Feedback extends React.Component {
  render() {
    const { match } = this.props;

    if (match.params.type === "form-submit") {
      return (
        <div className="animate-bg">
          <div className="holder">We will be in touch</div>
        </div>
      );
    }
    if (match.params.type === "submit-error") {
      return (
        <div className="animate-bg">
          <div className="holder">
            Something went wrong please try again later
          </div>
        </div>
      );
    }
    return (
      <div className="animate-bg">
        <div className="holder"> Looks like something went wrong</div>
      </div>
    );
  }
}

export default Feedback;
