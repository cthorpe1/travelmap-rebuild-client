import React, { useState } from "react";
import { connect } from "react-redux";
import { createSubContainer } from "../../../actions/subcontainerActions";
import { Alert, Button, Form, FormGroup, Label, Input } from "reactstrap";

const CreateContainer = (props) => {
  const [containerName, setContainerName] = useState("");
  const [containerDesc, setContainerDesc] = useState("");

  const onNameChange = (e) => {
    const updatedName = e.target.value;
    setContainerName(updatedName);
  };

  const onDescChange = (e) => {
    const updatedDesc = e.target.value;
    setContainerDesc(updatedDesc);
  };

  const handleCreateContainer = (e) => {
    e.preventDefault();
    const newContainer = {
      name: containerName,
      description: containerDesc,
      currentParent: props.markers.currentParent.id,
    };
    props.createSubContainer(newContainer);
    props.close(null);
  };
  return (
    <div>
      <Form onSubmit={handleCreateContainer}>
        <FormGroup>
          <strong>
            <Label htmlFor="containerName">Enter Container Name:</Label>
          </strong>
          <Input
            type="text"
            name="containerName"
            id="containerName"
            placeholder="Example: 'Food'"
            value={containerName}
            className="mb-3"
            onChange={onNameChange}
            required
          />
          <Input
            type="textarea"
            name="containerDesc"
            id="containerDesc"
            placeholder="Example: These are all of my photos of food from Tokyo"
            value={containerDesc}
            className="mb-3"
            onChange={onDescChange}
          />
          <Button color="success" className="mr-3">
            Create Container
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
    markers: state.markers,
  };
};

const actionCreators = {
  createSubContainer,
};

export default connect(mapStateToProps, actionCreators)(CreateContainer);
