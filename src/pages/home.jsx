
//import Footer from './../components/footer';
import Header from './../components/header';
import searchComponent from './../components/searchcomponent';
import { FaFilter, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import translations from '../../src/components/languagues';
import React, { useRef, useEffect, useState } from "react";
import category1 from './../assets/img/category-1.png';
import category2 from './../assets/img/category-2.png';
import category3 from './../assets/img/category-3.png';
import category4 from './../assets/img/category-4.png';
import category5 from './../assets/img/category-5.jpg';
import category6 from './../assets/img/category-6.jpg';
import category7 from './../assets/img/category-7.jpg';
import category8 from './../assets/img/category-8.jpg';
import category9 from './../assets/img/category-9.jpg';
import category10 from './../assets/img/category-10.jpg';
import category11 from './../assets/img/category-11.jpg';
import category12 from './../assets/img/category-12.jpg';

import setTitle from '../components/setTitle';

function Home({ language }) {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredCategories, setFilteredCategories] = useState(
        [
            { name: "Appetizers", image: category1 },
            { name: "Main Course", image: category2 },
            { name: "Desserts", image: category3 },
            { name: "Starters", image: category4 },
            { name: "Starters", image: category5 },
            { name: "Cocktails", image: category6 },
            { name: "Wines", image: category7 },
            { name: "Beer", image: category8 },
            { name: "Alcohol", image: category9 },
            { name: "Drinks", image: category10 },
            { name: "Desserts", image: category11 },
            { name: "Drinks", image: category12 },
        ]
    );

    const categoryTranslations = {
        "Appetizers": "מתאבנים",
        "Main Course": "מנה עיקרית",
        "Desserts": "קינוחים",
        "Starters": "מנות ראשונות",
        "Drinks": "משקאות",
        "Beer": "בירה",
        "Wines": "יינות",
        "Cocktails": "קוקטיילים",
        "Alcohol": "אלכוהול"
      };

    const categories = [
        { name: "Appetizers", image: category1 },
        { name: "Main Course", image: category2 },
        { name: "Desserts", image: category3 },
        { name: "Starters", image: category4 },
        { name: "Starters", image: category5 },
        { name: "Cocktails", image: category6 },
        { name: "Wines", image: category7 },
        { name: "Beer", image: category8 },
        { name: "Alcohol", image: category9 },
        { name: "Drinks", image: category10 },
        { name: "Desserts", image: category11 },
        { name: "Drinks", image: category12 },
    ];

    setTitle("Categories - DynamicDigitalMenu"); 

    

     // Submit handler for search
     const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent form submission and page reload

        // Filter categories based on search query
        const filtered = categories.filter(category =>
            category.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCategories(filtered);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
    

    const Categories = () => {
        return (
            <div className="container my-5">
                <h2 className="mb-4"
                     style={{ 
                        textAlign: language === "he" ? "right" : "left",
                        direction: language === "he" ? "rtl" : "ltr" 
                    }}
                    >
                    {language === "he"
                        ? translations[language].categoryTitle 
                        : translations[language].categoryTitle  } 
                </h2>
                {/* 
                    <div className="">
                        <div className="row justify-content-center"> 
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 mb-4 d-flex justify-content-center"  // Responsive column classes
                                >
                                    <Link className='text-white text-decoration-none' to="/subcategories">
                                        <div
                                            className="category-card p-3" 
                                            style={{
                                                height: '240px', 
                                                width: '240px',
                                                backgroundImage: `url(${category.image})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <div className="overlay"></div>
                                            <h5 className="category-text text-white m-0">{category.name}</h5>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className="d-flex flex-wrap justify-content-center gap-4 "> 
                            {categories.map((category, index) => (
                                <Link
                                    key={index}
                                    to="/subcategories"
                                    className="text-white text-decoration-none"
                                >
                                    <div
                                        className="category-card p-3 d-flex align-items-center justify-content-center"
                                        style={{
                                            height: "200px",
                                            width: "200px",
                                            backgroundImage: `url(${category.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    >
                                        <div className="overlay"></div>
                                        <h5 className="category-text text-white m-0 text-center">{category.name}</h5>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <hr />

                    </div>
                */}
                <div className="row" style={{ direction: language === "he" ? "rtl" : "ltr" }}>
                    {filteredCategories.map((category, index) => (

                        <div key={index} className="col-md-3 col-6 mb-4 text-center">
                            <Link className='text-white link-offset-2 link-underline link-underline-opacity-0' to="/subcategories">
                            {/* Outer container with relative positioning */}
                            <div 
                                className="category-card position-relative" 
                                style={{ 
                                backgroundImage: `url(${category.image})`,
                                paddingTop: '100%', // 1:1 aspect ratio (height = width)
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                }}
                            >
                                {/* Overlay (absolute positioned to cover the entire square) */}
                                <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
                                
                                {/* Text container (centered inside the square) */}
                                <div className="position-absolute top-50 start-50 translate-middle w-100 px-2">
                                <h5 className="category-text text-white mb-0">
                                    {language === "he" 
                                    ? categoryTranslations[category.name] || category.name 
                                    : category.name}
                                </h5>
                                </div>
                            </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        );
    };

    return (
        <div >

            <div className='pt-3' style={{ background: "rgb(243 246 250)" }} >
                <div className="px-2">
                    
                    {/*
                        <div className="container rounded-3 bg-white p-2 ">
                            <div className="row px-2 justify-content-center">

                                <div className="col-xl-8 col-lg-8 col-md-6 col-11">
                                    <div className="input-group">
                                        <span className="input-group-text bg-white border border-end-0 pr-0" id="search-icon">
                                            <svg width="20" height="19" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.6746 14.3373L11.3752 11.0379M11.3752 11.0379C11.9396 10.4736 12.3873 9.80359 12.6927 9.06621C12.9981 8.32883 13.1553 7.53852 13.1553 6.74039C13.1553 5.94226 12.9981 5.15194 12.6927 4.41457C12.3873 3.67719 11.9396 3.00719 11.3752 2.44283C10.8109 1.87847 10.1409 1.43079 9.40349 1.12536C8.66611 0.819927 7.8758 0.662724 7.07767 0.662724C6.27953 0.662724 5.48922 0.819927 4.75184 1.12536C4.01447 1.43079 3.34447 1.87847 2.78011 2.44283C1.64032 3.58261 1 5.12849 1 6.74039C1 8.35229 1.64032 9.89816 2.78011 11.0379C3.91989 12.1777 5.46577 12.8181 7.07767 12.8181C8.68956 12.8181 10.2354 12.1777 11.3752 11.0379Z" stroke="#CCCCCC" stroke-width="0.759689" stroke-linecap="round" stroke-linejoin="round" />
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
                                <div className="col-1  p-0    d-md-none d-block">
                                    <button className=" bg-white border-0  text-dark">
                                        <svg width="15" height="13" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6698 0.698597H1L5.26791 5.74541V9.23442L7.40187 10.3014V5.74541L11.6698 0.698597Z" stroke="#4B5563" stroke-width="1.28037" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </button>
                                </div>

                                <div className="col-xl-2 col-lg-2 col-md-3 d-md-block d-none ">
                                    <button className="btn w-100 border bg-white text-dark">
                                        <FaFilter className="me-1" />  {translations[language].FilterText}
                                    </button>
                                </div>

                                <div className="col-xl-2 col-lg-2 col-md-3 d-md-block d-none">
                                    <button className="btn btn-primary w-100">
                                        <FaSearch className="me-1" /> {translations[language].SearchText}
                                    </button>
                                </div>

                            </div>
                        </div>
                    */}
                    <form onSubmit={handleSearchSubmit} className="container py-2 bg-white d-flex align-items-center mb-3">
                        
                            {/* Search Input (95% on mobile, 80% on desktop) */}
                            <div className="flex-grow-1 me-2 w-sm-95 w-md-80">
                                <div className="input-group">
                                    <span className="input-group-text bg-white border border-end-0 pr-0" id="search-icon">
                                        <svg width="20" height="19" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6746 14.3373L11.3752 11.0379M11.3752 11.0379C11.9396 10.4736 12.3873 9.80359 12.6927 9.06621C12.9981 8.32883 13.1553 7.53852 13.1553 6.74039C13.1553 5.94226 12.9981 5.15194 12.6927 4.41457C12.3873 3.67719 11.9396 3.00719 11.3752 2.44283C10.8109 1.87847 10.1409 1.43079 9.40349 1.12536C8.66611 0.819927 7.8758 0.662724 7.07767 0.662724C6.27953 0.662724 5.48922 0.819927 4.75184 1.12536C4.01447 1.43079 3.34447 1.87847 2.78011 2.44283C1.64032 3.58261 1 5.12849 1 6.74039C1 8.35229 1.64032 9.89816 2.78011 11.0379C3.91989 12.1777 5.46577 12.8181 7.07767 12.8181C8.68956 12.8181 10.2354 12.1777 11.3752 11.0379Z" stroke="#CCCCCC" stroke-width="0.759689" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control border border-start-0 pl-0"
                                        placeholder={` ${translations[language].seachPlaceholder} ...`}
                                        aria-label="Search"
                                        aria-describedby="search-icon"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        style={{ paddingLeft: "0px" }}
                                    />
                                </div>
                            </div>

                            {/* Filter Button (Hidden on desktop) */}

                            <button className=" d-md-none bg-white border-0  text-dark">
                                <svg width="15" height="13" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6698 0.698597H1L5.26791 5.74541V9.23442L7.40187 10.3014V5.74541L11.6698 0.698597Z" stroke="#4B5563" stroke-width="1.28037" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>

                            {/* Two Buttons (Hidden on mobile, 10% each on desktop) */}
                            <div className="d-none d-md-flex gap-2" style={{ width: "20%" }}>
                                <button type="submit" className="btn btn-primary w-100">
                                        <FaSearch className="me-1" /> {translations[language].SearchText}
                                    </button>
                            </div>
                    </form>
                </div>

                <Categories />
            </div>


        </div>
    )
}

export default Home
