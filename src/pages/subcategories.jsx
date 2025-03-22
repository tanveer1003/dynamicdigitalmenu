
import Footer from './../components/footer';
import Header from './../components/header';
import searchComponent from './../components/searchcomponent';
import { FaFilter, FaSearch } from "react-icons/fa";
import './../assets/css/categories_slidable.css';
import './../assets/css/productCard.css';
import React, { useRef, useEffect, useState } from "react";
import { FaStar, FaList, FaTh, FaArrowRight } from "react-icons/fa";
import wheatIconIcon from './../assets/icons/Vector-wheat.png';
import leafIcon from './../assets/icons/Vector-leaft.png';
import chilleIcon from './../assets/icons/Vector-chille.png';
import moreIcon from './../assets/icons/Vector-more.png';
import { Link } from "react-router-dom";

function SubcategoriesPage() {

    const categories = [
        { name: "Appetizers", image: "https://s3-alpha-sig.figma.com/img/af99/bb38/066fa85c4ddb4079400be84797edaf0d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VPHV02Iwva66kEktsYeqIRJSKMj1UybO0mstSsxAIBWG1SWn59iLoCCtxNfXeVfkzCIntIpSgk-Cjj1aXJ1fqauNE2KkVNRZZ85dJGbrJYkiXJE1TLOpEl6S-fDja2cr0xY9AUgdrgXz5CGTxjm0YhluyNZod4ivvOzB1Zyd7qeWA00Opd22tOgCxYaBaBU3TyA~xfxjWz8aNf4HgHoLNhn3AQfyrp2atCozM~71Ve8h7wh993P8~AjZI75fOPMpLf44Gq2iuDv7b~bWjecwCepF~-1eAXGFT~JfAxEBIWbyvYqKFFhgot6Wr~hJjJcmbT3zvJPVhsDLv7~0R08iSw__" },
        { name: "Main Course", image: "https://s3-alpha-sig.figma.com/img/da6e/0072/3035095c8694b1fecb5a8978bc04f554?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VlqWE4h7xtGunDG8IHQPnQAEQFuKsQXqscpUa7vVMtImnfLKgFxaCCUyNO7HcEdAVRrdxy3H-RYSF0OEU6HyVmvQS8WZOkIhCxGKx8Kt-qFL0dxjRccSa-IYK2wuBxFloi0j-V9mu21BSGVczSzLd5Cy6XqutG5jBYn3vBjb6saAsZEdn5eX12laXNtxE-QvNB6dl4TTvycL8KA4B54opxMKVw1n2NKP7SN9zghWnQ87ET6BvFM74S35Ak~I2eub7vEwJuREvZOkblm1ItjDO0GxBBCIa-P7x4MJpWCYULlTOhlQEkxaVL-M2~nOh-XTr46iUex-8zk6nzjtrNadOA__" },
        { name: "Desserts", image: "https://s3-alpha-sig.figma.com/img/ceff/b7a3/68aecebd398f9c726343810117badbe3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k-QjtpFt6NZM7rRW0ESSk2Ijyidix2zoeL3sRSG4oKVBOfiObFZFAWJsfUDHpklsP8tZ0APX4n-CeIAdYUWGGTas9Dpysto5IPhVBeaRLYdOb1T0DQXKw8DH5Y~31sBY-2K21-Ct8AYq5TBuhoZ1VdzCymODKZ-Qody6WUllBS51Ob3SCNgH78dWBPeogdlrFSx-tk5yVM2rOlAoKEU~qHZt0Js5Ra1vrfmIgZKa9s4kVEGkKuU0KvSbrB82hcC7JYBSmkvXDOAR-xqd59FVJzrVIi9NfA3hzCKEDeRF6X8MzbxvMpfrcpV1l7PEAk6LQN8TL09bS2bSK2ZB1yz3EQ__" },
        { name: "Drinks", image: "https://s3-alpha-sig.figma.com/img/e9a9/466f/e1f5cf6664854aa30c855585ec161324?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gq5iaes2WNym6oOPh1aJ0k8wAKBePt6uOd7isHKXEFnysdkCNmG9FcRclBvS1lIJCWFFzE5sFTvNIl15QKJaZUJBdVmS2cXel8W~JFDBcLc0OSHbK~~pCndZ~BjDCHR1n6wf0EQdL8wDaWCF4C4tuRThFV4Pa59zIaHXf-wLvqZDySApBHO9pkgzptM1kQY9QrMnTDz4zK3P~wf1V~k-KS0ADxQinm5qoN5kzgztjzcnH9IQgaTniXor2RbiW4BetqMwQYS1UwZprLYz6ZBuyCRlkGgX7gYWtsGHnfiTtzVsUfQoEcZYYgiiU2cPDsqPzXrz7z0kh32iQqxPA5acJA__" },
    ];

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
            <div className="container pt-2">
                <h2 className="mb-4">Categories</h2>

                {/* Scrollable Row */}
                <div className="categories-container">
                    {categories.map((category, index) => (
                        <div key={index} className="category-card" style={{ backgroundImage: `url(${category.image})` }}>
                            <Link className='text-white link-offset-2 link-underline link-underline-opacity-0' to="/categoryproducts">
                            <div className="overlay"></div>
                            <h5 className="category-text">{category.name}</h5>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Scrollbar Indicator */}
                <div className="scroll-indicator">
                    <div
                        className="scroll-indicator-fill"
                        style={{
                            width: scrollWidth > 1 ? `${(scrollLeft / scrollWidth) * 100}%` : "0%",
                        }}
                    ></div>
                </div>
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
            tags: ["Vegan","Gluten Free", "Spicy"],
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
            tags: [ "Spicy"],
        },
        // Add more products as needed
    ];

    const formatTag = (tag) => {
        return tag.toLowerCase().replace(/\s+/g, "-");
    };

    const [isGrid, setisGrid] = useState(true);

    //const isGrid = true;

    /*
    const changeView = (view) => {
        isGrid = view;
    };
    */

    const ProductsSection = () => {
        const [selectedProduct, setSelectedProduct] = useState(null);
        return (
            <div className="products-section container pb-4">
                <div className="section-header d-flex justify-content-between align-items-center">
                    <div className="header-left d-flex align-items-center">
                        <FaStar className="star-icon" />
                        <h2 className="ml-2">Appetizers Specials Deals</h2>
                    </div>
                    <div className="header-right">
                        <FaList className="view-icon text-primary" onClick={() => setisGrid(true)} />
                        <FaTh className="view-icon text-primary" onClick={() => setisGrid(false)} />
                    </div>
                </div>

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
                                                {tag === "Gluten Free" && <img style={{height:10,width:10}} src={wheatIconIcon} alt="Vegan Icon" />}
                                                {tag === "Spicy" && <img style={{height:10,width:10}} src={chilleIcon} alt="Spicy Icon" />}
                                                {tag === "Vegan" && <img style={{height:10,width:10}} src={leafIcon} alt="Vegan Icon" />}
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                    <button type="button" className="read-more-btn" data-bs-toggle="modal"
                                data-bs-target="#productModal" onClick={() => setSelectedProduct(product)}>
                                        <img style={{ height:16,width:16}} src={moreIcon} />
                                    </button>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                         :
                         <div key={product.id} className=" p-2 col-md-12">
                            <div className="product-card d-flex justify-content-between">
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
                                                {tag === "Gluten Free" && <img style={{height:10,width:10}} src={wheatIconIcon} alt="Vegan Icon" />}
                                                {tag === "Spicy" && <img style={{height:10,width:10}} src={chilleIcon} alt="Spicy Icon" />}
                                                {tag === "Vegan" && <img style={{height:10,width:10}} src={leafIcon} alt="Vegan Icon" />}
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                    <button type="button" className="read-more-btn" data-bs-toggle="modal"
                                data-bs-target="#productModal">
                                        <img style={{ height:16,width:16}} src={moreIcon} />
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
            <div
                            className="modal border-none fade"
                            id="productModal"
                            tabIndex="-1"
                            aria-labelledby="productModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog border-none">
                                <div className="modal-content bg-transparent border-none">
                                    <div className="modal-header">
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
                                                                        {tag === "Gluten Free" && <img style={{height:10,width:10}} src={wheatIconIcon} alt="Vegan Icon" />}
                                                                        {tag === "Spicy" && <img style={{height:10,width:10}} src={chilleIcon} alt="Spicy Icon" />}
                                                                        {tag === "Vegan" && <img style={{height:10,width:10}} src={leafIcon} alt="Vegan Icon" />}
                                                                        {tag}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <button type="button" className="read-more-btn" data-bs-toggle="modal"
                                                        data-bs-target="#productModal">
                                                                <img style={{ height:16,width:16}} src={moreIcon} />
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

    return (


        <div >
            {/* Navbar */}
            <Header />

            <div className='pt-2' style={{ background: "rgb(243 246 250)" }} >
                <div className="container rounded-3 bg-white p-3">
                    <div className="row justify-content-center">

                        {/* Text Box - 80% Width */}
                        <div className="col-md-8 col-11">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your search..."
                            />
                        </div>
                        <div className="col-1 d-md-none d-block">
                            <button className="btn w-100   text-dark">
                                <FaFilter className="me-1" />
                            </button>
                        </div>

                        {/* Filter Button - 10% Width */}
                        <div className="col-md-2 d-md-block d-none ">
                            <button className="btn w-100 border bg-white text-dark">
                                <FaFilter className="me-1" />  Filters
                            </button>
                        </div>

                        {/* Search Button - 10% Width */}
                        <div className="col-md-2 d-md-block d-none">
                            <button className="btn btn-primary w-100">
                                <FaSearch className="me-1" /> Search
                            </button>
                        </div>

                    </div>
                </div>

                <Categories />
                <ProductsSection />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default SubcategoriesPage
