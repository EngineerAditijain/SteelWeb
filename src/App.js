import logo from './logo.svg';
import './App.css';
import { Home } from './component/Home';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import BottomNavbar from './component/Navbar/BottomNavbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <BottomNavbar/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
    </>
   
  );
}

export default App;
