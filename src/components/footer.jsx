import React from "react";
import { FaClock, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import translations from '../../src/components/languagues';

const Footer = ({ language }) => {
    return (
        <footer className="" >
            <div className="container mb-4">
                <div className="row">

                    {/* Column 1: Hours of Operation */}
                    <div className="col-md-4">
                        <h5><FaClock className="me-2" /> {translations[language].FooterTitle1}</h5>
                        <ul className="list-unstyled d-flex  flex-column gap-2 pt-3" style={{color:"#6B7280",fontSize:12}}>
                            <li className=" d-flex justify-content-start gap-4"><span>{translations[language].Date1} </span> <span>{translations[language].Timing1}</span></li>
                            <li className=" d-flex justify-content-start gap-4"><span>{translations[language].Date2} </span> <span>{translations[language].Timing2}</span></li>
                            <li className=" d-flex justify-content-start gap-4"><span>{translations[language].Date3} </span> <span>{translations[language].Timing3}</span></li>
                        </ul>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div className="col-md-4">
                        <h5>{translations[language].FooterTitle2}</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 pt-3" style={{color:"#6B7280",fontSize:12}} >
                            <li>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_223_308)">
                                    <path d="M16.4962 13.19V15.44C16.497 15.6488 16.4542 15.8556 16.3705 16.047C16.2869 16.2383 16.1641 16.4101 16.0102 16.5513C15.8563 16.6926 15.6746 16.8001 15.4767 16.867C15.2789 16.9339 15.0692 16.9588 14.8612 16.94C12.5533 16.6892 10.3364 15.9006 8.38867 14.6375C6.57654 13.4859 5.04017 11.9496 3.88867 10.1375C2.62115 8.18085 1.83235 5.9532 1.58617 3.63495C1.56742 3.42755 1.59207 3.21852 1.65854 3.02117C1.72501 2.82382 1.83184 2.64247 1.97224 2.48867C2.11264 2.33487 2.28352 2.21198 2.47401 2.12784C2.6645 2.0437 2.87042 2.00015 3.07867 1.99995H5.32867C5.69265 1.99637 6.04551 2.12526 6.32149 2.3626C6.59746 2.59994 6.77772 2.92954 6.82867 3.28995C6.92363 4.01 7.09975 4.717 7.35367 5.39745C7.45457 5.66589 7.47641 5.95764 7.4166 6.23811C7.35678 6.51858 7.21781 6.77603 7.01617 6.97995L6.06367 7.93245C7.13133 9.81011 8.68601 11.3648 10.5637 12.4325L11.5162 11.48C11.7201 11.2783 11.9775 11.1393 12.258 11.0795C12.5385 11.0197 12.8302 11.0415 13.0987 11.1425C13.7791 11.3964 14.4861 11.5725 15.2062 11.6675C15.5705 11.7188 15.9032 11.9024 16.1411 12.1831C16.3789 12.4638 16.5053 12.8221 16.4962 13.19Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_223_308">
                                    <rect width="18" height="18" fill="white" transform="translate(-0.00390625 0.5)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <span className="px-2">
                                {translations[language].Phone}
                                </span>
                            </li>
                            <li>
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_223_313)">
                                    <path d="M14.9961 3.5H2.99609C2.16767 3.5 1.49609 4.17157 1.49609 5V14C1.49609 14.8284 2.16767 15.5 2.99609 15.5H14.9961C15.8245 15.5 16.4961 14.8284 16.4961 14V5C16.4961 4.17157 15.8245 3.5 14.9961 3.5Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.4961 5.75L9.76859 10.025C9.53705 10.1701 9.26933 10.247 8.99609 10.247C8.72286 10.247 8.45514 10.1701 8.22359 10.025L1.49609 5.75" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_223_313">
                                    <rect width="18" height="18" fill="white" transform="translate(-0.00390625 0.5)"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                                 <span className="px-2">{translations[language].Email}</span>
                            </li>
                            <li> {translations[language].Address1} </li>
                            <li> {translations[language].Address2} </li>
                        </ul>
                    </div>

                    {/* Column 3: Connect With Us */}
                    <div className="col-md-4">
                        <h5>{translations[language].FooterTitle3}</h5>
                        <div className="mb-3 pt-3">
                            <a href="#" className="text-black me-3">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 10H15C12.2386 10 10 12.2386 10 15V25C10 27.7614 12.2386 30 15 30H25C27.7614 30 30 27.7614 30 25V15C30 12.2386 27.7614 10 25 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.0002 19.3701C24.1236 20.2023 23.9815 21.0523 23.594 21.7991C23.2065 22.5459 22.5933 23.1515 21.8418 23.5297C21.0903 23.908 20.2386 24.0397 19.408 23.906C18.5773 23.7723 17.81 23.3801 17.215 22.7852C16.6201 22.1903 16.2279 21.4229 16.0943 20.5923C15.9606 19.7616 16.0923 18.91 16.4705 18.1584C16.8488 17.4069 17.4544 16.7938 18.2012 16.4063C18.948 16.0188 19.7979 15.8766 20.6302 16.0001C21.4791 16.1259 22.265 16.5215 22.8719 17.1284C23.4787 17.7352 23.8743 18.5211 24.0002 19.3701Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M25.5 14.5H25.51" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            </a>
                            <a href="#" className="text-black me-3">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26 10H23C21.6739 10 20.4021 10.5268 19.4645 11.4645C18.5268 12.4021 18 13.6739 18 15V18H15V22H18V30H22V22H25L26 18H22V15C22 14.7348 22.1054 14.4804 22.2929 14.2929C22.4804 14.1054 22.7348 14 23 14H26V10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            </a>
                            <a href="#" className="text-black">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30 12C30 12 29.3 14.1 28 15.4C29.6 25.4 18.6 32.7 10 27C12.2 27.1 14.4 26.4 16 25C11 23.5 8.5 17.6 11 13C13.2 15.6 16.6 17.1 20 17C19.1 12.8 24 10.4 27 13.2C28.1 13.2 30 12 30 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        <p style={{color:"#6B7280",fontSize:12}}>{translations[language].ConnectUsMessage}</p>
                        <div className="d-flex gap-2">
                            <input type="email" className="form-control" placeholder={translations[language].EmailPlaceholder} />
                            <button className="btn btn-primary" style={{fontSize:12}}>{translations[language].EmailButton}</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center p-2 pt-4  border-top " style={{color:"#6B7280",fontSize:12}}>
                <p>© {translations[language].CopyrightTxt}</p>
            </div>
        </footer>
    );
};

export default Footer;
