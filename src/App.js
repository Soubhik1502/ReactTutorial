import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
        setalert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setalert(null);
        },1200);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#001b35';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");

    }
  }

  return (
    <>
    <Router>
        <Navbar title="TextBar" mode={mode} toggleMode={toggleMode} />
        <Alert alert = {alert} />
        <div className="container ">
        <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter text to Analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
    </Router>
    </>
  );
}

export default App;
