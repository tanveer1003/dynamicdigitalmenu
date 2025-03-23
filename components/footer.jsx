import React from "react";
import { FaClock, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="" >
            <div className="container mb-3">
                <div className="row">

                    {/* Column 1: Hours of Operation */}
                    <div className="col-md-4">
                        <h5><FaClock className="me-2" /> Hours of Operation</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 pt-3">
                            <li>Monday - Friday: <span className="float-end">11:00 AM - 10:00 PM</span></li>
                            <li>Saturday: <span className="float-end">12:00 PM - 11:00 PM</span></li>
                            <li>Sunday: <span className="float-end">12:00 PM - 9:00 PM</span></li>
                        </ul>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 pt-3">
                            <li><FaEnvelope className="me-2" /> email@example.com</li>
                            <li><FaPhone className="me-2" /> +1 234 567 890</li>
                            <li><FaMapMarkerAlt className="me-2" /> 123 Main St, City, Country</li>
                        </ul>
                    </div>

                    {/* Column 3: Connect With Us */}
                    <div className="col-md-4">
                        <h5>Connect With Us</h5>
                        <div className="mb-3 pt-3">
                            <a href="#" className="text-black me-3"><FaInstagram size={20} /></a>
                            <a href="#" className="text-black me-3"><FaFacebook size={20} /></a>
                            <a href="#" className="text-black"><FaTwitter size={20} /></a>
                        </div>
                        <p>Join our mailing list for updates and special offers!</p>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter your email" />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="text-center p-2">
                <p>© 2025 People. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
