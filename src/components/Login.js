import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let usernameError = "";
    let passwordError = "";
    if (!this.state.username) {
      usernameError = "username cannot be blank";
    }
    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }
    if (usernameError || passwordError) {
      this.setState({
        usernameError,
        passwordError,
      });
      return false;
    }
    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    localStorage.setItem("token", "jwfywtiufvasidURSAIDAU");
    //login magic
    if (username === "A" && password === "B") {
      this.setState({
        loggedIn: true,
      });
    }
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <>
        <div className="main_login">
          <div className="login">
            <h2>Login</h2>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />

              <div style={{ fontSize: 14, color: "red" }}>
                {this.state.usernameError}
              </div>
              <br />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
              />
              <div style={{ fontSize: 14, color: "red" }}>
                {this.state.passwordError}
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
