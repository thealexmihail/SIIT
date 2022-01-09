import React from "react";
import { NavLink } from "react-router-dom";

function Page404() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>Oops... the page that you're trying to reach doesn't exist!</h1>
        <NavLink exact to="/">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Page404;
