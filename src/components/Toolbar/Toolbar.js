import React from "react";
import AddMarker from "./Tools/AddMarker";

import styles from "./Toolbar.module.css";
const Toolbar = props => {
  return (
    <div className={styles.Toolbar}>
      <AddMarker />
    </div>
  );
};

export default Toolbar;
