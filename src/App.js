import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#00A9FC";
      showAlert("Darkmode has been enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#E4F0FF";
      showAlert("Lightmode has been enabled","success")
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar title="Text Formatter" mode={mode} toggleHandler={toggleMode} />
      <Alert alertMsg={alert} />
      <TextForm showAlertHandler={showAlert} titleform="Enter the text to analyse below" mode={mode} />
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>          
          <Route exact path="/">
          <TextForm showAlertHandler={showAlert} titleform="Enter the text to analyse below" mode={mode} />
          </Route>
        </Switch> */}
      {/* </Router> */}
    </>
  );
}

export default App;
