import React from 'react';
import './App.css'; // Import Tailwind CSS file if it's not imported elsewhere
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Product from './components/Product';
import Blog from './components/Blog';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <About/>
    <Product/>
    <Blog/>
    </>
  );
}

export default App;
