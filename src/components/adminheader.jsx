
import React, { useState, useEffect } from "react";
import { FaClock, FaGlobe } from "react-icons/fa";
import Logo from './../assets/img/LOGO 1.png'
const AdminHeader = ({ language, setLanguage }) => {

     const [currentTime, setCurrentTime] = useState(new Date());
    
        // Update time every second
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);
            return () => clearInterval(interval);
        }, []);
    
        const [selectedProduct, setSelectedProduct] = useState(null);
        //const [language, setLanguage] = useState('en');  // Store language selection
        
        // Handle language change
        const handleLanguageChange = (e) => {
            setLanguage(e.target.value);
        };
    return (
        <nav className="navbar   px-3 d-flex justify-content-between">
            {/* Left Side - Logo */}
            <a className="navbar-brand" href="#">
                Menu Management
            </a>

            {/* Right Side - Language Dropdown */}
            <div className="dropdown">
                <button
                    className="btn btn-white d-flex align-items-center"
                    type="button"
                    id="languageDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <FaGlobe className="me-1" /> {language === 'en' ? 'EN' : 'עברית'}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                    <li>
                        <button className="dropdown-item" onClick={() => setLanguage('en')}>English</button>
                    </li>
                    <li>
                        <button className="dropdown-item" onClick={() => setLanguage('he')}>עברית</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminHeader;
