import React, { useEffect } from "react";
import { connect } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar/Navbar";
import { loadUser } from "./actions/authActions";

function App(props) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <main className="container">
      <Navbar />
    </main>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, null)(App);
