import React from "react";
import emailjs from "emailjs-com";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { name: "", email: "", subject: "", message: "" },
      errors: {},
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitContactForm = this.submitContactForm.bind(this);
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }

  submitContactForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = { name: "", email: "", subject: "", message: "" };
      this.setState({ fields: fields });
      let message = "Your message was sent successfully.";
      this.setState({ message: message });
      this.hideTimeOut = setTimeout(() => this.setState({ message: "" }), 4000);

      emailjs.sendForm(
        "gmail",
        "template_6hwj1c8",
        e.target,
        "user_cNO0qdMGnxFqAVFmbS3Et"
      );
      e.target.reset();
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields.name) {
      formIsValid = false;
      errors.name = "*Please enter your name.";
    } else if (typeof fields.name !== "undefined") {
      if (!fields.name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors.name = "*Please enter alphabetical characters only.";
      }
    }

    if (!fields.email) {
      formIsValid = false;
      errors.email = "*Please enter your email adress.";
    } else if (typeof fields.email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields.email)) {
        formIsValid = false;
        errors.email =
          "*Please enter a valid email adress. Eg: youradress@email.com";
      }
    }

    if (!fields.subject) {
      formIsValid = false;
      errors.subject = "*Please enter the subject.";
    } else if (typeof fields.subject !== "undefined") {
      if (fields.subject.length < 5) {
        formIsValid = false;
        errors.subject = "*Please enter more than 5 characters.";
      }
    }

    if (!fields.message) {
      formIsValid = false;
      errors.message = "*Please enter your message.";
    } else if (typeof fields.message !== "undefined") {
      if (fields.message.length < 15) {
        formIsValid = false;
        errors.message = "*Your message must contain more than 15 characters.";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  closeSuccessMessage() {}

  render() {
    return (
      <div className="contact-form">
        <h3 className="gradient-text">Contact form</h3>
        <form className="user-contact-form" onSubmit={this.submitContactForm}>
          <div className="col-8 form-group mx-auto">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.fields.name}
              onChange={this.handleChange}
            />
            <span className="error-msg">{this.state.errors.name}</span>
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={this.state.fields.email}
              onChange={this.handleChange}
            />
            <span className="error-msg">{this.state.errors.email}</span>
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              className="form-control"
              value={this.state.fields.subject}
              onChange={this.handleChange}
            />
            <span className="error-msg">{this.state.errors.subject}</span>
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <label>Message</label>
            <textarea
              name="message"
              className="form-control"
              cols="30"
              rows="8"
              value={this.state.fields.message}
              onChange={this.handleChange}
            ></textarea>
            <span className="error-msg">{this.state.errors.message}</span>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <span className="success-msg">{this.state.message}</span>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input type="submit" className="btn btn-info" value="Send" />
          </div>
        </form>
      </div>
    );
  }
}
export default ContactForm;
