
import React, { useState, useEffect } from "react";
import { FaClock, FaGlobe } from "react-icons/fa";
import Logo from './../assets/img/LOGO 1.png'
import translations from '../../src/components/languagues';
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
            

            {/* Center - Clock */}
            <div className=" d-flex align-items-center">

                {/* 
                <span className="me-2" >
                    <svg width="26" height="25" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_141_2898)">
                        <path d="M10.1092 18.3333C14.7116 18.3333 18.4425 14.6024 18.4425 10C18.4425 5.39762 14.7116 1.66666 10.1092 1.66666C5.50684 1.66666 1.77588 5.39762 1.77588 10C1.77588 14.6024 5.50684 18.3333 10.1092 18.3333Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.1094 5V10L13.4427 11.6667" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_141_2898">
                        <rect width="20" height="20" fill="white" transform="translate(0.109375)"/>
                        </clipPath>
                        </defs>
                    </svg>

                </span>
                <span className="d-md-block d-none"> {translations[language].headerTiming} </span>
                */}
            </div>

            {/* Left Side - Logo */}
            <a className="navbar-brand" href="/">
                <div className="d-flex flex-column justiy-content-center">
                    <span className="text-center">
                        <img src={Logo} />
                    </span>
                    <span style={{fontSize:14}}>
                         Restaurant Name
                    </span>
                </div>
            </a>

            {/* Right Side - Language Dropdown */}
            <div className="dropdown">
                <button className="btn btn-white d-flex flex-column align-items-center" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="px-3">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_141_2902)">
                            <path d="M10.1092 18.3333C14.7116 18.3333 18.4425 14.6024 18.4425 10C18.4425 5.39762 14.7116 1.66666 10.1092 1.66666C5.50684 1.66666 1.77588 5.39762 1.77588 10C1.77588 14.6024 5.50684 18.3333 10.1092 18.3333Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.1092 1.66666C7.96941 3.91346 6.77588 6.89728 6.77588 10C6.77588 13.1027 7.96941 16.0865 10.1092 18.3333C12.249 16.0865 13.4425 13.1027 13.4425 10C13.4425 6.89728 12.249 3.91346 10.1092 1.66666Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.77588 10H18.4425" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_141_2902">
                            <rect width="20" height="20" fill="white" transform="translate(0.109375)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>
                    {language === 'en' ? 'EN' : 'עברית'} {/* Display language based on selection */}
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
