import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [apiResponse, setApiResponse] = useState({ response: "" });

  // useEffect(() => {
  //   fetch("http://localhost:3001/home")
  //     .then(res => res.text())
  //     .then(res => setApiResponse({ response: res }))
  //     .catch(err => console.log(err));
  // }, []);
  return <div className="App">
    <button type="button" className="btn btn-danger">TEST</button>
  </div>;
}

export default App;
