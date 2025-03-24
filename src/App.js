
import { NavLink } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Slider from './components/Slider';
import Product from './components/Product';
import Suppliers from './components/Suppliers';
import NewCollection from './components/NewCollection';
import {Routes, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Shop from './components/pages/Shop';

function App() {
  return (
    
      <div>
      <Navbar />
      <Routes>
        <Route patth='/' element={<div>Home Page</div>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Header />
      <HeroSection />
      <Slider />
      <Product />
      <Suppliers />
      <NewCollection />
    </div>
  
    
    
  );
}

export default App;
