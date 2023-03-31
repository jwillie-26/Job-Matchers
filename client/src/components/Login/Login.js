import React, { useState } from "react";
import "./Login.css";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // fetch returns a Promise, we must await it

    const formData = {
      email,
      password,
    };

    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // response.json() returns a Promise, we must await it
    const data = await response.json();
    if (response.ok) {
      // console.log("User created:", data);
      setUser(data);
      setErrors("");
      window.location = "/jobs-page";
    } else {
      setErrors(data.error);
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary">
              <a href="/sign-up">Sign Up</a>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}

          {errors !=="" ? (
            <ul style={{ color: "red" }}>
              <li>{errors}</li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
}
