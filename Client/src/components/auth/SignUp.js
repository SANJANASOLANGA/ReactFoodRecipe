import image from '../../assets/backgroundImage.svg'

function SignUp() {
    return (
        <div style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: '100vh', width: '100%', }}>

            <form 
                // onSubmit={handleSubmit}
            >
                <h3>Sign Up</h3>
                <div>
                    Register As
                    <input
                        type="radio"
                        name="UserType"
                        value="User"
                        // onChange={(e) => setUserType(e.target.value)}
                    />
                    User
                    <input
                        type="radio"
                        name="UserType"
                        value="Admin"
                        // onChange={(e) => setUserType(e.target.value)}
                    />
                    Admin
                </div>
                {/* {userType == "Admin" ? (
                    <div className="mb-3">
                        <label>Secret Key</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Secret Key"
                            // onChange={(e) => setSecretKey(e.target.value)}
                        />
                    </div>
                ) : null} */}

                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        // onChange={(e) => setFname(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        // onChange={(e) => setLname(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already have an account <a href="/sign-in">Sign In</a>
                </p>
            </form>
        </div>
    );
}

export default SignUp;