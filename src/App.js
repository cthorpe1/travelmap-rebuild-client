import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  const [apiResponse, setApiResponse] = useState({ response: "" });

  // useEffect(() => {
  //   fetch("http://localhost:3001/home")
  //     .then(res => res.text())
  //     .then(res => setApiResponse({ response: res }))
  //     .catch(err => console.log(err));
  // }, []);
  return (
    <BrowserRouter>
      <main className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
