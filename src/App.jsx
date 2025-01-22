import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/E-commerce/Header';
import Footer from './components/E-commerce/Footer';
import Hero from './components/E-commerce/Hero';
import ProductCard from './components/E-commerce/ProductCard';
import ProductsList from './components/E-commerce/ProductsList';
// import Headers from './components/Tedd/Headers.jsx';
function App () {
  return(

    <>
    <Header/>
    <Footer/>
    <Hero/>
    <ProductsList/>
    <ProductCard/>


    {/* <Headers/> */}
    </>
  ) 
}
  
export default App;