
import React, { useState, useEffect } from "react";
import { FaClock, FaGlobe } from "react-icons/fa";
import Logo from './../assets/img/LOGO 1.png'
const Header = ({ language, setLanguage }) => {

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
            <a className="navbar-brand" href="/">
                <img src={Logo} />
            </a>

            {/* Center - Clock */}
            <div className=" d-flex align-items-center">
                <FaClock className="me-2" />
                <span className="d-md-block d-none">Mon-Sun: 11:00 AM - 10:00 PM</span>
            </div>

            {/* Right Side - Language Dropdown */}
            <div className="dropdown">
                <button className="btn btn-white d-flex align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    {language === 'en' ? 'English' : 'עברית'} {/* Display language based on selection */}
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
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

export default Header;
