
import Footer from './../components/footer';
import Header from './../components/header';
import Searchcomponent from './../components/searchcomponent';
import ProductCard from './../components/productcard';
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

function CategoryproductsPage({ language }) {

    const categories = [
        { name: "Appetizers", image: "https://s3-alpha-sig.figma.com/img/af99/bb38/066fa85c4ddb4079400be84797edaf0d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VPHV02Iwva66kEktsYeqIRJSKMj1UybO0mstSsxAIBWG1SWn59iLoCCtxNfXeVfkzCIntIpSgk-Cjj1aXJ1fqauNE2KkVNRZZ85dJGbrJYkiXJE1TLOpEl6S-fDja2cr0xY9AUgdrgXz5CGTxjm0YhluyNZod4ivvOzB1Zyd7qeWA00Opd22tOgCxYaBaBU3TyA~xfxjWz8aNf4HgHoLNhn3AQfyrp2atCozM~71Ve8h7wh993P8~AjZI75fOPMpLf44Gq2iuDv7b~bWjecwCepF~-1eAXGFT~JfAxEBIWbyvYqKFFhgot6Wr~hJjJcmbT3zvJPVhsDLv7~0R08iSw__" },
        { name: "Main Course", image: "https://s3-alpha-sig.figma.com/img/da6e/0072/3035095c8694b1fecb5a8978bc04f554?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VlqWE4h7xtGunDG8IHQPnQAEQFuKsQXqscpUa7vVMtImnfLKgFxaCCUyNO7HcEdAVRrdxy3H-RYSF0OEU6HyVmvQS8WZOkIhCxGKx8Kt-qFL0dxjRccSa-IYK2wuBxFloi0j-V9mu21BSGVczSzLd5Cy6XqutG5jBYn3vBjb6saAsZEdn5eX12laXNtxE-QvNB6dl4TTvycL8KA4B54opxMKVw1n2NKP7SN9zghWnQ87ET6BvFM74S35Ak~I2eub7vEwJuREvZOkblm1ItjDO0GxBBCIa-P7x4MJpWCYULlTOhlQEkxaVL-M2~nOh-XTr46iUex-8zk6nzjtrNadOA__" },
        { name: "Desserts", image: "https://s3-alpha-sig.figma.com/img/ceff/b7a3/68aecebd398f9c726343810117badbe3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k-QjtpFt6NZM7rRW0ESSk2Ijyidix2zoeL3sRSG4oKVBOfiObFZFAWJsfUDHpklsP8tZ0APX4n-CeIAdYUWGGTas9Dpysto5IPhVBeaRLYdOb1T0DQXKw8DH5Y~31sBY-2K21-Ct8AYq5TBuhoZ1VdzCymODKZ-Qody6WUllBS51Ob3SCNgH78dWBPeogdlrFSx-tk5yVM2rOlAoKEU~qHZt0Js5Ra1vrfmIgZKa9s4kVEGkKuU0KvSbrB82hcC7JYBSmkvXDOAR-xqd59FVJzrVIi9NfA3hzCKEDeRF6X8MzbxvMpfrcpV1l7PEAk6LQN8TL09bS2bSK2ZB1yz3EQ__" },
        { name: "Drinks", image: "https://s3-alpha-sig.figma.com/img/e9a9/466f/e1f5cf6664854aa30c855585ec161324?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gq5iaes2WNym6oOPh1aJ0k8wAKBePt6uOd7isHKXEFnysdkCNmG9FcRclBvS1lIJCWFFzE5sFTvNIl15QKJaZUJBdVmS2cXel8W~JFDBcLc0OSHbK~~pCndZ~BjDCHR1n6wf0EQdL8wDaWCF4C4tuRThFV4Pa59zIaHXf-wLvqZDySApBHO9pkgzptM1kQY9QrMnTDz4zK3P~wf1V~k-KS0ADxQinm5qoN5kzgztjzcnH9IQgaTniXor2RbiW4BetqMwQYS1UwZprLYz6ZBuyCRlkGgX7gYWtsGHnfiTtzVsUfQoEcZYYgiiU2cPDsqPzXrz7z0kh32iQqxPA5acJA__" },

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
            image: "https://s3-alpha-sig.figma.com/img/c3af/e9da/f969b2f918bcb80a8d07ef057b6022ac?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=le6bl3nNd4y96pvRVaCOKpytLA2WeL2d9s10BgFVPwyjp02IipvySuF6W2T~IKTTJXiYtg2-0d0K3UGK8OoTQ550Bss19utnBAq0xah2cwCwkLksqxgqracMVzHdYdNgmFXY0oDFocJYUG45kom-n4BRuerIMOPmomJB5EZ5kFaALUqz~0sw1CpfmDkZxm5kcRyilnX1GrZX1rUReTTHP6yGg~NY290pgID-0Dgk41bEzE~9pnXJPI7pWPsR5HRW0kXBT-prXYpzYb8iiN~cY1ownvT6F3oBpmOA~7OplJtO6oHdvKslluR-BQXGlbEoNHVxqrV5CJg3mgPJG3mnOg__",
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        {
            id: 2,
            title: "sparkling wines",
            price: "$12.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: "https://s3-alpha-sig.figma.com/img/a302/cb0d/86eed69da8abfe31171f5463cbb4e19b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DDsK4qi~ZyJX4X1QydLdcpVDWK6fNGLt4TGNRhCdpF~UUkgY9FOhGpk9KzNPOilxrxq4KGR9mdSxUNaGmgiQH0ubA8UPETdZgB4X4qjr~CI2jpAz6wUbuGWSEjta~crqGzYZcny7AtoYigF0c8ngIK-Ox2O1vz2hcNrtw8ChBsT2fHp1i-H3Lk~4T8WeFyL2ub2b4f4eA11Q-2Q6e-rrOT2UYszG0tULjFYLuUyzw2Fu1tD8c~sH6BL7ry3aQB-6xFxsFgWjl~efU5fteCs1u25-b-SGgv9-C9XYP~MPaBeXY~5os1Wnm0v9OTCjdICsivg7CH0Iw2B-I~xMlqRo0g__",
            tags: ["Vegan", "Spicy"],
        },
        {
            id: 3,
            title: "Red Wines",
            price: "$8.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: "https://s3-alpha-sig.figma.com/img/980c/29a3/c27a1019d04e849572646c4f7c34a8a2?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kI9~w0Fx2wsTNfsVXyYJL~~m6PSbcO5YcrWNU7zv0jtuBsPmdaDopD86RTDcZyF-i5fuVKb7Rvro13YQ2pjg-z~gfzhNMsirY~WUH1lUZbRZeg-i5S2M2tQoeFx6jlKgfB7KOZfHHR6jxq1unmJ1eH8VC5PzViEOgveRysFjvykmaDXV8x0EO2FZVF5oPqRNkD6Pj2R~KA1CKETDLFhhZvypE4zoh0c6So3ZA2t7szkyxaz8JbK-pi4KCc8hf6V1EMXAdNTRpnyjwD4TkgRTYYgKwEO2UCMHqn4Mu0MMfJT6kdNNLCupvsfIcJVfEcLZ05QsrnBkkt0skuNVr0yXmg__",
            tags: ["Spicy"],
        },
        {
            id: 4,
            title: "Fermented grape juice Wines",
            price: "$18.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: "https://s3-alpha-sig.figma.com/img/1f8d/695f/155cd34f89482fea75dbdd7f29da3edb?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QmhXxsWJ6~jLsYAO6zvxdJ-jSoMPWCm~98Fsk-1H320MfGj41GmF94TOK-046k6LUUOlEmQa6y8lyvw1PgbnTR7wnX2dgJnZFsIEdnkah9Yc4D9aZZi-9zBF6pSb3DKGvqLq-afOUWntiDxbTJ4rF0X18ulPwYogB6HdXTXQe-UK5xYyGvg9oyyM4uvktJGjPddPNgUhTZ~CZ~LcfQpG53Ks3ZPzneJIbRTnRkJL3QxbsJCe4Wdk3gd5GOfgENcVmSAaIcS3Yg5QHs65Hi-azCUq2kH3d-Bk1lo~tOqCQp40AF7vJmDxffV1jkhSpJqTZVDBXaef7Ih5zi9TweL2Tw__",
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        {
            id: 5,
            title: "sparkling wines",
            price: "$18.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: "https://s3-alpha-sig.figma.com/img/e0c9/c8de/03d786195b1bd865e263c79ebc2e36cd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WvVUwB-SC3XTtWekKcQ3Hj88kxYUilQNUzDa06ugmQBKXQqWbLO6M~9-9PVIB-vkBPfUQVfjqBZeqfu6SOmULW9QT7jGzx4f-WEJtRd7o3P1gzxHeetJDmd68oi94T-97DmBtCCA7Ox3DwQKgYrvQGwlchDfSW5lejEPMfQKmaxr7cXqb8ZYWuBijWcFoPW1RXVmLzPA9qqhWqkDH4RAY0sZh6b6bf3KwfAKXyucxhnlTl2t-lalfVfWr~eNlsp8wYwDZ6Y8hzRMKj4l8G1ypbSr7P4bKe79EanPYQkSGfllFSqrC5w9~bfuTkkmjwIvZLuTdO6ZRtOpfJBSMymhWQ__",
            tags: ["Vegan", "Spicy"],
        },
        {
            id: 6,
            title: "Red Wines",
            price: "$18.00",
            description: "Fresh mixed greens with feta cheese, olives, and house dressing .",
            image: "https://s3-alpha-sig.figma.com/img/9158/5ae6/91cd6b3c6142bc2dcb419fbe86a014dd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L1nuo~AC5OVaX-zdZxlTTDp5ULpNwhYjOvg4PNHs~IXkcG9bro4~emYNwKVTbqpMK~BKeEB01k8pEpUUNG2B9DvDgMlMzc6vDQ03z-qj0Xc2RkXrAybEzA4gueYnLKXVF6C8DfPWtbipmMSDOYYMfuzK6t168Uq2gsV7L0PP~PpJM54VzhZwgGvcisHOGDTYG5yrYFOrb6PUwFt9N3bai1g0XcjR59~dRI2CMv~Md4q6zVLxBiJHK1eAU3el7aAqQPJ6DT~z4GgP6u-Gv0w7Le5IieCQKGpPALRo4rfaucwNtNL72fR0rdeRMKZZOY9oC6v3TPxgghjYV3NKFiwiJA__",
            tags: ["Spicy"],
        },
        // Add more products as needed
    ];

    const formatTag = (tag) => {
        return tag.toLowerCase().replace(/\s+/g, "-");
    };

    const ProductCard = (product) => {
        return (
            <div key={product.id} className=" p-2 col-md-4">
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
                        <p className="product-description">{product.description}</p>
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
                            <button type="button" className="read-more-btn" data-bs-toggle="modal"
                                data-bs-target="#productModal"
                                onClick={() => setSelectedProduct(product)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512">
                                    <path fill="none" stroke="#0d6efd" stroke-linecap="round" stroke-linejoin="round" stroke-width="41" d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

    const ProductsSection = () => {
        const [selectedProduct, setSelectedProduct] = useState(null);
        return (
            <div className="products-section container pb-4">


                <div className="row">
                    {productData.map((product) => (
                        isGrid ?
                            <div key={product.id} className=" p-2 col-md-4">
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
                                        <p className="product-description">{product.description}</p>
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
                                            <button type="button" className="read-more-btn" data-bs-toggle="modal"
                                                data-bs-target="#productModal"
                                                onClick={() => setSelectedProduct(product)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512">
                                                    <path fill="none" stroke="#0d6efd" stroke-linecap="round" stroke-linejoin="round" stroke-width="41" d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48" />
                                                </svg>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            :
                            <div key={product.id} className=" p-2 col-md-12">
                                <div className="product-card d-flex justify-content-between">
                                    <div className="product-details d-flex flex-column justify-content-between">
                                        <div>
                                            <div className="product-row">
                                                <h5 className="product-title">{product.title}</h5>
                                                <div className="product-price">{product.price}</div>
                                            </div>
                                            <p className="product-description">{product.description}</p>
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
                                            <button type="button" className="read-more-btn" data-bs-toggle="modal"
                                                data-bs-target="#productModal"
                                                onClick={() => setSelectedProduct(product)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512">
                                                    <path fill="none" stroke="#0d6efd" stroke-linecap="round" stroke-linejoin="round" stroke-width="41" d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48" />
                                                </svg>
                                            </button>
                                        </div>

                                    </div>
                                    <div className="product-image" style={{
                                        backgroundImage: `url(${product.image})`,
                                        width: "200px",  // Adjust as needed
                                        height: "220px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        flexShrink: 0
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
            image: "https://s3-alpha-sig.figma.com/img/acab/5971/119ecb05340117ea9b2df528318ce4d3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cK~2OztUmsneSKzqcc-sivWo4GcwpYfNczjHfIAh4o093FyAM6608wuwCHetCLxmfHRwkYf~iqA9x9p-~xNq7ShzPaflifMffQ2L0q94lSiU3ylq6v3d-wvr1gVLXDsNEJhuOx3veZXc4g5Z2~5pdgjWtI~W94KD~SU9EkIzilbI4gwLzrUKOYvFobOI7NbDfzLTx7q1TgYInq~obj4YqQKYuyHmnIOx3c5GKop54FNwuM2~dUUXx5VluCmalI3aghlZ3005PODdAdwWkiwqjxoHHnNwuJiKMuBzZw9-ZJHFA6XLqbaB7yP1OfkyI5YnfpzEErai9~NGukvaSXvusQ__",
            tags: ["Vegan", "Gluten Free", "Spicy"],
        },
        {
            id: 2,
            subcategory: "Beer",
            background: "#827C64",
            category: "Drink",
            image: "https://s3-alpha-sig.figma.com/img/da9f/e36b/c06681dac53ca4b02650b6f3721f472c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dJTZh2Zh~udbihEs1G~LCyBm5NCrO1BVmcfX4rFYMzYnhbMgDFp4EXBXoah88jGg1f8GDMF2Wa~3jltKnEkU7Wz55zYWwEH6ldKja~hmeqadeQoAtFKAXu1nOD~yaxJGSs1AnE6BWs052FEeHjkj6FefaO~uGWySSpjt3fZQFD-iLtzy0E-w-ZozGS6en6SPfKhdw-6A~N6UNNjMkavbv1pyBP8a~0QcUO0PQ6SDIiytfzb101jhcjwUaPJq0TUb1q2u9~2oGIJ2zdoBzg03Jq58sG9IDYiTyCbsxh2976X0V8g5W7iy6VN155ImTwte9giHSoQ4znzWwzlTF-IMMw__",
            tags: ["Gluten Free", "Spicy"],
        },
        {
            id: 3,
            subcategory: "Spirits &\n Liquors",
            background: "#C6552D",
            category: "Drink",
            image: "https://s3-alpha-sig.figma.com/img/960e/0a0e/f029eec19365f2afe391cc43556c1f41?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P3951UZFPVWR8HEmDxufcMzknRZPLDUKkfFgsl~oszLOVBFgovDBRAtrPMACuvebn2K5k-RtGNpnm-T-Hich5-~O2zlKp8bnum3cREyRzhhdT~sP~zBGUi9ddycZA81SRgCl24-ek9qG8OI3xvn7WxpLiYDpCVD5qJnnHRkFtU9zEbE9n6fMPR0tETC373cVuMRSbux9nGuLa1fxxwMXmptc3kWbv5sdqQECyF5beZsvh3M20xYWvPzo0iDq9krIp9nwEgp4CxOUHwD0C3N7pgPk2kkqnbo7XRzU258n5a~jUMpoaOblggJ2vw8osq~LpAKNp~IjS9IKWOR0kILi6w__",
            tags: ["Vegan"],
        },
        {
            id: 4,
            subcategory: "Cocktails",
            background: "#B1834E",
            category: "Drink",
            image: "https://s3-alpha-sig.figma.com/img/da9f/e36b/c06681dac53ca4b02650b6f3721f472c?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dJTZh2Zh~udbihEs1G~LCyBm5NCrO1BVmcfX4rFYMzYnhbMgDFp4EXBXoah88jGg1f8GDMF2Wa~3jltKnEkU7Wz55zYWwEH6ldKja~hmeqadeQoAtFKAXu1nOD~yaxJGSs1AnE6BWs052FEeHjkj6FefaO~uGWySSpjt3fZQFD-iLtzy0E-w-ZozGS6en6SPfKhdw-6A~N6UNNjMkavbv1pyBP8a~0QcUO0PQ6SDIiytfzb101jhcjwUaPJq0TUb1q2u9~2oGIJ2zdoBzg03Jq58sG9IDYiTyCbsxh2976X0V8g5W7iy6VN155ImTwte9giHSoQ4znzWwzlTF-IMMw__",
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
