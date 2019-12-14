import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
// import logo from "../assets/Logo.png";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import URLs from "../consts/URLs";
import "../assets/styles/resource-style.css";
import "../assets/styles/media_query.css";
import "../assets/styles/body-style.css";
import "../assets/styles/icomoon_style.css";
import "../assets/styles/dropdown.css";
import "../assets/styles/profile.css";

export default function HeaderBar() {
  const goToZiadLinkedIn = () => {
    window.open(URLs.ZIAD_LINKEDIN);
  };

  return (
    <AppBar position="static" style={{ marginBottom: "2rem" }}>
      <Toolbar>
        <div>
          <img
            src="../assets/images/logo.png"
            alt="Repolocator logo"
            style={{ height: "6rem" }}
          />
          <nav className="navbar navbar-expand-lg bg-light nav_bar_prop justify-content-between tq-navbar">
            <a className="navbar-brand logo" href="#">
              <img className="img-fluid" src="Assets/logo.png" />
            </a>
            <button
              className="navbar-toggler navbar-light bg-light"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon " />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-md-auto pr-md-5 center-text-ul ">
                <li className="nav-item active">
                  <a className="nav-link nav_items_active text-nav" href="#">
                    Resources
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav_items text-nav" href="#">
                    Tasks
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav_items text-nav" href="#">
                    Board
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle profile-border text-nav"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img id="image" />
                    <span id="ProfileName" />
                  </a>
                  <div
                    className="dropdown-menu dropdown drop-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <div>
                      <a
                        className="dropdown-item center-text-ul display-inline"
                        href="#"
                      >
                        <div className="icon-logout-2 display-inline logout-image" />
                        <p className="display-inline logout-text">Logout</p>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Toolbar>
    </AppBar>
  );
}
