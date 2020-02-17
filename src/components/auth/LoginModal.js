import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";
import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const LoginModal = props => {
  const [modal, setModal] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const toggle = () => setModal(!modal);

  const handleLogin = e => {
    e.preventDefault();
    const user = {
      email: formValues.email,
      password: formValues.password,
    };
    props.login(user);
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
      <NavLink onClick={toggle} href="#">
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          {props.error.id === "LOGIN_FAIL" ? (
            <Alert color="danger">
              {props.error.message}
            </Alert>
          ) : null}
          <Form onSubmit={handleLogin}>
            <FormGroup>
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
              <Button color="primary" style={{ marginTop: "2rem" }} block>
                Login
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
  login
};

export default connect(mapStateToProps, actionCreators)(LoginModal);
