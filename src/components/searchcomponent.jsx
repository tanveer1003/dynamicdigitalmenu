import { FaFilter, FaSearch } from "react-icons/fa";
import './../assets/css/categories_slidable.css';
import './../assets/css/productCard.css';
import React, { useRef, useEffect, useState } from "react";
import { FaStar, FaList, FaTh, FaArrowRight } from "react-icons/fa";
import translations from '../../src/components/languagues';
function searchComponent() {
    return (
        <div className="px-2">
                    <div className="container rounded-3 bg-white p-2 ">
                        <div className="row px-2 justify-content-center">

                            {/* Text Box - 80% Width */}
                            
                            <div className="col-xl-8 col-lg-8 col-md-6 col-11">
                                <div className="input-group">
                                    <span className="input-group-text bg-white border border-end-0 pr-0" id="search-icon">
                                        <svg width="20" height="19" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6746 14.3373L11.3752 11.0379M11.3752 11.0379C11.9396 10.4736 12.3873 9.80359 12.6927 9.06621C12.9981 8.32883 13.1553 7.53852 13.1553 6.74039C13.1553 5.94226 12.9981 5.15194 12.6927 4.41457C12.3873 3.67719 11.9396 3.00719 11.3752 2.44283C10.8109 1.87847 10.1409 1.43079 9.40349 1.12536C8.66611 0.819927 7.8758 0.662724 7.07767 0.662724C6.27953 0.662724 5.48922 0.819927 4.75184 1.12536C4.01447 1.43079 3.34447 1.87847 2.78011 2.44283C1.64032 3.58261 1 5.12849 1 6.74039C1 8.35229 1.64032 9.89816 2.78011 11.0379C3.91989 12.1777 5.46577 12.8181 7.07767 12.8181C8.68956 12.8181 10.2354 12.1777 11.3752 11.0379Z" stroke="#CCCCCC" stroke-width="0.759689" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                    <input
                                    type="text"
                                    className="form-control border border-start-0 pl-0"
                                    placeholder={` ${translations[language].seachPlaceholder} ...`}
                                    aria-label="Search"
                                    aria-describedby="search-icon"
                                    style={{ paddingLeft: "0px" }}
                                    />
                                </div>
                            </div>
                            <div className="col-1  d-md-none d-block">
                                <button className=" bg-white border-0  text-dark">
                                <svg width="15" height="13" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6698 0.698597H1L5.26791 5.74541V9.23442L7.40187 10.3014V5.74541L11.6698 0.698597Z" stroke="#4B5563" stroke-width="1.28037" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                </button>
                            </div>

                            {/* Filter Button - 10% Width */}
                            <div className="col-xl-2 col-lg-2 col-md-3 d-md-block d-none ">
                                <button className="btn w-100 border bg-white text-dark">
                                    <FaFilter className="me-1" />  {translations[language].FilterText}
                                </button>
                            </div>

                            {/* Search Button - 10% Width */}
                            <div className="col-xl-2 col-lg-2 col-md-3 d-md-block d-none">
                                <button className="btn btn-primary w-100">
                                    <FaSearch className="me-1" /> {translations[language].SearchText}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
    );
}

export default searchComponent;