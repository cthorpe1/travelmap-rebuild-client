import React, { useState } from "react";
import { connect } from "react-redux";
import { addTopLevelMarker } from "../../../actions/markerActions";
import { clearErrors } from "../../../actions/errorActions";
import { MARKER_ADD_FAIL } from "../../../actions/types";
import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import countries from "../../../utilities/countries.json";

const AddMarker = props => {
  const [modal, setModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    countries[0].name.common
  );
  const toggle = () => {
    setModal(!modal);
  };
  const handleAddMarker = e => {
    e.preventDefault();
    props.clearErrors();
    const newCountryMarker = {
      name: selectedCountry,
      ownedBy: props.auth.user.id
    };
    props.addTopLevelMarker(newCountryMarker);
  };

  const handleSelectChange = e => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div>
      <Button onClick={toggle} color="primary">
        Add Marker
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Marker</ModalHeader>
        <ModalBody>
          {props.error.id === MARKER_ADD_FAIL ? (
            <Alert color="danger">{props.error.message}</Alert>
          ) : null}
          <Form onSubmit={handleAddMarker}>
            <FormGroup>
              <Label htmlFor="country">Select Country to Mark</Label>
              <Input
                type="select"
                value={selectedCountry}
                onChange={handleSelectChange}
              >
                {countries.map((country, i) => {
                  return (
                    <option key={i} value={country.name.common}>
                      {country.name.common}
                    </option>
                  );
                })}
              </Input>
              <Button color="primary" style={{ marginTop: "2rem" }} block>
                Add Marker
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
    auth: state.auth,
    marker: state.markers
  };
};

const actionCreators = {
  addTopLevelMarker,
  clearErrors
};

export default connect(mapStateToProps, actionCreators)(AddMarker);
