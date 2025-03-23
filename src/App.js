
import { NavLink } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Slider from './components/Slider';
import Product from './components/Product';
import Suppliers from './components/Suppliers';
import NewCollection from './components/NewCollection';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <HeroSection />
      <Slider />
      <Product />
      <Suppliers />
      <NewCollection />
    </>
    
  );
}

export default App;
