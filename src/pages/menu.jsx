
import Home from './../pages/home';
import { Link } from "react-router-dom";
import { FaClock, FaGlobe } from "react-icons/fa";
import './../assets/css/menu.css';
import image2 from './../assets/icons/Image-2.png';
import image3 from './../assets/icons/Image-3.png';
import image4 from './../assets/icons/Image-4.png';
import image5 from './../assets/icons/Image-5.png';
import image6 from './../assets/icons/Image-6.png';
import image7 from './../assets/icons/Image-7.png';
import image8 from './../assets/icons/Image-8.png';
import image9 from './../assets/icons/Image-9.png';

import vector from './../assets/icons/Vector-4.png';

function Menu() {
    const menus = [
        { name: "Reservation", image: image2 },
        { name: "Webaite", image: image3 },
        { name: "Call", image: image4 },
        { name: "StL6 002", image: image5 },
        { name: "Review", image: image6 },
        { name: "Review", image: image7 },
        { name: "Socal Media", image: image8 },
        { name: "Riamy Canl", image: image9 },
    ];

    const Menus = () => {
        return (
            <div className="container menu-container"    >
                <img className='img-fluid rounded-5'style={{ height:308, width:407 }}  src="https://s3-alpha-sig.figma.com/img/032b/40ed/912ecf9755692a28c26fda31c42979eb?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V-PUb-9d6xEezCslyyzM~Vi4TKn8swPXbi1KsxNASN-3qkznzjKiFue833Jx5U-ZboExCCSILKYnERYiIFJL0bvsGFJDxT1TCxA8x3FiKScZRgJCvXLEwbRN9L4LXhjhZ-ofZLIb485QRT~tKsgMf9fowXeX7CqYvrj9ydTw33vRDnp3GIR2tdiutafcmmh3AuqHws5QS78YpMwRLCiIcoFvW7mxxYIvWhl4qvQUPtqXnGjuIME9mYAOc-wiA0BCVjO6wFS1kSIJcOu8AaxHTivr0yY~ffQNe1pbZq6eQeYj8O14-tcYxdKUyO83ADDLH77reGkEC3A0rDWxDzJXCQ__" />
                <div className="row">
                    {menus.map((menu, index) => (
                        <div key={index} className="col-md-3 col-4 mb-4 g-2">
                            <div className="rounded-4 p-2 py-4 text-center" style={{ background: "#F7F6FA" }}>
                                <img className='img-fluid rounded' style={{ height: 28, width: 28 }} src={menu.image} />
                                <div class="card-body pt-2">
                                    <span className=" category-text text-black" style={{fontSize:12}}>{menu.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Link to="/home">
                        <div className="col-12 bg-primary text-white text-center border border-light  rounded p-3" style={{fontSize:26}}>
                            View Menu
                        </div>
                    </Link>
                    <p className='text-center'>
                        Do you have a business? <a className='text-white'>Join here</a>
                    </p>
                </div>
            </div>
        );
    };
    return (
        <div>
            <div className='form-signin w-100 m-auto' 
            style={{ 
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/de5a/5bed/a3a3b4f0a1fa1551ef0756b5df3f1905?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cLSdJCESCflIsNbl7Iqr39sb-JqndC6N0L9-YbssBpGADb31fGM2-CjIvIwGNx2fmwYydTIeUeKqeeRAWw316-NxJNrgnj2320xqhk0l6Ppz9DyznB6FeRQCMamZKUFEsbC1RGc31n-STggLtEQdskxuB4HZ1KEW~JDaM9G0CRUl~ZA4pSiFiWA2CBBia8Xkj~GuWVhvwUVWa~tPOD18eXVX2Q-m9EmsdY66JCEIEDSZ8Xfjthv4YGuLn8NJZ-iJz4DwGvzlNVeSKwA7NTcanFQeorZZW3LReHiSXVdZZZuzvSndB4~Y20WgBhCsIpQ7~sgYuA4edgzR3V3Uyvs6Lg__')`,
                //backgroundSize: "cover",  // Makes it fit
                //backgroundPosition: "center",  // Centers it
               // backgroundRepeat: "no-repeat",  // Prevents tiling
               // width: "100%",  // Ensure it takes full width
               // height: "100vh" 
                }} >
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-2">
                            <div className='container  my-5'>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-light d-flex align-items-center border-0"
                                        type="button"
                                        id="languageDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{background:"transparent"}}
                                    >
                                        <img src={vector} />
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                                        <li><a className="dropdown-item" href="#">EN - English</a></li>
                                        <li><a className="dropdown-item" href="#">ES - Espa�ol</a></li>
                                        <li><a className="dropdown-item" href="#">FR - Fran�ais</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-light d-flex align-items-center text-white border-0"
                                        type="button"
                                        id="languageDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{background:"transparent"}}
                                    >
                                        <FaGlobe className="me-1" /> EN
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                                        <li><a className="dropdown-item" href="#">English</a></li>
                                        <li><a className="dropdown-item" href="#">Hebrew</a></li>
                                        <li><a className="dropdown-item" href="#">Arabic</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 ">
                            <Menus />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-center text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <li>Accessibility statement</li>
                        </div>
                        <div className="col-md-6">
                            <li>Website Terms of Use</li>
                        </div>
                        <div className="col-md-12">
                            <li>Privacy policy and cookies</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;