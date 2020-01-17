import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import validate from "../utils/validateEmails";
import { sendContactMail } from "../../actions";

class ContactForm extends React.Component {
  state = {
    form: { name: "", email: "", business: "", notes: "" },
    error: false,
    errorList: { name: "", email: "", business: "" }
  };

  async onSubmit() {
    const emailNode = document.querySelector("#email").parentNode.parentNode;
    const nameNode = document.querySelector("#name").parentNode.parentNode;
    const businessNode = document.querySelector("#business").parentNode
      .parentNode;

    const emailFeedback = validate(this.state.form.email);

    if (emailFeedback !== "") {
      emailNode.classList.add("error");
      await this.setState({
        error: true,
        errorList: {
          ...this.state.errorList,
          email: emailFeedback
        }
      });
    } else {
      emailNode.classList.remove("error");
      await this.setState({
        errorList: {
          email: ""
        }
      });
    }

    if (this.state.form.name === "") {
      nameNode.classList.add("error");
      await this.setState({
        error: true,
        errorList: {
          ...this.state.errorList,
          name: "You cannot leave name blank"
        }
      });
    } else {
      nameNode.classList.remove("error");
      await this.setState({
        errorList: { ...this.state.errorList, name: "" }
      });
    }

    if (this.state.form.business === "") {
      businessNode.classList.add("error");
      await this.setState({
        error: true,
        errorList: {
          ...this.state.errorList,
          business: "You cannot leave business blank"
        }
      });
    } else {
      businessNode.classList.remove("error");
      await this.setState({
        errorList: { ...this.state.errorList, business: "" }
      });
    }
    if (
      this.state.errorList.name === "" &&
      this.state.errorList.email === "" &&
      this.state.errorList.business === ""
    ) {
      await this.setState({ error: false });
      document.querySelector(".ui.form").classList.remove("error");
    }

    if (this.state.error === true) {
      document.querySelector(".ui.form").classList.add("error");
      return;
    }
    document.querySelector(".ui.button").classList.add("loading", "disabled");
    this.props.sendContactMail(this.state.form, this.props.history);
  }

  render() {
    return (
      <Form onSubmit={() => this.onSubmit()}>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            id="name"
            label="Name"
            placeholder="Name"
            value={this.state.form.name}
            onChange={e =>
              this.setState({
                form: { ...this.state.form, name: e.target.value }
              })
            }
          />
          <Form.Field
            control={Input}
            id="email"
            label="Email"
            placeholder="Email"
            value={this.state.form.email}
            onChange={e =>
              this.setState({
                form: { ...this.state.form, email: e.target.value }
              })
            }
          />
          <Form.Field
            control={Input}
            id="business"
            label="Business"
            placeholder="Business"
            value={this.state.form.business}
            onChange={e =>
              this.setState({
                form: { ...this.state.form, business: e.target.value }
              })
            }
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="Notes"
          placeholder="Notes"
          value={this.state.form.notes}
          onChange={e =>
            this.setState({
              form: { ...this.state.form, notes: e.target.value }
            })
          }
        />
        <Form.Field control={Button} content="Confirm" />
        <div className="ui error message">
          <ul>
            {this.state.errorList.name !== "" ? (
              <li>{this.state.errorList.name}</li>
            ) : (
              ""
            )}
            {this.state.errorList.email !== "" ? (
              <li>{this.state.errorList.email}</li>
            ) : (
              ""
            )}
            {this.state.errorList.business !== "" ? (
              <li>{this.state.errorList.business}</li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </Form>
    );
  }
}

export default connect(null, { sendContactMail })(withRouter(ContactForm));
