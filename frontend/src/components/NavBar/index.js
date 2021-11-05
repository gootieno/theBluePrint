import React from "react";
import "./navbar.css";

function NavBar() {
  //navbar should take session token to conditionally render
  return (
    <div id="navbar" className="navbar-container">
      <div id="landing-page-feed-button">
        <div
          id="feed-button"
          type="button"
          onClick={() => alert("feed need to be wired")}
          className="landing-page-buttons"
        >
          FEED
        </div>
      </div>

      <h2 id="landing-page-title">theBluePrint</h2>

      <div id="landing-page-login-button">
        <div type="button" id="login-button" className="landing-page-buttons">
          LOGIN
        </div>
      </div>
    </div>
  );
}

export default NavBar;
