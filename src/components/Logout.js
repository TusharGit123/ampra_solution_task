import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }
  render() {
    return (
      <>
        <div className="main_logout">
          <div>
            <h2>You have been Logout!!!</h2>
            <Link to="/">
              <button className="login-again-button">Login Again</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Logout;
