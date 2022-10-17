import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {default as Navbar} from "./components/Navbar";
import {default as Home} from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='fixed md:static bg-black w-full text-white'>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
