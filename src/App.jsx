import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home"; // Example pages
import Menu from "./pages/menu";
import Subcategories from "./pages/subcategories";
import Categoryproducts from "./pages/categoryproducts";
import NotFoundPage from './pages/notfoundpage';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {

    return (
      <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/home" element={<Home />} />
                <Route path="/subcategories" element={<Subcategories />} />
                <Route path="/categoryproducts" element={<Categoryproducts />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );

  /*
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  */
}

export default App
