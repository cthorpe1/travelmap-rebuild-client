import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";
import Navbar from "./components/Navbar/Navbar";
import MapContainer from "./components/MapContainer/MapContainer";
import Splash from "./components/Splash/Splash";
import { loadUser } from "./actions/authActions";

function App(props) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const mainComponent = props.auth.isAuthenticated ? <MapContainer /> : <Splash />;

  return (
    <Container>
      <Navbar />
      {mainComponent}
    </Container>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(App);
