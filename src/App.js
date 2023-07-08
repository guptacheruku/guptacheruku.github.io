import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect  } from 'react';
import HomePage from './components/home'
import Signup from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';
import BookList from './components/booklist';
import logout from './components/logout';
import Cart from './components/cart';

function App() {

  const isAuthenticated = !!sessionStorage.getItem('user');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = sessionStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    if(cartItems.length > 0)
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
    // sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  return (
    <div>
    <Router>
      <Routes>
      <Route path='/' element={ isAuthenticated ? <Dashboard/> : <HomePage/>}/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/logout' element={<HomePage/>}/>
      {/* <Route path='/booklist' element={<BookList/>} /> */}
      <Route path="/booklist" element={<BookList addToCart={addToCart}/>} />
      <Route path='/cart' element={<Cart cartItems={cartItems} />}/>
      </Routes>
    </Router>
    
    </div>
  )
}

export default App
