import React, { useState } from 'react'
import Alert from './Component/Alert';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  const[mode, setMode]= useState("light");
  const[alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
  setAlert(null)
  },1500)
}
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#043742';
      showAlert("Darkmode has been successfully enabled","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode has been successfully enabled","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
    <Route exact path="/" element={<Textform text=" TextUtils-Enter The Text To Analyze" mode={mode} showAlert={showAlert}/>}/>
    <Route exact path="/about" element={<About mode={mode}/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App

