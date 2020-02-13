import React from "react";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const handleLogin = e => {
    e.preventDefault();

    fetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify({
        email: e.target[0].value,
        password: e.target[1].value
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.auth === true) {
          console.log(data);
        } else {
          console.log(data);
        }
      })
      .catch(err => {
        console.log("In Catch Block: ", err);
      });
  };

  return (
    <div id={styles.LoginFormContainer}>
      <h1>Please Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
