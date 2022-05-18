
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import { NotificationProvider } from './notification/Notification';
import Cashout from './components/Cashout/Cashout';
import ItemPromoContainer from './components/ItemPromoContainer/ItemPromoContainer';
import ItemPromoDetailContainer from './components/ItemPromoDetailContainer/ItemPromoDetailContainer';
import Home from './components/Home/Home';
import Login from './components/LogIn/LogIn';
import Signup from './components/SignUp/SignUp';
import { AuthProvider } from './context/AuthContext';

const App=()=> {
  return (
    <>
    <AuthProvider>
    <NotificationProvider>
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/list' element={<ItemListContainer/>}/>
       <Route path='/promo' element={<ItemPromoContainer/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
      <Route path='/promo/:productId' element={<ItemPromoDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Cashout' element={<Cashout/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </NotificationProvider>
    </AuthProvider>
    </>
  );
}

export default App;
