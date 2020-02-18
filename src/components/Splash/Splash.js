import React from "react";
import styles from "./Splash.module.css";
const Splash = () => {
  return (
    <div>
      <div className={styles.Jumbotron}>
        <div className={styles.BackgroundImage}></div>
        <div className={styles.SplashContent}>
          <h1 className="display-3">Welcome to TravelMap!</h1>
          <p className="lead">
            We make it easy to organize and store all of your favorite travel
            memories
          </p>
          <hr className="my-2" />
          <h4>Please register or login above</h4>
        </div>
      </div>
    </div>
  );
};

export default Splash;
