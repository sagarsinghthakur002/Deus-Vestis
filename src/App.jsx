import React from "react";
import { BrowserRouter } from "react-router-dom";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      {/* Main wrapper to ensure the layout covers the entire screen */}
      <div className="relative w-full h-screen bg-slate-800"> 
        {/* Background component */}
        <Background />  
        
        {/* Navbar component */}
        <Navbar />  

        
        {/* Uncomment and import Foreground when ready */}
        {/* <Foreground/> */}
        <Home/>
        

      </div>
    </BrowserRouter>
  );
}

export default App;
