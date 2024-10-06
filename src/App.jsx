
import React from 'react';
import Navbar from './components/Navbar';
// import Home from './components/Home';
import Background from './components/Background';
  // Import Location component
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>,
    },
   
  ]);

  return (
    <>
      <RouterProvider router={router}>

      <div className="relative w-full h-screen bg-zinc-800"> {/*To give Background color for all the components */}

          <Background/>
          <Navbar/>
          {/* <Home/> */}
        </div>
      </RouterProvider>
    </>
  )
}

export default App;
