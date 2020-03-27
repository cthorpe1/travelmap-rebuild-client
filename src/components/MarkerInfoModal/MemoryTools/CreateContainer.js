import React, { useState } from "react";
import { connect } from "react-redux";
import { createSubContainer } from "../../../actions/markerActions";
import { Alert, Button, Form, FormGroup, Label, Input } from "reactstrap";

const CreateContainer = props => {
  const [containerName, setContainerName] = useState("");

  const onChange = e => {
    const updatedName = e.target.value;
    setContainerName(updatedName);
  };

  const handleCreateContainer = e => {
    e.preventDefault();
    const newContainer = {
      name: containerName,
      currentParent: props.markers.currentParent.id
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
            placeholder="example: 'Food'"
            value={containerName}
            className="mb-3"
            onChange={onChange}
          />
          <Button color="primary" style={{ marginTop: "1rem" }} block>
            Create Container
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
    markers: state.markers
  };
};

const actionCreators = {
  createSubContainer
};

export default connect(mapStateToProps, actionCreators)(CreateContainer);
