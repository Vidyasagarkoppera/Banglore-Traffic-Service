import Header from './Componates/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './Componates/Footer';
import Home from './Componates/Home';
import AllServices from './Componates/AllSercvices';
import ContactUs from './Componates/ContactUs';
import { useState } from 'react';

function App() {

  return (
    <div className="App pageContainer">
        <Header />
        <div className="containerWrap mainContent">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/allServices' element={<AllServices />} />
            <Route path='/contactUs' element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;

