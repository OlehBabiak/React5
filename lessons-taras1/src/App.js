import logo from './logo.svg';
import './App.css';
import React from 'react'
import {ProductCard} from './components/card/Card'




function App() {
  return (
    <div className="App">
      <ProductCard title={'Chear'} price={'$50'} description={'For gamers'}/>
      <ProductCard title={'Table'}  description={'For room'}/>
      <ProductCard title={'Knife'} price={'$10'} description={'For kitchen'}/>
      <ProductCard title={'Lamp'} description={'For bathroom'}/>
  
    </div>
  );
}

export default App;
