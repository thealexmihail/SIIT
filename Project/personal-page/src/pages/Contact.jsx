import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <div>
      <Layout>
        <div className="contact">
          <div className="contact-content">
            <div className="header"></div>
            <div className="contact-area">
              <h1>Contact me</h1>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Bucharest</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Contact;
