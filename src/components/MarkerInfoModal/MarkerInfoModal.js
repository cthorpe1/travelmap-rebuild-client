import React, { useState } from "react";
import { connect } from "react-redux";
import { unsetActiveMarker } from "../../actions/markerActions";
import {
  //   Alert,
  //   Button,
  Modal,
  ModalHeader,
  ModalBody
  //   Form,
  //   FormGroup,
  //   Label,
  //   Input
} from "reactstrap";
import countries from "../../utilities/countries.json";

const MarkerInfoModal = props => {
  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
    setTimeout(() => {
      props.unsetActiveMarker();
    }, 500);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Country Info Modal</ModalHeader>
        <ModalBody>
          {/* {props.error.id === MARKER_ADD_FAIL ? (
            <Alert color="danger">{props.error.message}</Alert>
          ) : null} */}
          {/* <Form onSubmit={handleAddMarker}>
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
          </Form> */}
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // error: state.error,
    // auth: state.auth
    // markers: state.markers
  };
};

const actionCreators = {
  unsetActiveMarker
};

export default connect(mapStateToProps, actionCreators)(MarkerInfoModal);
