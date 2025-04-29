import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import History from './pages/History'
import Gods from './pages/Gods'
import Products from './pages/Products'
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Register from './pages/Register';
import Login from './pages/Login';
import Duel from './pages/Duel';
import Checkout from './pages/Checkout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='/history' element={<History />} />
              <Route path='/gods' element={<Gods />} />
              <Route path='/products' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<Error />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/duel" element={<Duel />} /> 
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
