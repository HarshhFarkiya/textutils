import './App.css';
import Navbar from './components/navbar'
import Form from './components/form'
import Alert from './components/alert';
import React,{useState} from 'react'
//import Routes from "react-router-dom"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";
import About from './components/About';

function App() {
const [mode,setMode]=useState("light");
const[alertmsg, setAlert]=useState(null);
const msgSet = (msg, state)=>{
  setAlert({msg : msg,
   state : state 
  });
  setTimeout(() => {
    setAlert(null);
  }, 3000);
}
if(mode==="light")
{
  document.body.style.backgroundColor="lavender";
}
const changeMode=()=>{
  if(mode==="light")
  {
    setMode("dark");
    document.body.style.backgroundColor="grey";
  }
  else{
    setMode("light");
    document.body.style.backgroundColor="lavender";
  }
} 
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} modef={changeMode}/>
    <Alert msg={alertmsg}/>
    <div className="container" >
    <Routes>
    <Route path="/" element={<Form className ="my-10" heading="Enter text below to analyze" mode={mode} alert={msgSet}/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}
export default App;
