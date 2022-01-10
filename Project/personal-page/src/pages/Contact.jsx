import React from "react";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

function Contact() {
  return (
    <div>
      <Layout>
        <div className="form-layout">
          <ContactForm />
        </div>
      </Layout>
    </div>
  );
}

export default Contact;
