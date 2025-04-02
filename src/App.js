import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Slider from './components/Slider';
import Product from './components/Product';
import Suppliers from './components/Suppliers';
import NewCollection from './components/NewCollection';
import Login from './components/pages/Login';
import Shop from './components/pages/Shop';
import Cart from './components/pages/Cart';
import Payment from './components/pages/Payment';
import Success from './components/pages/Success';
import Failure from './components/pages/Failure';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Home Page: Now all homepage components are inside this route */}
        <Route path="/" element={
          <>
            <Header />
            <HeroSection />
            <Slider />
            <Product />
            <Suppliers />
            <NewCollection />
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
      </Routes>
    </div>
  );
}

export default App;
