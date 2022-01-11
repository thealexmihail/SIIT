import React from "react";

function Footer() {
  return (
    <footer className="pt-3 mt-3">
      <div className="container-fluid container-min-max-width d-flex justify-content-between">
        <div className="footer-group d-flex flex-column">
          <span className="pers-page">Personal Page</span>
          <p>
            Bucharest Romania, <br />
            All Rights Reserved
          </p>
        </div>
        <div className="social-network footer-group">
          <h3 className="h5">Find me on</h3>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/alexandru-ionu%C8%9B-mihail-47bb57140/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/thealexmihail"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://join.slack.com/t/cv-pageworkspace/shared_invite/zt-11ek9yj8m-JB4uNLMMi9QrNRtpZPD0Gg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-slack"></i>
                <span>Slack</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-group d-flex flex-column">
          <h3 className="h5">Links</h3>
          <a
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Conditions
          </a>
          <a
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="http://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </div>
      </div>
      <div className="text-center py-3">
        &copy; 2022 Personal page by Alexandru-Ionuț Mihail
      </div>
    </footer>
  );
}

export default Footer;
