import React from "react";
import { Link } from "react-router-dom";
import classes from "./IndexPage.module.css";

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

      <Link className="btn btn-primary btn-lg" to="/register" role="button">
        Sign Up
      </Link>
      <Link
        className="btn btn-primary btn-lg"
        id={classes.Login}
        to="/login"
        role="button"
      >
        Login
      </Link>
    </div>
  );
};

export default HomePage;
