import React from "react";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className="jumbotron" id={classes.HomeContainer}>
      <h1 className="display-3">Welcome to TravelMap</h1>
      <p className="lead">
        We make it easy to view and organize all of your special moments from
        around the globe.
      </p>
      <hr className="my-4" />
      <p>Please "Sign Up" or "Login" below</p>

      <a className="btn btn-primary btn-lg" href="/register" role="button">
        Sign Up
      </a>
      <a className="btn btn-primary btn-lg" id={classes.Login} href="/login" role="button">
        Login
      </a>
    </div>
  );
};

export default HomePage;
