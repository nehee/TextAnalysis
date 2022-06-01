import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert';

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const[Mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#495057';
      showAlert("Dark Mode has been enabled!!", "success ");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!!", "success ");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
  <>
 {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
 {/* <BrowserRouter> */}
 <Navbar title="TextAnalysis" mode = {Mode} toggleMode = {toggleMode} />
 <Alert alert = {alert}/>
 <div className="container my-3">
 
 {/* <About  mode = {Mode}/> */}
 {<TextForm showAlert = {showAlert} heading="Enter the text to analyze below..."  mode = {Mode} />}  
{/* <Routes> */}
          {/* <Route exact path="/about" element={<About  mode = {Mode}/>} /> */}
          
          {/* < Route exact path="/"
            element= {<TextForm showAlert = {showAlert} heading="Enter the text to analyze below..."  mode = {Mode} />} /> 
          </Routes> */}
</div>
          {/* </BrowserRouter> */}
  </>
  );
}

export default App;
