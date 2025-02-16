import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import Alert from './Components/alert';
import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const [color, setColor] = useState('dark')
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)



  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = (newMode) => {
    if (newMode === 'dark') {
      setColor('white');
      setMode('dark');
      document.body.style.backgroundColor = '#052c65';
      showAlert("success", "Converted To Dark Mode")
    } else if (newMode === 'light') {
      setColor('black');
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success", "Converted To Light Mode")
    }
    else if (newMode === 'pink') {
      setColor('white');
      setMode('pink');
      document.body.style.backgroundColor = 'pink';
      showAlert("success", "Converted To Pink Mode")
    }
    else if (newMode === 'purple') {
      setColor('white');
      setMode('purple');
      document.body.style.backgroundColor = 'purple';
      showAlert("success", "Converted To Purple Mode")
    }
    
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
       <Navbar home="homo" features="future" mode={mode} color={color} toggleMode={toggleMode} /> 
       <Alert alert={alert} />
      <TextForm mode={mode} showAlert={showAlert}/></>
    },
    {
      path: "/about",
     
      
      element:<>
      <Navbar home="homo" features="future" mode={mode} color={color} toggleMode={toggleMode} /> 
      <Alert alert={alert} />
       <About mode={mode}/>
       </>
      
    },
    {
      path: "/Text-Editor-React",
      element: <>
        <Navbar home="homo" features="future" mode={mode} color={color} toggleMode={toggleMode} /> 
        <Alert alert={alert} />
        <TextForm mode={mode} showAlert={showAlert}/> {/* Or your specific editor component */}
      </>
    },{
    basename: "/Text-Editor-React"
    }
  ]);
  

  return (
    <div>
     
      
      <RouterProvider router={router} />

    </div>
  );
}

export default App;