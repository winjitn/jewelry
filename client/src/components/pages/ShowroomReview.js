import React from "react";
import { connect } from "react-redux";
import { List, Segment, Form } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import { sendQuoteMail } from "../../actions";
import styles from "./Contact.module.css";

class ShowroomReview extends React.Component {
  state = { notes: "" };
  onSubmit() {
    this.setState({ notes: this.state.notes.trim() });
    if (this.props.items.length === 0 && this.state.notes === "") {
      document.querySelector(".ui.form").classList.add("error");
      return;
    }
    document.querySelector(".ui.form").classList.remove("error");
    document.querySelector(".ui.button").classList.add("loading");
    const content = {
      items: this.props.items,
      email: this.props.email,
      notes: this.state.notes
    };
    this.props.sendQuoteMail(content, this.props.history);
  }
  renderReview() {
    return this.props.items.map(item => (
      <List.Item key={item}>
        <List.Content>
          <List.Header style={{ color: "grey" }}>Code</List.Header>
          {item}
        </List.Content>
      </List.Item>
    ));
  }
  render() {
    return (
      <div className={`${styles.ctn} ${styles.bg}`}>
        <div className={`ui container ${styles.main}`}>
          <div className={styles.head}>Review</div>
          <Segment inverted>
            <List horizontal>{this.renderReview()}</List>
          </Segment>
          <Form onSubmit={() => this.onSubmit()}>
            <Form.TextArea
              value={this.state.notes}
              onChange={e => this.setState({ notes: e.target.value })}
              label="Notes"
              placeholder="Additional notes"
            />
            <button
              type="button"
              onClick={() => this.props.onCancel()}
              className="ui button"
            >
              Back
            </button>
            <button type="submit" className="ui blue button">
              Submit
            </button>
            <div className="ui error message">
              <ul>
                <li>Both products list and notes cannot be empty</li>
              </ul>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { items: state.item, email: state.auth.email };
};

export default connect(mapStateToProps, { sendQuoteMail })(
  withRouter(ShowroomReview)
);
