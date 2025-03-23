
import React, { useState, useEffect } from "react";
import { FaClock, FaGlobe } from "react-icons/fa";
import Logo from './../assets/img/LOGO 1.png'
const AdminHeader = () => {

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
                    <FaGlobe className="me-1" /> Change Language
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                    <li><a className="dropdown-item" href="#">EN - English</a></li>
                    <li><a className="dropdown-item" href="#">ES - Espa�ol</a></li>
                    <li><a className="dropdown-item" href="#">FR - Fran�ais</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminHeader;
