import React, { Component } from "react";
// import config from "./Config";
import { UserAgentApplication } from "msal";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "reactstrap";
import NavBar from "./components/NavBar/NavBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import TechQ from "./components/HomePage/TechQ";
import "bootstrap/dist/css/bootstrap.css";
import { getUserDetails } from "./services/GraphService";

const config = {
  appId: "f0e12ca3-6317-48d7-8a0c-10de09d61340",
  scopes: ["user.read", "calendars.read"]
};

class App extends Component {
  constructor(props) {
    super(props);

    this.userAgentApplication = new UserAgentApplication({
      auth: {
        clientId: config.appId
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
      }
    });

    this.userAgentApplication.handleRedirectCallback((error, response) => {
      console.log(error, response);
    });

    var user = this.userAgentApplication.getAccount();

    this.state = {
      isAuthenticated: user !== null,
      user: {},
      error: null
    };

    if (user) {
      this.getUserProfile();
    }
  }

  async login() {
    try {
      await this.userAgentApplication.loginRedirect({
        scopes: config.scopes,
        prompt: "select_account"
      });
      await this.getUserProfile();
    } catch (err) {
      var error = {};

      if (typeof err === "string") {
        var errParts = err.split("|");
        error =
          errParts.length > 1
            ? { message: errParts[1], debug: errParts[0] }
            : { message: err };
      } else {
        error = {
          message: err.message,
          debug: JSON.stringify(err)
        };
      }

      this.setState({
        isAuthenticated: false,
        user: {},
        error: error
      });
    }
  }

  logout() {
    this.userAgentApplication.logout();
  }

  async getUserProfile() {
    try {
      // Get the access token silently
      // If the cache contains a non-expired token, this function
      // will just return the cached token. Otherwise, it will
      // make a request to the Azure OAuth endpoint to get a token

      var accessToken = await this.userAgentApplication.acquireTokenSilent({
        scopes: config.scopes
      });

      if (accessToken) {
        // Get the user's profile from Graph
        var user = await getUserDetails(accessToken);
        this.setState({
          isAuthenticated: true,
          user: {
            displayName: user.displayName,
            email: user.mail || user.userPrincipalName
          },
          error: null
        });
      }
    } catch (err) {
      var error = {};
      if (typeof err === "string") {
        var errParts = err.split("|");
        error =
          errParts.length > 1
            ? { message: errParts[1], debug: errParts[0] }
            : { message: err };
      } else {
        error = {
          message: err.message,
          debug: JSON.stringify(err)
        };
      }

      this.setState({
        isAuthenticated: false,
        user: {},
        error: error
      });
    }
  }

  render() {
    let error = null;
    if (this.state.error) {
      error = (
        <ErrorMessage
          message={this.state.error.message}
          debug={this.state.error.debug}
        />
      );
    }

    return (
      <Router>
        <div>
          <NavBar
            isAuthenticated={this.state.isAuthenticated}
            authButtonMethod={
              this.state.isAuthenticated
                ? this.logout.bind(this)
                : this.login.bind(this)
            }
            user={this.state.user}
          />
          <Container>
            <Route
              exact
              path="/"
              render={props => (
                <TechQ
                  {...props}
                  isAuthenticated={this.state.isAuthenticated}
                  user={this.state.user}
                  authButtonMethod={this.login.bind(this)}
                />
              )}
            />
          </Container>
        </div>
      </Router>
    );
  }

  setErrorMessage(message, debug) {
    this.setState({
      error: { message: message, debug: debug }
    });
  }
}

export default App;
