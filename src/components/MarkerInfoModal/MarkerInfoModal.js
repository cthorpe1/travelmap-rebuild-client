import React, { useState } from "react";
import { connect } from "react-redux";
import { unsetActiveMarker } from "../../actions/markerActions";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

import styles from "./MarkerInfoModal.module.css";
const MarkerInfoModal = props => {
  const [modal, setModal] = useState(true);

  let markerDetails = props.marker.activeMarker.marker;
  let currencyKeys = Object.keys(markerDetails.currencies);
  let languageKeys = Object.keys(markerDetails.languages);
  const toggle = () => {
    setModal(!modal);
    setTimeout(() => {
      props.unsetActiveMarker();
    }, 500);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{markerDetails.name.common}</ModalHeader>
        <ModalBody>
          <div className={styles.RegionInfoContainer}>
            <p>
              <strong>Capital:</strong> {markerDetails.capital}
            </p>
            <p>
              <strong>Region:</strong> {markerDetails.region}
            </p>
            <p>
              <strong>Subregion:</strong> {markerDetails.subregion}
            </p>
          </div>
          <div className={styles.CurrencyContainer}>
            <p>
              <strong>Currencies:</strong>
            </p>
            <ul>
              {currencyKeys.map(key => {
                return <li key={key}>{markerDetails.currencies[key].name}</li>;
              })}
            </ul>
          </div>
          <div className={styles.LanguagesContainer}>
            <p>
              <strong>Languages:</strong>
            </p>
            <ul>
              {languageKeys.map(key => {
                return <li key={key}>{markerDetails.languages[key]}</li>;
              })}
            </ul>
          </div>
          <p>
            <strong>Description:</strong>
            <br /> {markerDetails.desc}
          </p>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // error: state.error,
    // auth: state.auth
    marker: state.markers
  };
};

const actionCreators = {
  unsetActiveMarker
};

export default connect(mapStateToProps, actionCreators)(MarkerInfoModal);
