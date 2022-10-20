import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {default as Navbar} from "./components/Navbar";
import {default as Home} from "./components/Home";
import {default as Vehicles} from "./components/Vehicles";
import {default as Shopping} from "./components/Shopping";
import {default as Inventory} from "./components/Inventory";




function App() {
  return (
    <div>
      <BrowserRouter>
      <div className='fixed md:static bg-black w-full text-white'>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vehicles' element={<Vehicles/>}/>
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
