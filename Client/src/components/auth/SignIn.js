import image from '../../assets/backgroundImage.svg'

function SignIn() {
  return (
    <div style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh', width: '100%', }}>

      <form
      // onSubmit={this.handleSubmit}
      >
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          // onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          // onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Don't have an account? <a href="/sign-up">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default SignIn;