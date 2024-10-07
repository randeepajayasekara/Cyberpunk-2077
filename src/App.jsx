import { useState } from 'react'
import Home from './routes/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {

  return (
    <>
      <div className='app'>
        <Header />    
        <Home />
        <Footer />
        
      </div>
    </>
  )
}

export default App
