
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
import closeIcon from './../assets/img/close-icon.png';

import productTranslations2 from '../languagues/productTranslations2';
//import { Modal } from 'bootstrap';
import setTitle from '../components/setTitle';

function CategoryproductsPage({ language }) {

    function useIsMobile() {
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
      
        useEffect(() => {
          const handleResize = () => setIsMobile(window.innerWidth <= 768);
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return isMobile;
      }

    const categories = [
        { id: 1 , name: "Appetizers", image: category1 },
        { id: 2 , name: "Main Course", image: category2 },
        { id: 3 , name: "Desserts", image: category3 },
        { id: 4 , name: "Drinks", image: category4 },
        { id: 5 , name: "Main Course", image: category1 },
        { id: 6 , name: "Desserts", image: category2 },

    ];

    const drinksData = [
        {
            id: 1,
            categoryId:1,
            subcategory: "Wine",
            background: "#373738",
            category: "Drink",
            image: subcategory1,
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        {
            id: 2,
            categoryId:4,
            subcategory: "Beer",
            background: "#827C64",
            category: "Drink",
            image: subcategory2,
            tags: ["Gluten Free", "Spicy"],
        },
        {
            id: 3,
            categoryId:1,
            subcategory: "Spirits &\n Liquors",
            background: "#C6552D",
            category: "Drink",
            image: subcategory3,
            tags: ["Vegan"],
        },
        {
            id: 4,
            categoryId:1,
            subcategory: "Cocktails",
            background: "#B1834E",
            category: "Drink",
            image: subcategory2,
            tags: ["Gluten Free", "Spicy"],
        },
        {
            id: 5,
            categoryId:2,
            subcategory: "Wine",
            background: "#373738",
            category: "Drink",
            image: subcategory1,
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        {
            id: 6,
            categoryId:3,
            subcategory: "Spirits &\n Liquors",
            background: "#C6552D",
            category: "Drink",
            image: subcategory3,
            tags: ["Vegan"],
        },
        {
            id: 7,
            categoryId:5,
            subcategory: "Cocktails",
            background: "#B1834E",
            category: "Drink",
            image: subcategory2,
            tags: ["Gluten Free", "Spicy"],
        },
        {
            id: 8,
            categoryId:6,
            subcategory: "Wine",
            background: "#373738",
            category: "Drink",
            image: subcategory1,
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        
        // Add more products as needed
    ];

     const productData = [
        {
            id: 1,
            title: "Fermented grape juice Wines",
            drink_category_id:1,
            price: 15.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink1,
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        {
            id: 2,
            title: "sparkling wines",
            drink_category_id:1,
            price: 12.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink2,
            tags: ["Vegan", "Spicy"],
        },
        {
            id: 3,
            title: "Red Wines",
            drink_category_id:1,
            price: 8.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink3,
            tags: ["Spicy"],
        },
        {
            id: 4,
            title: "Fermented grape juice Wines",
            drink_category_id:1,
            price: 18.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink4,
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        {
            id: 5,
            title: "sparkling wines",
            drink_category_id:1,
            price: 18.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink5,
            tags: ["Vegan", "Spicy"],
        },
        {
            id: 6,
            title: "Red Wines",
            drink_category_id:1,
            price: 18.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink6,
            tags: ["Spicy"],
        },
        {
            id: 7,
            title: "Red Wines",
            drink_category_id:2,
            price: 8.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink3,
            tags: ["Spicy"],
        },
        {
            id: 8,
            title: "Red Wines",
            drink_category_id:3,
            price: 18.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink6,
            tags: ["Spicy"],
        },
        {
            id: 9,
            title: "sparkling wines",
            drink_category_id:4,
            price: 18.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink5,
            tags: ["Vegan", "Spicy"],
        },
        {
            id: 10,
            title: "sparkling wines",
            drink_category_id:5,
            price: 18.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink5,
            tags: ["Vegan", "Spicy"],
        },
        {
            id: 11,
            title: "sparkling wines",
            drink_category_id:6,
            price: 18.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink5,
            tags: ["Vegan", "Spicy"],
        },
        {
            id: 12,
            title: "sparkling wines",
            drink_category_id:7,
            price: 18.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink5,
            tags: ["Vegan", "Spicy"],
        },
        {
            id: 13,
            title: "sparkling wines",
            drink_category_id:8,
            price: 18.00,
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: drink5,
            tags: ["Vegan", "Spicy"],
        },
        // Add more products as needed
    ];

    const categoryTranslations = {
        "Appetizers": "מנות פתיחה",
        "Main Course": "מנה עיקרית",
        "Desserts": "קינוחים",
        "Drinks": "משקאות",
    };

    setTitle("Products - DynamicDigitalMenu");

   

    const drinksDataHebrew = [
        {
          id: 1,
          categoryId: 1,
          subcategory: "יין", // Wine
          background: "#373738",
          category: "שתייה", // Drink
          image: subcategory1,
          tags: ["טִבעוֹנִי", "ללא גלוטן", "חָרִיף"], // Vegan, Gluten Free, Spicy
        },
        {
          id: 2,
          categoryId: 1,
          subcategory: "בירה", // Beer
          background: "#827C64",
          category: "שתייה", // Drink
          image: subcategory2,
          tags: ["ללא גלוטן", "חָרִיף"], // Gluten Free, Spicy
        },
        {
          id: 3,
          categoryId: 1,
          subcategory: "רוחות ואלכוהול", // Spirits & Liquors
          background: "#C6552D",
          category: "שתייה", // Drink
          image: subcategory3,
          tags: ["טִבעוֹנִי"], // Vegan
        },
        {
          id: 4,
          categoryId: 4,
          subcategory: "קוקטיילים", // Cocktails
          background: "#B1834E",
          category: "שתייה", // Drink
          image: subcategory2,
          tags: ["ללא גלוטן", "חָרִיף"], // Gluten Free, Spicy
        },
        {
            id: 5,
            categoryId: 2,
            subcategory: "יין", // Wine
            background: "#373738",
            category: "שתייה", // Drink
            image: subcategory1,
            tags: ["טִבעוֹנִי", "ללא גלוטן", "חָרִיף"], // Vegan, Gluten Free, Spicy
          },
          {
            id: 6,
            categoryId: 3,
            subcategory: "רוחות ואלכוהול", // Spirits & Liquors
            background: "#C6552D",
            category: "שתייה", // Drink
            image: subcategory3,
            tags: ["טִבעוֹנִי"], // Vegan
          },
          {
            id: 7,
            categoryId: 5,
            subcategory: "קוקטיילים", // Cocktails
            background: "#B1834E",
            category: "שתייה", // Drink
            image: subcategory2,
            tags: ["ללא גלוטן", "חָרִיף"], // Gluten Free, Spicy
          },
          {
            id: 8,
            categoryId: 4,
            subcategory: "קוקטיילים", // Cocktails
            background: "#B1834E",
            category: "שתייה", // Drink
            image: subcategory2,
            tags: ["ללא גלוטן", "חָרִיף"], // Gluten Free, Spicy
          },
        // Add more products as needed
      ];


    const [selectedSubCategory,setSelectedSubCategory] = useState(drinksData);//  useState(drinksData.filter(category =>category.categoryId == 1)); //useState(drinksData);
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
                <div className={` section-header d-flex ${language === "he" ? "flex-row-reverse" : ""} justify-content-between align-items-center `}>
                    <div className="header-left d-flex align-items-center">
                        <h2 className="ml-2" >{translations[language].categoryTitle}</h2>
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
                <div className="categories-container" style={{ direction: language === "he" ? "rtl" : "ltr" }}>
                    {categories.map((category, index) => (
                        <button key={index} onClick={ () => { 
                            const filteredDrinks = drinksData.filter(drink => drink.categoryId === category.id);
                            const drinkCategoryIds = filteredDrinks.map(drink => drink.id);
                            const filteredProducts = productData.filter(product =>
                                drinkCategoryIds.includes(product.drink_category_id)
                            );
            
                            setSelectedSubCategory(filteredDrinks);
                            setSelectedProducts(filteredProducts);
                            /*
                            setSelectedSubCategory( drinksData.filter( drink => drink.categoryId == category.id)); 
                            setSelectedProducts(productData.filter( product => product.drink_category_id ==  drink.categoryId ));
                            */
                            } } className="category-card" style={{ backgroundImage: `url(${category.image})` }}>
                            <div className="overlay"></div>
                            <h5 className="category-text">{language === "he"
                                    ? categoryTranslations[category.name] || category.name
                                    : category.name}</h5>
                        </button>
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

   

    const formatTag = (tag) => {
        return tag.toLowerCase().replace(/\s+/g, "-");
    };

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedDrink,setSelectedDrink] = useState(0);
    

    //const [selectedProduct, setSelectedProduct] =
    const [selectedProducts, setSelectedProducts] = useState(
        //productData
        productData.filter(product => product.drink_category_id == 1)
    );

    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [minPrice, maxPrice] = priceRange;

    // Update when user interacts with slider/inputs
    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent form submission and page reload

        // Filter categories based on search query
        const filtered = productData.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) 
            && product.price >= minPrice && product.price <= maxPrice
        );
        //alert();
        setSelectedProducts(filtered);
        
        const filteredProducts = productData.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = product.drink_category_id === selectedCategory;
            return matchesSearch && matchesCategory;
        });
        //setSelectedProducts(filteredProducts);
    };

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

   
    const [selectedCategory, setSelectedCategory] = useState(1); // Default category (1)

    // Filter products based on searchQuery and drink_category_id
    const filteredProducts = productData.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = product.drink_category_id === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const modalRef = useRef(null);
    const bsModal = useRef(null);

    useEffect(() => {
        if (selectedProduct && modalRef.current) {
        bsModal.current = new window.bootstrap.Modal(modalRef.current); //new Modal(modalRef.current);
        bsModal.current.show();
        }
    }, [selectedProduct]);

  const handleClick = (product) => {
    
    setSelectedProduct(product);
    //useEffect( );
    /*
    setTimeout(() => {
      if (bsModal.current) {
        bsModal.current.show();
      }
    }, 100);
    */
    //alert(selectedProduct.title);
    //alert(product.title);
  };


    const ProductsSection = () => {
        const [selectedProduct, setSelectedProduct] = useState(null);
        const isMobile = useIsMobile();
        return (
            <div className="products-section container pb-4">


                <div className={`row ${language === "he" ? "flex-row-reverse" : ""}`} style={{ direction: language === "he" ? "rtl" : "ltr" }}>
                    {selectedProducts.map((product) => (
                        isGrid ?
                            <div key={product.id} className="p-2 col-lg-6 col-xl-4 col-md-6 ">
                                <button type="button" className="read-more-btn w-100" data-bs-toggle="modal"
                                                data-bs-target="#productModal" onClick={() => setSelectedProduct(product) }>
                                <div className="product-card">
                                    <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                                        <div className="overlay">
                                            <span className="product-category-tag"> {language === "he"
                                                    ? productTranslations2[language][product.id].tags[0] 
                                                    : product.tags[0]} </span>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <div className={`product-row ${language === "he" ? "flex-row-reverse" : ""}`}>
                                            <h5 className="product-title"> {language === "he"
                                                    ? productTranslations2[language][product.id].title 
                                                    : product.title} </h5>
                                            <div className="product-price">₪ {product.price}</div>
                                        </div>
                                        <p className="product-description " style={language === "he" ? { marginBottom: 0, direction: 'rtl', textAlign: 'right' } : {textAlign: 'left'}}> 
                                        {language === "he"
                                                    ? <ReadMoreText
                                                    text={ productTranslations2[language][product.id].description.substring(0, isMobile ? 30 : 100)} 
                                                    lang={language} 
                                                    />  
                                                    : <ReadMoreText
                                                    text={ product.description.substring(0, isMobile ? 30 : 100) }  
                                                    lang={language} 
                                                    />  }
                                        </p>
                                        <div className="product-row">
                                            <div className="product-tags">
                                                {product.tags.map((tag, index) => (
                                                    <div key={index} className={`tag ${formatTag(tag)}`}>
                                                        {tag === "Gluten Free" && <img style={{ height: 10, width: 10 }} src={wheatIconIcon} alt="Vegan Icon" />}
                                                        {tag === "Spicy" && <img style={{ height: 10, width: 10 }} src={chilleIcon} alt="Spicy Icon" />}
                                                        {tag === "Vegan" && <img style={{ height: 10, width: 10 }} src={leafIcon} alt="Vegan Icon" />}
                                                        {language === "he"
                                                    ? productTranslations2[language][product.id].tags[index] 
                                                    : product.tags[index]}
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            <div className="g-2 d-flex align-items-center">
                                                <span style={{ paddingLeft:"5px"}}> 
                                                <span>  { language === "he"  ? "קרא עוד " :  "Read More " }</span> 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
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
                                <div className={`product-card d-flex justify-content-between ${language === "he" ? "flex-row-reverse" : ""}`}>
                                    <div className="product-details w-100 d-flex flex-column justify-content-between">
                                        <div>
                                            <div className={`product-row ${language === "he" ? "flex-row-reverse" : ""}`}>
                                                <h5 className="product-title">{language === "he"
                                                    ? productTranslations2[language][product.id].title 
                                                    : product.title}</h5>
                                                <div className="product-price">₪ {product.price}</div>
                                            </div>
                                            <p className="product-description" style={language === "he" ? { marginBottom: 0, direction: 'rtl', textAlign: 'right' } : {textAlign: 'left'}}>
                                                {language === "he"
                                                    ? <ReadMoreText
                                                    text={ productTranslations2[language][product.id].description.substring(0, isMobile ? 30 : 100)} 
                                                    lang={language} 
                                                    />  
                                                    : <ReadMoreText
                                                    text={ product.description.substring(0, isMobile ? 30 : 100) }  
                                                    lang={language} 
                                                    />  }
                                                  </p>
                                        </div>
                                        <div className="product-row">
                                            <div className="product-tags">
                                                {product.tags.map((tag, index) => (
                                                    <div key={index} className={`tag ${formatTag(tag)}`}>
                                                        {tag === "Gluten Free" && <img style={{ height: 10, width: 10 }} src={wheatIconIcon} alt="Vegan Icon" />}
                                                        {tag === "Spicy" && <img style={{ height: 10, width: 10 }} src={chilleIcon} alt="Spicy Icon" />}
                                                        {tag === "Vegan" && <img style={{ height: 10, width: 10 }} src={leafIcon} alt="Vegan Icon" />}
                                                        {language === "he"
                                                    ? productTranslations2[language][product.id].tags[index] 
                                                    : product.tags[index]}
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
                                            <span className="product-category-tag">{language === "he"
                                                    ? productTranslations2[language][product.id].tags[0] 
                                                    : product.tags[0]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    ))}
                </div>
                <div
                    className="modal border border-0 fade "
                    id="productModal"
                    tabIndex="-1"
                    aria-labelledby="productModalLabel"
                    aria-hidden="true"
                    style={{ "alignContent":"center"}}
                >
                    <div className="modal-dialog border border-0" style={{ maxWidth: 900 }}>
                        <div className="modal-content bg-transparent border border-0">
                            <div className="modal-header border border-0 ">
                                <button
                                    type="button"
                                    className="btn-close close-btn"
                                    style={{
                                        backgroundImage: `url(${closeIcon})`,
                                        width: '10px',
                                        height: '10px',
                                        marginRight:'10px',
                                        aspectRatio: '1',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {selectedProduct && (
                                    <>
                                        <div key={selectedProduct.id} className="product-card">
                                            <div class="card" style={{ width: '100%', position: 'relative', overflow: 'hidden' }} >
                                                <img src={selectedProduct.image} class="card-img-top" style={{ maxHeight: '70vh',overflowY: 'auto' }} alt="Card Image" />

                                                <span class="badge bg-primary position-absolute top-0 start-0 m-2">
                                                    {language === "he"
                                                        ? productTranslations2[language][selectedProduct.id].tags[0]
                                                        : selectedProduct.tags[0]}
                                                </span>

                                                <div class="card-body">
                                                    <div className="product-row">
                                                        <h5 className="product-title"  > {language === "he"
                                                            ? productTranslations2[language][selectedProduct.id].title
                                                            : selectedProduct.title} </h5>
                                                        <div className="product-price"> {language === "he"
                                                            ? "₪" : "₪"} {selectedProduct.price}</div>
                                                    </div>
                                                    <p className="product-description" style={language === "he" ? { marginBottom: 0, direction: 'rtl', textAlign: 'right' } : {}}> {language === "he"
                                                        ? productTranslations2[language][selectedProduct.id].description
                                                        : selectedProduct.description}
                                                    </p>
                                                    <div className="product-row">
                                                        <div className="product-tags">
                                                            {selectedProduct.tags.map((tag, index) => (
                                                                <div key={index} className={`tag ${formatTag(tag)}`}>
                                                                    {tag === "Gluten Free" && <img style={{ height: 10, width: 10 }} src={wheatIconIcon} alt="Vegan Icon" />}
                                                                    {tag === "Spicy" && <img style={{ height: 10, width: 10 }} src={chilleIcon} alt="Spicy Icon" />}
                                                                    {tag === "Vegan" && <img style={{ height: 10, width: 10 }} src={leafIcon} alt="Vegan Icon" />}
                                                                    {language === "he"
                                                                        ? productTranslations2[language][selectedProduct.id].tags[index]
                                                                        : selectedProduct.tags[index]}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* 
                                            <div className="product-image-model" style={{ backgroundImage: `url(${selectedProduct.image})` }}>
                                                <div className="overlay">
                                                    <span className="product-category-tag">{language === "he"
                                                        ? productTranslations[language][selectedProduct.title].tags[0] || selectedProduct.title
                                                        : selectedProduct.tags[0]}</span>
                                                </div>
                                            </div>
                                            <div className="product-details">
                                                <div className="product-row">
                                                    <h5 className="product-title"> {language === "he"
                                                        ? productTranslations[language][selectedProduct.title].title || selectedProduct.title
                                                        : selectedProduct.title} </h5>
                                                    <div className="product-price"> {language === "he"
                                                        ? "₪" : "₪"} {selectedProduct.price}</div>
                                                </div>
                                                <p className="product-description"> {language === "he"
                                                    ? productTranslations[language][selectedProduct.title].description || selectedProduct.title
                                                    : selectedProduct.description}
                                                </p>
                                                <div className="product-row">
                                                    <div className="product-tags">
                                                        {selectedProduct.tags.map((tag, index) => (
                                                            <div key={index} className={`tag ${formatTag(tag)}`}>
                                                                {tag === "Gluten Free" && <img style={{ height: 10, width: 10 }} src={wheatIconIcon} alt="Vegan Icon" />}
                                                                {tag === "Spicy" && <img style={{ height: 10, width: 10 }} src={chilleIcon} alt="Spicy Icon" />}
                                                                {tag === "Vegan" && <img style={{ height: 10, width: 10 }} src={leafIcon} alt="Vegan Icon" />}
                                                                {language === "he"
                                                                    ? productTranslations[language][selectedProduct.title].tags[index] || selectedProduct.title
                                                                    : selectedProduct.tags[index]}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            */ }
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

    const CategoryTag = ({ subcategory,id, category, imageUrl, backgroundColor }) => {
        return (
            <button type="button" onClick={() =>  setSelectedProducts(productData.filter(product => product.drink_category_id == id)) } className="category-tag" style={{ border:0, backgroundColor: backgroundColor }}>
                <div className="category-info">
                    <h3 className="subcategory"> {language === "he" ? drinksDataHebrew.filter( product => product.id == id)[0] .subcategory  : subcategory} </h3>
                    <p className="category">{language === "he" ? drinksDataHebrew.filter( product => product.id == id)[0] .category  : category}</p>
                </div>
                <img src={imageUrl} alt={subcategory} className="category-image" />
            </button>
        );
    };

    
    return (
        <div >

            <div className='pt-2' style={{ background: "rgb(243 246 250)" }} >

                <div className="px-2">
                    
                    <form onSubmit={handleSearchSubmit} className="container py-2 bg-white d-flex align-items-center mb-3">
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
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    aria-describedby="search-icon"
                                    style={{ paddingLeft: "0px" }}
                                />
                            </div>
                        </div>

                        {/* Filter Button (Hidden on desktop) */}

                        <button data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" className=" d-md-none bg-white border-0  text-dark">
                            <svg width="15" height="13" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6698 0.698597H1L5.26791 5.74541V9.23442L7.40187 10.3014V5.74541L11.6698 0.698597Z" stroke="#4B5563" stroke-width="1.28037" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>

                        {/* Two Buttons (Hidden on mobile, 10% each on desktop) */}
                        <div className="d-none d-md-flex gap-2" style={{ width: "35%" }}>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn w-100 border bg-white text-dark">
                                    <FaFilter className="me-1" />  {translations[language].FilterText}
                                </button>
                            <button type="submit" className="btn btn-primary w-100">
                                    <FaSearch className="me-1" /> {translations[language].SearchText}
                                </button>
                        </div>

                    </form>
                    <div class="px-2 collapse  d-md-none" id="collapseExample">
                        <div class="card card-body">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn w-100 border bg-white text-dark">
                                <FaFilter className="me-1" />  {translations[language].FilterText}
                            </button>
                            <button type="submit" onClick={handleSearchSubmit} className="btn btn-primary w-100">
                                    <FaSearch className="me-1" /> {translations[language].SearchText}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Search Filters</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            
                            <input
                            type="range"
                            min="0"
                            max="1000"
                            value={maxPrice}
                            onChange={(e) => setPriceRange([minPrice, +e.target.value])}
                            className="w-100"
                            />
                            <div className="d-flex justify-content-between">
                                <div className="me-2">
                                <label>Min ($)</label>
                                <input
                                    type="number"
                                    value={minPrice}
                                    onChange={(e) => setPriceRange([+e.target.value, maxPrice])}
                                    className="form-control"
                                />
                                </div>
                                <div>
                                <label>Max ($)</label>
                                <input
                                    type="number"
                                    value={maxPrice}
                                    onChange={(e) => setPriceRange([minPrice, +e.target.value])}
                                    className="form-control"
                                />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Categories />
                <div className="container my-5">
                    <div className={`section-header d-flex ${language === "he" ? "flex-row-reverse" : ""} justify-content-between align-items-center`}>
                        <div className={`header-left d-flex ${language === "he" ? "flex-row-reverse" : ""} align-items-start `} >
                            <FaStar className="star-icon" />
                            <h2 className="ml-2" >Drinks {translations[language].subCategoryTitle}</h2>
                        </div>
                    </div>

                    {/* Scrollable Row */}
                    <div className={`categories-container ${language === "he" ? "flex-row-reverse" : ""}`} style={{ direction: language === "he" ? "rtl" : "ltr" }}>
                        {selectedSubCategory.map((drinks, index) => (
                            <CategoryTag
                                subcategory={drinks.subcategory}
                                id={drinks.id}
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
