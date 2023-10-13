import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import { Nav } from './component/Nav';
import { Search } from './component/Search';
import { Preview } from './component/Preview';
import { Bundler } from './component/Bundler';
import { Main } from './component/Main';

import './style/bundler.css'
import './style/card.css'
import './style/main.css'
import './style/nav.css'
import './style/preview.css'
import './style/search.css';
import './style/sidebar.css'
import './index.css';


const Container = function() {
  return (
    <div className='container'>
        <Preview />
        <Nav />
      <div className='sidebar'>
        <Search />
        <Bundler />
        <div className='footer'><p>&#169; 2023 Sulthoni development. All rights reserved.</p></div>
      </div>
        <Main />

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
