import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import HomePage from './landing_page/Home/HomePage';
import Solar from './landing_page/Solar/Solar';
import Budget from "./landing_page/Solar/Budget"; 
import Navbar from "./landing_page/Navbar"; // Corrected Navbar import
import Roof from './scanning_page/Roof'; // Import Roof.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solar" element={<Solar />} /> {/* Fixed path */}
      <Route path="/budget" element={<Budget />} />
      <Route path="/scanning_page/roof" element={<Roof />} />
    </Routes>
  </BrowserRouter>
);
