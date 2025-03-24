import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from "./pages/home"; // Example pages
import Menu from "./pages/menu";
import Subcategories from "./pages/subcategories";
import Categoryproducts from "./pages/categoryproducts";
import NotFoundPage from './pages/notfoundpage';
import MenuManagement from './pages/menumanagement';
import MenuManagementAdd from './pages/menumanagementadd';
import MenuManagementSetting from './pages/menumanagementsetting';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import translations from './components/languagues';

function App() {
  const [language, setLanguage] = useState('en'); 

  const hideHeaderRoutes = ['/menu-managemnet', '/menu-managemnet-add', '/menu-managemnet-setting'];

  return (
    <Router>
       {!hideHeaderRoutes.includes(location.pathname) && (
        <Header language={language} setLanguage={setLanguage} />
      )}

      <Routes>
      <Route path="/subcategories" element={<Subcategories language={language} />} />
        {/* Correct usage of the Subcategories route, passing language prop */}
        <Route path="/" element={<Menu />} />
        <Route path="/home" element={<Home language={language}  />} />
        <Route path="/categoryproducts" element={<Categoryproducts language={language} />} />
        <Route path="/menu-managemnet" element={<MenuManagement />} />
        <Route path="/menu-managemnet-add" element={<MenuManagementAdd />} />
        <Route path="/menu-managemnet-setting" element={<MenuManagementSetting />} />
      </Routes>
      {!hideHeaderRoutes.includes(location.pathname) && (
        <Footer language={language}  />
      )}
    </Router>
  );
}

export default App;
