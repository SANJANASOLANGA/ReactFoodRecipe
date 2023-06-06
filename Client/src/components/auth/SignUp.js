import React, { useState } from "react";

export default function SignUp() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [secretKey, setSecretKey] = useState("");

    const handleSubmit = (e) => {
        if (userType == "Admin" && secretKey != "123") {
            e.preventDefault();
            alert("Invalid Admin");
        } else {
            e.preventDefault();

            console.log(fname, lname, email, password);
            fetch("http://localhost:5000/register", {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    fname,
                    email,
                    lname,
                    password,
                    userType,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data, "userRegister");
                    if (data.status == "ok") {
                        alert("Registration Successful");
                    } else if(data.error == "User Exists") {
                        alert("User Exists!");
                    }else {
                        alert("Something went wrong");
                    }
                });
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>
                    <div>
                        Register As
                        <input
                            type="radio"
                            name="UserType"
                            value="User"
                            onChange={(e) => setUserType(e.target.value)}
                        />
                        User
                        <input
                            type="radio"
                            name="UserType"
                            value="Admin"
                            onChange={(e) => setUserType(e.target.value)}
                        />
                        Admin
                    </div>
                    {userType == "Admin" ? (
                        <div>
                            <label>Secret Key</label>
                            <input
                                type="text"
                                placeholder="Secret Key"
                                onChange={(e) => setSecretKey(e.target.value)}
                            />
                        </div>
                    ) : null}

                    <div>
                        <label>First name</label>
                        <input
                            type="text"
                            placeholder="First name"
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Last name</label>
                        <input
                            type="text"
                            placeholder="Last name"
                            onChange={(e) => setLname(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Email address</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <button type="submit">
                            Sign Up
                        </button>
                    </div>
                    <p>
                        Already have an account <a href="/sign-in">Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    );
}