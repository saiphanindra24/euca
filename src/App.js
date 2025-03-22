
import { NavLink } from 'react-router-dom';
import './index.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <HeroSection />
    </>
    
  );
}

export default App;
