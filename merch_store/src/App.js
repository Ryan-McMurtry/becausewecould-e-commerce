import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ItemPage from "./Components/Shop/ItemPage";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Cart from "./Components/Shop/Cart";
import Tour from "./Components/Tour"; 
import Videos from "./Components/Videos";
import Contact from "./Components/Contact";
import Shop from "./Components/Shop/Shop";
import Outerwear from "./Components/SubCategories/Outerwear";
import Shirts from "./Components/SubCategories/Shirts";
import Hoodies from "./Components/SubCategories/Hoodies";
import Bottoms from "./Components/SubCategories/Bottoms";
import Sweatshirts from "./Components/SubCategories/Sweatshirts";
import Hats from "./Components/SubCategories/Hats";


function App() {
  return (
    <div className="App">

        <Header />
        <Routes className="app-routes">
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/hats" element={<Hats />} />
          <Route path="/shop/outerwear" element={<Outerwear />} />
          <Route path="/shop/t-shirts" element={<Shirts />} />
          <Route path="/shop/hoodies" element={<Hoodies />} />
          <Route path="/shop/bottoms" element={<Bottoms />} />
          <Route path="/shop/sweatshirts" element={<Sweatshirts />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:itemId" element={<ItemPage />} />
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
