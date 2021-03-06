import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import App from './App';
import About from './About';
import Contact from './Contact';

const routing = (
  <BrowserRouter>
    <div>
      <h3>React Routing v6 - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));