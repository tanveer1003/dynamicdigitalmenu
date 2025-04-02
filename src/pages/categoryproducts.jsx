
import Footer from './../components/footer';
import Header from './../components/header';
import Searchcomponent from './../components/searchcomponent';
import ProductCard from './../components/productcard';
import ReadMoreText from './../components/readmore';
import { FaFilter, FaSearch } from "react-icons/fa";
import './../assets/css/categories_slidable.css';
import './../assets/css/productCard.css';
import './../assets/css/subcategory_card.css';
import React, { useRef, useEffect, useState } from "react";
import { FaStar, FaList, FaTh, FaArrowRight } from "react-icons/fa";
import wheatIconIcon from './../assets/icons/Vector-wheat.png';
import leafIcon from './../assets/icons/Vector-leaft.png';
import chilleIcon from './../assets/icons/Vector-chille.png';
import moreIcon from './../assets/icons/Vector-more.png';
import translations from '../../src/components/languagues';

import category1 from './../assets/img/category-1.png';
import category2 from './../assets/img/category-2.png';
import category3 from './../assets/img/category-3.png';
import category4 from './../assets/img/category-4.png';

import subcategory1 from './../assets/img/drinks-subcategories-1.png';
import subcategory2 from './../assets/img/drinks-subcategories-2.png';
import subcategory3 from './../assets/img/drinks-subcategories-3.png';

import drink1 from './../assets/img/drink-1.jpg';
import drink2 from './../assets/img/drink-2.jpg';
import drink3 from './../assets/img/drink-3.jpg';
import drink4 from './../assets/img/drink-4.jpg';
import drink5 from './../assets/img/drink-5.jpg';
import drink6 from './../assets/img/drink-6.jpg';

