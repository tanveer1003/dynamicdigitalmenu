import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom";
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
import ProductManagement from './pages/productmanagement';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import translations from './components/languagues';

function AppContent() {
  const [language, setLanguage] = useState('he');
  const location = useLocation(); // Now this works correctly

  const hideHeaderRoutes = [
    '/',
    '/menu-managemnet',
    '/menu-managemnet-add',
    '/menu-managemnet-setting'
  ];

  const hideFooterRoutes = [
    '/',
    '/',
    '/',
    '/menu-managemnet',
    '/menu-managemnet-add',
    '/menu-managemnet-setting',
    '/product-managemnet'
  ];


  //const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header language={language} setLanguage={setLanguage} />}
      
      <Routes>
        <Route path="/subcategories" element={<Subcategories language={language} />} />
        <Route path="/" element={<Menu language={language} setLanguage={setLanguage} />} />
        <Route path="/home" element={<Home language={language} />} />
        <Route path="/categoryproducts" element={<Categoryproducts language={language} />} />
        <Route path="/menu-managemnet" element={<MenuManagement />} />
        <Route path="/menu-managemnet-add" element={<MenuManagementAdd />} />
        <Route path="/menu-managemnet-setting" element={<MenuManagementSetting />} />
        <Route path="/product-managemnet" element={<ProductManagement />} />
      </Routes>

     {/*    {!hideFooterRoutes.includes(location.pathname) && <Footer language={language} />} */}
    </>
  );
}
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
