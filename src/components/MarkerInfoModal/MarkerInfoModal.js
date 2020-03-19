import React, { useState } from "react";
import { connect } from "react-redux";
import { unsetActiveMarker } from "../../actions/markerActions";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import CreateContainer from "./MemoryTools/CreateContainer";
import styles from "./MarkerInfoModal.module.css";
const MarkerInfoModal = props => {
  const [modal, setModal] = useState(true);
  const [toolToUse, setToolToUse] = useState(null);

  let markerDetails = props.marker.activeMarker.marker;
  let currencyKeys = Object.keys(markerDetails.currencies);
  let languageKeys = Object.keys(markerDetails.languages);

  //When this markers data is pulled from DB, this is where it will go
  const memoryContent = { containers: [], photos: [] };

  const loadTool = e => {
    if (e.target.value === "createContainer") {
      setToolToUse(<CreateContainer />);
    } else {
    }
  };

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
          <hr />
          <div className={styles.MemoryContainer}>
            <div className={styles.MemoryTools}>
              <Button
                color="primary"
                onClick={loadTool}
                value="createContainer"
              >
                Create Container
              </Button>
              <Button color="primary" onClick={loadTool} value="uploadPhoto">
                Upload Photos
              </Button>
            </div>
            <div className={styles.MemoryContent}>
              {/* Show current containers and memories if they exist by default */}

              {/* If Create Container button is clicked -> Show form to create  */}
              {toolToUse}
              {/* If Upload Photos button is clicked -> show form to upload */}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    marker: state.markers
  };
};

const actionCreators = {
  unsetActiveMarker
};

export default connect(mapStateToProps, actionCreators)(MarkerInfoModal);
