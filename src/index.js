import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Card from './components/Card'
import Pages from './components/Pages.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar/>
      <Header/>
      <Card/>
      <Pages/>
      
  
  </React.StrictMode>
);