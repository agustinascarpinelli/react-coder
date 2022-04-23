
import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';

const App=()=> {
  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
       <Route path='/' element={<h1>HOME</h1>}/>
       <Route path='/list' element={<ItemListContainer/>}/>
      <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
