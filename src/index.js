import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import About from './component/About';
import Nav from './component/Nav';
import Main from './component/Main';


import './style/about.css'
import './style/bundler.css'
import './style/card.css'
import './style/hero.css'
import './style/store.css'
import './style/nav.css'
import './style/preview.css'
import './style/search.css';
import './style/sidebar.css'
import './index.css';


const Container = function() {


  return (
    <div className='container'>
    <header>
        <Nav />
    </header>
    <section className='hero' id='hero'>
          <h1 className='hero-t'>BUNDLER</h1>
          <a className='clickable' href='#main'>START NOW</a>
    </section>
    <section className='about' id='about'>
        <About />
    </section>
    <section className='main' id='main'>
      <Main />
    </section>
    <div className='footer'><p>&#169; 2023 Sulthoni development. All rights reserved.</p></div>
    </div>
  )
}










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
