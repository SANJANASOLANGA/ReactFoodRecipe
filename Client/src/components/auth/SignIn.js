import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.state;
    console.log(email, password)
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login Successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails"
        } else if (data.error === "User Not found") {
          alert("User Not Found! Enter a valid email");
        } else {
          alert("Something went wrong");
        }
      });

  }

  render() {
    return (
      <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <h6 className="form-container__subtitle">Are you a admin? Please Sign In first to Add Recipe</h6>
          <h3 className="form-container__title">Sign In</h3>

          <div>
            <label className="form-container__label">Email address</label>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })}
              className="form-container__input"
            />
          </div>

          <div>
            <label className="form-container__label">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
              className="form-container__input"
            />
          </div>

          <div>
            <button type="submit" className="form-container__submit-button">
              Submit
            </button>
          </div>
          <p>
            Don't have an account? <a href="/sign-up" className="form-container__signup-link"><span>Sign Up</span></a>
          </p>
        </form>
      </div>
    )
  }
}
