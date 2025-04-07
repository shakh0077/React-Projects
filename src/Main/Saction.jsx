import React, { useState } from "react";
import Navbar from "../Component/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "../Pages/Card.jsx";
import Footer from "../Component/Footer.jsx";
import Home from "../Pages/Home.jsx";
import Collection from "../Pages/Collection.jsx";
import About from "../Pages/About.jsx";
import Contacts from "../Pages/Contacts.jsx";
import Product from "../Pages/Product.jsx";
import Products from "../Pages/Products.jsx";
import Item from "../Pages/Item.jsx";
import { product } from "../mock/data.js";
import Winter from "../Seasons/Winter.jsx";
import Autumn from "../Seasons/Autumn.jsx";
import Summer from "../Seasons/Summer.jsx";
import MainCol from "../CollectionAll/MainCol.jsx";

import TranslationUz from '../transition/TransitionUz.js'
import TranslationRu from '../transition/TransitionRu.js'
import TranslationEng from '../transition/TransitionEng.js'
import { initReactI18next } from "react-i18next";
import i18next from "i18next";



i18next.use(initReactI18next).init({
  resources:{
    en:{translation:TranslationEng},
    uz:{translation:TranslationUz},
    ru:{translation:TranslationRu}
  },
  lng:'en',
  fallbackLng:'en'
})




function Saction() {
  const [data]=useState(product)

  return (
    <BrowserRouter>
    <div>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card" element={<Card />} />
        <Route path="collection" element={<Collection />}>
        <Route path="winter" element={<Winter/>}/>
        <Route path="autumn" element={<Autumn/>}/>
        <Route path="summer" element={<Summer/>}/>
        <Route path="all" element={<MainCol/>}/>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path='product-catigori/:id' element={<Product/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='item/:id' element={<Item/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default Saction;
