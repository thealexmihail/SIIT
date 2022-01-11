import React from "react";

function SoftSkills() {
  return (
    <div className="other-skills">
      <h3 className="gradient-text">Skills</h3>
      <div className="soft-skills">
        <ul>
          <li>
            <i className="fas fa-check-square"></i>
            <span>English</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>French</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Romanian</span>
          </li>
        </ul>
        <ul>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Office</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Management</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Engineering</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SoftSkills;
