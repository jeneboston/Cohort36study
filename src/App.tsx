import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Laout';
import Activity from './components/Activity/Activity';
import Counter from './components/Counter/Counter';
import Coctail from './components/Coctail/Coctail'; 
import ProductPage from './components/ProductPage/ProductPage';
import Products from './components/Products/Products';
import CityPage from './components/CityPage/CityPage';
import Sandwich from './components/Sandwich/Sandwich';
import RandomDog from './components/RandomDog/RandomDog';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Activity" element={<Activity />} />
      <Route path="/Counter" element={<Counter />} />
      <Route path="/Coctail" element={<Coctail />} /> 
      <Route path="/Products" element={<Products />} />
      <Route path="/Products/:productId" element={<ProductPage />} />
      <Route path="CityPage" element={<CityPage />} />
      <Route path="Sandwitch" element={<Sandwich/>} />
      <Route path='RandomDog' element={<RandomDog/>} />
    </Routes>
  );
}

export default App;
