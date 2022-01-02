import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <div className="navlink">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/skills" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/projects" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="pic-area">
        <div className="pic-content">
          <img
            src="./media/profilepic.jpeg"
            width="150px"
            height="150px"
            alt="profile-pic"
          />
          <h2>Alexandru-Ionuț MIHAIL</h2>
          <h3>Junior WEB Developer</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
