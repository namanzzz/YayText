import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    setAlert(
      {
        msg: message,
        type: type
      }
    )

    setTimeout(() => {
      setAlert(null)
    }, 500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode has been enabled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark Mode has been disabled', 'success')
    }
  }

  return (
    <>


      <Navbar title="YayText" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />


      <div className="container my-3">
        <TextForm heading="Enter your text to analyze" showAlert={showAlert} mode={mode} />
      </div>


    </>


  );
}

export default App;
