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
        } else if (data.error === "User Not found"){
          alert("User Not Found! Enter a valid email");
        } else {
          alert("Something went wrong");
        }
      });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h6>Are you a admin? Please Sign In first to Add Recipe</h6>
        <h3>Sign In</h3>

        <div>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div>
          <button type="submit">
            Submit
          </button>
        </div>
        <p>
          Don't have an account? <a href="/sign-up"><span style={{color:"black"}}>Sign Up</span></a>
        </p>
      </form>
    )
  }
}
