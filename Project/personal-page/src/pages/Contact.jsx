import React from "react";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

function Contact() {
  return (
    <div>
      <Layout>
        <div className="contact-layout">
          <div className="contact-details">
            <h3 className="gradient-text">Contact me</h3>
            <i class="fas fa-map-marker-alt"></i>
            <div className="phone-mail-area">
              <div>
                <a href="mailto:alex.mihail04@gmail.com">
                  alex.mihail04@gmail.com
                </a>
              </div>
              Phone number:
              <span> +40767613284</span>
            </div>
            <div className="message-area">
              ...or simply fill in the form below:
            </div>
          </div>
          <ContactForm />
        </div>
      </Layout>
    </div>
  );
}

export default Contact;
