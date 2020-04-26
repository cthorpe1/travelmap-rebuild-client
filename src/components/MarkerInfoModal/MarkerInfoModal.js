import React, { useState } from "react";
import { connect } from "react-redux";
import { unsetActiveMarker } from "../../actions/markerActions";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import MarkerInfo from "./MarkerInfo/MarkerInfo";
import Memories from "./Memories/Memories";
import CreateContainer from "./MemoryTools/CreateContainer";
import UploadPhoto from "./MemoryTools/UploadPhoto/UploadPhoto";

import styles from "./MarkerInfoModal.module.css";
const MarkerInfoModal = (props) => {
  const [modal, setModal] = useState(true);
  const [toolToUse, setToolToUse] = useState(null);

  let markerDetails = props.markers.activeMarker.marker;
  let currencyKeys = Object.keys(markerDetails.currencies);
  let languageKeys = Object.keys(markerDetails.languages);

  const memoryContent = {
    current: props.markers.currentParent,
  };

  const loadTool = (e) => {
    if (e.target.value === "createContainer") {
      setToolToUse(<CreateContainer close={setToolToUse} />);
    } else if (e.target.value === "uploadPhoto") {
      setToolToUse(<UploadPhoto close={setToolToUse} />);
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
      <Modal isOpen={modal} toggle={toggle} scrollable={true}>
        <ModalHeader toggle={toggle}>{markerDetails.name.common}</ModalHeader>
        <ModalBody>
          <MarkerInfo
            currencyKeys={currencyKeys}
            languageKeys={languageKeys}
            markerDetails={markerDetails}
          />
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
              {/* Show current containers and photos if they exist by default */}
              {memoryContent.containers !== null && toolToUse === null ? (
                <Memories content={memoryContent.current} />
              ) : null}

              {/* If tool button is clicked -> Show tool  */}
              {toolToUse}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    markers: state.markers,
  };
};

const actionCreators = {
  unsetActiveMarker,
};

export default connect(mapStateToProps, actionCreators)(MarkerInfoModal);
