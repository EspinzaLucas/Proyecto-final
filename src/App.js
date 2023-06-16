import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Header from "./layout/Header";
import Nav from "./layout/Nav";

import Footer from "./layout/Footer";

import HomePage from "./pages/HomePage";
import HombresPage from "./pages/HombresPage";
import MujeresPage from "./pages/MujeresPage";
import NiñosPage from "./pages/NiñosPage";
import ContactosPage from "./pages/ContactosPage";

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
        <Nav/>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/hombres' element={<HombresPage/>}/>
        <Route path='/mujeres' element={<MujeresPage/>}/>
        <Route path='/niños' element={<NiñosPage/>}/>
        <Route path='/contactos' element={<ContactosPage/>}/>
        </Routes>
      </BrowserRouter>

    <Footer/>
    </div>
  );
}

export default App;
