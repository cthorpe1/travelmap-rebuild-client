import React from "react";
import styles from "./MarkerInfo.module.css";
const MarkerInfo = props => {
  return (
    <>
      <div className={styles.RegionInfoContainer}>
        <p>
          <strong>Capital:</strong> {props.markerDetails.capital}
        </p>
        <p>
          <strong>Region:</strong> {props.markerDetails.region}
        </p>
        <p>
          <strong>Subregion:</strong> {props.markerDetails.subregion}
        </p>
      </div>
      <div className={styles.CurrencyContainer}>
        <p>
          <strong>Currencies:</strong>
        </p>
        <ul>
          {props.currencyKeys.map(key => {
            return (
              <li key={key}>{props.markerDetails.currencies[key].name}</li>
            );
          })}
        </ul>
      </div>
      <div className={styles.LanguagesContainer}>
        <p>
          <strong>Languages:</strong>
        </p>
        <ul>
          {props.languageKeys.map(key => {
            return <li key={key}>{props.markerDetails.languages[key]}</li>;
          })}
        </ul>
      </div>
      <p>
        <strong>Description:</strong>
        <br /> {props.markerDetails.desc}
      </p>
    </>
  );
};

export default MarkerInfo;
