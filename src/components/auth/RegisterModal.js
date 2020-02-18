import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/authActions";
import { REGISTER_FAIL } from "../../actions/types";
import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavbarBrand
} from "reactstrap";

const RegisterModal = props => {
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordTwo: ""
  });

  const toggle = () => setModal(!modal);

  const handleRegister = e => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      passwordTwo: formValues.passwordTwo
    };
    props.register(newUser);
  };

  const onChange = e => {
    const updatedValue = e.target.value;
    setFormValues({
      ...formValues,
      [e.target.name]: updatedValue
    });
  };
  return (
    <div>
      <NavbarBrand onClick={toggle} href="#">
        Register
      </NavbarBrand>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Register</ModalHeader>
        <ModalBody>
          {props.error.id === REGISTER_FAIL ? (
            <Alert color="danger">{props.error.message}</Alert>
          ) : null}
          <Form onSubmit={handleRegister}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={formValues.name}
                className="mb-3"
                onChange={onChange}
              />

              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formValues.email}
                className="mb-3"
                onChange={onChange}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formValues.password}
                className="mb-3"
                onChange={onChange}
              />
              <Label for="passwordTwo">Confirm Password</Label>
              <Input
                type="password"
                name="passwordTwo"
                id="passwordTwo"
                placeholder="Confirm Password"
                value={formValues.passwordTwo}
                className="mb-3"
                onChange={onChange}
              />
              <Button color="primary" style={{ marginTop: "2rem" }} block>
                Register
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
    error: state.error
  };
};

const actionCreators = {
  register
};

export default connect(mapStateToProps, actionCreators)(RegisterModal);
