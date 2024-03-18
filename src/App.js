import React from 'react';
import './style/style.scss'
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import FooterNav from './components/FooterNav';
import Intro from './components/Intro';
import Achievement from './components/Achievement';
import Products from './components/Products';
import Subscription from './components/Subscription';
import Reviews from './components/Reviews';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='page'>
        <div className='main'>
          <NavMenu/>
          <Intro/>
          <Achievement/>
          <Products/>
          <Subscription/>
          <Reviews/>
        </div>
      </div>

      <FooterNav/>
      <Footer/>
    </div>
  );
}

export default App;
