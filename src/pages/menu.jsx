
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

import background from './../assets/img/home-background.jpg';
import menuImage from './../assets/img/logo-menu.png';

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
            <div className="container menu-container"  style={{maxWidth:407}}  >
                <img className='img-fluid rounded-5'style={{ height:308, width:407 }}  src={menuImage} />
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
                        Do you have a business? <Link to="/menu-managemnet" className='text-white'>Join here</Link>
                    </p>
                </div>
            </div>
        );
    };
    

    return (
        <div>
            <div className='p-5' 
            style={{ 
                backgroundImage: `url({background})`,
                //backgroundSize: "cover",  // Makes it fit
                //backgroundPosition: "center",  // Centers it
               // backgroundRepeat: "no-repeat",  // Prevents tiling
               // width: "100%",  // Ensure it takes full width
               // height: "100vh" 
                }} >
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-2 col-12">
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
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#000000" d="M10.5 2a8.5 8.5 0 0 1 6.873 13.502l-.197.26l3.652 3.652a1 1 0 0 1-1.32 1.498l-.094-.084l-3.652-3.652A8.5 8.5 0 1 1 10.5 2m0 2a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m0 2a1 1 0 0 1 .993.883L11.5 7v2.5H14a1 1 0 0 1 .117 1.993L14 11.5h-2.5V14a1 1 0 0 1-1.993.117L9.5 14v-2.5H7a1 1 0 0 1-.117-1.993L7 9.5h2.5V7a1 1 0 0 1 1-1"/></g></svg>
                                                </span>
                                                Enlarge text
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314M8 11h6"/></svg>
                                                </span>
                                                Make text smaller
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" fill-rule="evenodd" d="M2 6h1v12H2zm2 0h2v12H4zm4 0h1v12H8zm2 0h3v12h-3zm4 0h1v12h-1zm3 0h1v12h-1zm2 0h1v12h-1zm2 0h1v12h-1z"/></svg>
                                                </span>
                                                Shades of gray
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                        <path fill="#000000" d="M3.5 10a6.5 6.5 0 0 1 13 0zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16" transform="rotate(90 10 10)"/>
                                                    </svg>
                                                </span>
                                                High contrast
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"/></svg>
                                                </span>
                                                Reverse contrast
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 18h6m-5 3h4m-5-6c.001-2-.499-2.5-1.5-3.5S6.025 9.487 6 8c-.047-3.05 2-5 6-5c4.001 0 6.049 1.95 6 5c-.023 1.487-.5 2.5-1.5 3.5c-.999 1-1.499 1.5-1.5 3.5"/></svg>
                                                </span>
                                                Light background
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <span>
                                                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_140_563)">
                                                        <path d="M7.79914 6.86421L7.45236 7.22121L7.80774 7.56964C7.84783 7.60894 7.89813 7.65592 7.94104 7.69599C7.96447 7.71787 7.98569 7.73769 8.00184 7.75307C8.0591 7.80763 8.10048 7.85033 8.13211 7.88944C8.18877 7.9595 8.19823 7.99726 8.19823 8.03682C8.19823 8.14143 8.10869 8.2433 7.97764 8.2433C7.92834 8.2433 7.88516 8.23039 7.81349 8.17467C7.77332 8.14345 7.72967 8.10277 7.67409 8.0467C7.65842 8.03088 7.63821 8.01008 7.61589 7.98712C7.57502 7.94505 7.52708 7.89571 7.48699 7.85641L7.14538 7.52149L6.79571 7.84798C6.55682 8.07105 6.38925 8.36614 6.38925 8.75065C6.38925 9.06679 6.5168 9.3799 6.74903 9.60777C6.74915 9.60788 6.74927 9.60799 6.74938 9.60811L8.29478 11.1306L8.29564 11.1314C8.5367 11.3678 8.85613 11.4731 9.1561 11.4731C9.45502 11.4731 9.76845 11.3688 10.0062 11.1486L10.0063 11.1488L10.0153 11.14L11.1187 10.0656L11.12 10.0644C11.3484 9.84042 11.4801 9.53618 11.4801 9.21428C11.4801 8.88783 11.3504 8.58278 11.12 8.35683L9.55868 6.82613C9.32667 6.59867 9.01189 6.47711 8.69823 6.47711C8.33288 6.47711 8.0343 6.62214 7.79914 6.86421ZM4.29775 1.64618L4.29689 1.64533C4.06487 1.41786 3.75009 1.29631 3.43643 1.29631C3.12395 1.29631 2.81467 1.41668 2.58631 1.62813L2.5862 1.62801L2.57719 1.63678L1.47379 2.71121L1.47379 2.7112L1.47257 2.7124C1.24415 2.93635 1.11244 3.24059 1.11244 3.56249C1.11244 3.88893 1.24211 4.19399 1.47257 4.41994L3.03385 5.95063C3.2749 6.18697 3.59433 6.2923 3.8943 6.2923C4.24734 6.2923 4.54928 6.16385 4.79339 5.91255L5.14017 5.55556L4.78478 5.20713C4.7447 5.16783 4.6944 5.12085 4.65149 5.08078C4.62806 5.0589 4.60684 5.03908 4.59069 5.0237C4.53343 4.96914 4.49205 4.92644 4.46042 4.88732C4.40376 4.81726 4.3943 4.77951 4.3943 4.73995C4.3943 4.63534 4.48384 4.53347 4.61489 4.53347C4.66419 4.53347 4.70737 4.54638 4.77904 4.60209C4.81921 4.63332 4.86286 4.674 4.91844 4.73007C4.93411 4.74588 4.95432 4.76668 4.97663 4.78964C5.0175 4.83171 5.06545 4.88106 5.10554 4.92036L5.44715 5.25528L5.79681 4.92878C6.03571 4.70572 6.20328 4.41062 6.20328 4.02611C6.20328 3.71001 6.07575 3.39693 5.84356 3.16906C5.84342 3.16893 5.84329 3.1688 5.84315 3.16866L4.29775 1.64618ZM11.4366 10.3479L11.4365 10.3479L11.4344 10.3499L10.331 11.4244L10.3298 11.4256C10.0226 11.7268 9.6023 11.8934 9.1561 11.8934C8.70641 11.8934 8.2868 11.7223 7.97815 11.4141L7.97575 11.4117L6.42949 9.88837L6.42863 9.88752C6.12188 9.58678 5.95558 9.17941 5.95558 8.75065C5.95558 8.30861 6.13796 7.88568 6.46293 7.57277L6.83362 7.21583L6.46616 6.85557L5.80562 6.20797L5.45241 5.86168L5.10234 6.21114C4.78171 6.5312 4.35269 6.7126 3.8943 6.7126C3.45075 6.7126 3.02215 6.54041 2.71309 6.23741L1.15182 4.70671C0.835957 4.39704 0.671265 3.99631 0.671265 3.56249C0.671265 3.14013 0.847887 2.72534 1.15597 2.42888L1.15598 2.42889L1.1581 2.42682L2.26151 1.35239L2.26151 1.35239L2.26273 1.3512C2.56996 1.04998 2.99023 0.883362 3.43643 0.883362C3.88612 0.883362 4.30573 1.05449 4.61438 1.36269L4.61437 1.3627L4.61678 1.36507L6.16304 2.8884L6.1639 2.88925C6.47065 3.18999 6.63695 3.59736 6.63695 4.02611C6.63695 4.46816 6.45457 4.89108 6.1296 5.204L5.75891 5.56094L6.12637 5.9212L6.78691 6.5688L7.14012 6.91509L7.49019 6.56563C7.81082 6.24557 8.23984 6.06417 8.69823 6.06417C9.14178 6.06417 9.57038 6.23636 9.87944 6.53936L11.4407 8.07005C11.7566 8.37973 11.9213 8.78046 11.9213 9.21428C11.9213 9.63664 11.7446 10.0514 11.4366 10.3479Z" fill="black" stroke="#333333"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0_140_563">
                                                        <rect width="19.1875" height="13.1875" fill="white" transform="translate(0 0.265625)"/>
                                                        </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                Highlight links
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1200 1200"><path fill="#000000" d="M335.151 763.202h435.208L552.753 199.336L335.147 763.202M.004 1192.852v-84.182h104.038L526.542 7.148h133.42l423.294 1101.521H1200v84.182H768.761v-84.182h131.834l-99.271-260.488H302.581l-99.272 260.488h130.244v84.182H0"/></svg>
                                                </span>
                                                Readable font
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9"><path d="M3.578 6.487A8 8 0 1 1 2.5 10.5"/><path d="M7.5 6.5h-4v-4"/></g></svg>
                                                </span>
                                                Reset
                                            </a>
                                        </li>
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
                        <div className="col-md-8 col-12">
                            <Menus />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark text-center text-white p-4">
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