function CategoryproductsPage({ language }) {

    const categories = [
        { name: "Appetizers", image: category1 },
        { name: "Main Course", image: category2 },
        { name: "Desserts", image: category3 },
        { name: "Drinks", image: category4 },
        { name: "Main Course", image: category1 },
        { name: "Desserts", image: category2 },

    ];

    const [isGrid, setisGrid] = useState(true);

    const Categories = () => {
        const scrollRef = useRef(null);
        const [scrollWidth, setScrollWidth] = useState(1);
        const [scrollLeft, setScrollLeft] = useState(0);

        useEffect(() => {
            const updateScrollWidth = () => {
                if (scrollRef.current) {
                    const totalScrollableWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                    setScrollWidth(totalScrollableWidth > 0 ? totalScrollableWidth : 1); // Ensure it�s never 0
                }
            };
            updateScrollWidth();
            window.addEventListener("resize", updateScrollWidth);
            return () => window.removeEventListener("resize", updateScrollWidth);
        }, []);

        const handleScroll = () => {
            setScrollLeft(scrollRef.current.scrollLeft);
        };

        return (

            <div className="container pt-1">
                <div className="section-header d-flex justify-content-between align-items-center">
                    <div className="header-left d-flex align-items-center">
                        <h2 className="ml-2">Categories</h2>
                    </div>
                    <div className="header-right">
                        <button className='bg-light border border-0' onClick={() => setisGrid(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><path fill="#007bff" d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"/></svg>
                        </button>
                        <button className='bg-light border border-0' onClick={() => setisGrid(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="#007bff" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="007bff" d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 1.995 1.85L21 15v4a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-4a2 2 0 0 1 1.85-1.995L15 13zM9 15H5v4h4zm10 0h-4v4h4zm0-12a2 2 0 0 1 1.995 1.85L21 5v4a2 2 0 0 1-1.85 1.995L19 11h-4a2 2 0 0 1-1.995-1.85L13 9V5a2 2 0 0 1 1.85-1.995L15 3zM9 3a2 2 0 0 1 1.995 1.85L11 5v4a2 2 0 0 1-1.85 1.995L9 11H5a2 2 0 0 1-1.995-1.85L3 9V5a2 2 0 0 1 1.85-1.995L5 3zm10 2h-4v4h4zM9 5H5v4h4z"/></g></svg>
                        </button>
                    </div>
                </div>

                {/* Scrollable Row */}
                <div className="categories-container">
                    {categories.map((category, index) => (
                        <div key={index} className="category-card" style={{ backgroundImage: `url(${category.image})` }}>
                            <div className="overlay"></div>
                            <h5 className="category-text">{category.name}</h5>
                        </div>
                    ))}
                </div>

                {/* Scrollbar Indicator */}
                {/*
                <div className="scroll-indicator">
                    <div
                        className="scroll-indicator-fill"
                        style={{
                            width: scrollWidth > 1 ? `${(scrollLeft / scrollWidth) * 100}%` : "0%",
                        }}
                    ></div>
                </div>
                */}
            </div>
        );
    };

    const productData = [
        {
            id: 1,
            title: "Fermented grape juice Wines",
            price: "$15.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink1,
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        {
            id: 2,
            title: "sparkling wines",
            price: "$12.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink2,
            tags: ["Vegan", "Spicy"],
        },
        {
            id: 3,
            title: "Red Wines",
            price: "$8.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink3,
            tags: ["Spicy"],
        },
        {
            id: 4,
            title: "Fermented grape juice Wines",
            price: "$18.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink4,
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        {
            id: 5,
            title: "sparkling wines",
            price: "$18.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink5,
            tags: ["Vegan", "Spicy"],
        },
        {
            id: 6,
            title: "Red Wines",
            price: "$18.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink6,
            tags: ["Spicy"],
        },
        // Add more products as needed
    ];

    const formatTag = (tag) => {
        return tag.toLowerCase().replace(/\s+/g, "-");
    };


    const ProductsSection = () => {
        const [selectedProduct, setSelectedProduct] = useState(null);
        return (
            <div className="products-section container pb-4">


                <div className="row">
                    {productData.map((product) => (
                        isGrid ?
                            <div key={product.id} className=" p-2 col-lg-6 col-xl-4 col-md-6">
                                <button type="button" className="read-more-btn" data-bs-toggle="modal"
                                                data-bs-target="#productModal"
                                                onClick={() => setSelectedProduct(product)}>
                                <div className="product-card">
                                    <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                                        <div className="overlay">
                                            <span className="product-category-tag">{product.tags[0]}</span>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <div className="product-row">
                                            <h5 className="product-title">{product.title}</h5>
                                            <div className="product-price">{product.price}</div>
                                        </div>
                                        <p className="product-description">{product.description.substring(0, 100)}</p>
                                        <div className="product-row">
                                            <div className="product-tags">
                                                {product.tags.map((tag, index) => (
                                                    <div key={index} className={`tag ${formatTag(tag)}`}>
                                                        {tag === "Gluten Free" && <img style={{ height: 10, width: 10 }} src={wheatIconIcon} alt="Vegan Icon" />}
                                                        {tag === "Spicy" && <img style={{ height: 10, width: 10 }} src={chilleIcon} alt="Spicy Icon" />}
                                                        {tag === "Vegan" && <img style={{ height: 10, width: 10 }} src={leafIcon} alt="Vegan Icon" />}
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            <div className="g-2 d-flex align-items-center">
                                                <span >Read More</span> 
                                                <span style={{ paddingLeft:"5px"}}> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512">
                                                        <path fill="none" stroke="#0d6efd" stroke-linecap="round" stroke-linejoin="round" stroke-width="41" d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48" />
                                                    </svg>
                                                </span>
                                            </div>
                                                    
                                        </div>

                                    </div>
                                </div>
                                </button>
                            </div>
                            :
                            <div key={product.id} className=" p-2 col-md-12">
                                <div className="product-card d-flex justify-content-between">
                                    <div className="product-details w-100 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="product-row">
                                                <h5 className="product-title">{product.title}</h5>
                                                <div className="product-price">{product.price}</div>
                                            </div>
                                            <p className="product-description"> <ReadMoreText
                                            text={ product.description
                                            }  // Adjust the maxLength as needed
                                            /> </p>
                                        </div>
                                        <div className="product-row">
                                            <div className="product-tags">
                                                {product.tags.map((tag, index) => (
                                                    <div key={index} className={`tag ${formatTag(tag)}`}>
                                                        {tag === "Gluten Free" && <img style={{ height: 10, width: 10 }} src={wheatIconIcon} alt="Vegan Icon" />}
                                                        {tag === "Spicy" && <img style={{ height: 10, width: 10 }} src={chilleIcon} alt="Spicy Icon" />}
                                                        {tag === "Vegan" && <img style={{ height: 10, width: 10 }} src={leafIcon} alt="Vegan Icon" />}
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                    <div className=" product-grid" style={{
                                        backgroundImage: `url(${product.image})`,
                                        //width: "257px",  // Adjust as needed
                                        //height: "257px",
                                        //backgroundSize: "cover",
                                        //backgroundPosition: "center",
                                        //backgroundRepeat: "no-repeat",
                                        //flexShrink: 0
                                    }}>
                                        <div className="overlay">
                                            <span className="product-category-tag">{product.tags[0]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    ))}
                </div>
                {/* Bootstrap Modal */}
                <div
                    className="modal border border-0 fade "
                    id="productModal"
                    tabIndex="-1"
                    aria-labelledby="productModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog border border-0">
                        <div className="modal-content bg-transparent border border-0">
                            <div className="modal-header border border-0">
                                <button
                                    type="button"
                                    className="btn-close text-white"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {selectedProduct && (
                                    <>
                                        <div key={selectedProduct.id} className="product-card">
                                            <div className="product-image" style={{ backgroundImage: `url(${selectedProduct.image})` }}>
                                                <div className="overlay">
                                                    <span className="product-category-tag">{selectedProduct.tags[0]}</span>
                                                </div>
                                            </div>
                                            <div className="product-details">
                                                <div className="product-row">
                                                    <h5 className="product-title">{selectedProduct.title}</h5>
                                                    <div className="product-price">{selectedProduct.price}</div>
                                                </div>
                                                <p className="product-description">{selectedProduct.description}</p>
                                                <div className="product-row">
                                                    <div className="product-tags">
                                                        {selectedProduct.tags.map((tag, index) => (
                                                            <div key={index} className={`tag ${formatTag(tag)}`}>
                                                                {tag === "Gluten Free" && <img style={{ height: 10, width: 10 }} src={wheatIconIcon} alt="Vegan Icon" />}
                                                                {tag === "Spicy" && <img style={{ height: 10, width: 10 }} src={chilleIcon} alt="Spicy Icon" />}
                                                                {tag === "Vegan" && <img style={{ height: 10, width: 10 }} src={leafIcon} alt="Vegan Icon" />}
                                                                {tag}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <button type="button" className="read-more-btn" data-bs-toggle="modal"
                                                        data-bs-target="#productModal">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512">
                                                            <path fill="none" stroke="#0d6efd" stroke-linecap="round" stroke-linejoin="round" stroke-width="41" d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const CategoryTag = ({ subcategory, category, imageUrl, backgroundColor }) => {
        return (
            <div className="category-tag" style={{ backgroundColor }}>
                <div className="category-info">
                    <h3 className="subcategory">{subcategory}</h3>
                    <p className="category">{category}</p>
                </div>
                <img src={imageUrl} alt={subcategory} className="category-image" />
            </div>
        );
    };

    const drinksData = [
        {
            id: 1,
            subcategory: "Wine",
            background: "#373738",
            category: "Drink",
            image: subcategory1,
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        {
            id: 2,
            subcategory: "Beer",
            background: "#827C64",
            category: "Drink",
            image: subcategory2,
            tags: ["Gluten Free", "Spicy"],
        },
        {
            id: 3,
            subcategory: "Spirits &\n Liquors",
            background: "#C6552D",
            category: "Drink",
            image: subcategory3,
            tags: ["Vegan"],
        },
        {
            id: 4,
            subcategory: "Cocktails",
            background: "#B1834E",
            category: "Drink",
            image: subcategory2,
            tags: ["Gluten Free", "Spicy"],
        },
        
        // Add more products as needed
    ];

    const ProductsPopup = () => {
        return (
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    return (


        <div >

            <div className='pt-2' style={{ background: "rgb(243 246 250)" }} >

                <div className="px-2">
                    
                    <div className="container py-2 bg-white d-flex align-items-center mb-3">
                        {/* Search Input (95% on mobile, 80% on desktop) */}
                        <div className="flex-grow-1 me-2 w-sm-95 w-md-65">
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

                        {/* Filter Button (Hidden on desktop) */}

                        <button className=" d-md-none bg-white border-0  text-dark">
                            <svg width="15" height="13" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6698 0.698597H1L5.26791 5.74541V9.23442L7.40187 10.3014V5.74541L11.6698 0.698597Z" stroke="#4B5563" stroke-width="1.28037" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>

                        {/* Two Buttons (Hidden on mobile, 10% each on desktop) */}
                        <div className="d-none d-md-flex gap-2" style={{ width: "35%" }}>
                                <button className="btn w-100 border bg-white text-dark">
                                    <FaFilter className="me-1" />  {translations[language].FilterText}
                                </button>
                            <button className="btn btn-primary w-100">
                                    <FaSearch className="me-1" /> {translations[language].SearchText}
                                </button>
                        </div>
                    </div>
                </div>
                <ProductsPopup />
                <Categories />
                <div className="container my-5">
                    <div className="section-header d-flex justify-content-between align-items-center">
                        <div className="header-left d-flex align-items-start">
                            <FaStar className="star-icon" />
                            <h2 className="ml-2">Drinks Subcategories</h2>
                        </div>
                    </div>

                    {/* Scrollable Row */}
                    <div className="categories-container">
                        {drinksData.map((drinks, index) => (
                            <CategoryTag
                                subcategory={drinks.subcategory}
                                category={drinks.category}
                                imageUrl={drinks.image}
                                backgroundColor={drinks.background} // Change this color as needed
                            />
                        ))}
                    </div>

                </div>
                <ProductsSection />
            </div>
        </div>
    )
}

export default CategoryproductsPage
