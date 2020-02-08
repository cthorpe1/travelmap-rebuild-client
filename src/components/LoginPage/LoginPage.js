import React from "react";
import styles from "./LoginPage.module.css";

const HomePage = () => {
  return (
    <div id={styles.LoginFormContainer}>
      <h1>Please Login</h1>
      <form>
        <div class="form-group">
          <label for="inputEmail3">Email</label>
          <div>
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3">Password</label>
          <div>
            <input
              type="password"
              class="form-control"
              id="inputPassword3"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group">
          <div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
