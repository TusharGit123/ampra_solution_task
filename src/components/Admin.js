import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import welcomeimg from "../assets/images/welcome-img.jpg";

export class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <div className="main_admin">
          <div>
            <h2>Welcome!</h2>
            <h5>Glad to have you onboard!</h5>
            <h5>
              This is the welcome page which is immediately shown to your
              members after they register.
            </h5>
            <img src={welcomeimg} alt="welcome_img" />
            <br />
            <Link to="/logout">
              <button type="button" className="logout-button">
                LogOut
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Admin;
