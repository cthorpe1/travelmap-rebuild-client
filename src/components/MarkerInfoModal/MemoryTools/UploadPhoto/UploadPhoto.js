import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadPhotos } from "../../../../actions/photoActions";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styles from "./UploadPhoto.module.css";
const UploadPhoto = (props) => {
  const [photos, setPhotos] = useState({
    toUpload: [],
    toDisplay: [],
  });

  const handleFileSelect = (e) => {
    let newState = {
      toUpload: e.target.files,
      toDisplay: [],
    };
    for (let i = 0; i < e.target.files.length; i++) {
      newState.toDisplay.push(e.target.files[i].name);
    }
    setPhotos(newState);
  };

  const handleFileUpload = () => {
    const fd = new FormData();
    fd.append("currentParent", props.markers.currentParent.id);
    for (let i = 0; i < photos.toUpload.length; i++) {
      fd.append("img", photos.toUpload[i]);
    }
    setPhotos({
      toDisplay: [],
      toUpload: [],
    });
    props.uploadPhotos(fd);
    props.close();
  };
  return (
    <div>
      <Form>
        <FormGroup>
          <strong>
            <Label htmlFor="file">Upload Photos Here:</Label>
            <br />
          </strong>
          {photos.toDisplay.length === 0 ? (
            <p className={styles.NoneSelected}>No photos selected...</p>
          ) : (
            photos.toDisplay.map((photo) => <p key={photo}>{photo}</p>)
          )}
          <Input
            type="file"
            name="file"
            id="file"
            className="mb-3"
            color="primary"
            style={{ display: "none" }}
            onChange={handleFileSelect}
            multiple
          />
          <Button
            color="success"
            onClick={() => document.getElementById("file").click()}
            className="mr-3"
          >
            Select Photos
          </Button>
          <Button
            color="primary"
            onClick={handleFileUpload}
            className="mr-3"
            disabled={photos.toUpload.length > 0 ? false : true}
          >
            Upload Photos
          </Button>
          <Button color="danger" onClick={() => props.close(null)}>
            Cancel
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
    photos: state.photos,
    markers: state.markers,
  };
};

const actionCreators = {
  uploadPhotos,
};

export default connect(mapStateToProps, actionCreators)(UploadPhoto);
