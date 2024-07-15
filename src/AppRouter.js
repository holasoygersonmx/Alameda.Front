import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home/Home';
import { Store } from './pages/store/Store';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';
import { ShoppingCart } from './pages/shoppingCart/ShoppingCart';

export const AppRouter = () => {
    return <BrowserRouter>
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/store" element={<Store />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/shopping-cart" element={<ShoppingCart />} />
            </Routes>
        </div>
    </BrowserRouter>
}