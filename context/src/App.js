import React from 'react'
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import ContextProvider from './components/ContextProvider';



export default function App() {
  return (
    <ContextProvider>
      <Header/>
      <Counter/>
    </ContextProvider>
  );
}
