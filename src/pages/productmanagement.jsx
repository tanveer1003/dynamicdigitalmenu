import './../assets/css/admin.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminHeader from './../components/adminheader';

function ProductManagement() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);



    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
            fetchProducts(); // Refresh the list
        } catch (error) {
            alert('Error deleting');
        }
    };

     const handleEditStart = (cat) => {
    };



    return (
        <div>
            <AdminHeader />
            <div className="container-fluid" style={{ background: "#F9FAFB" }}>

                <div className="row">
                    <div className="col-md-6 p-3">
                        <div className="d-flex gap-2">
                            <Link to="/menu-managemnet" className="btn btn-primary border border-0" style={{ background: "#DBEAFE", color: "#0d6efd" }}>
                                <span className='pe-1'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 1.33333V6C2 6.73333 2.6 7.33333 3.33333 7.33333H6C6.35362 7.33333 6.69276 7.19286 6.94281 6.94281C7.19286 6.69276 7.33333 6.35362 7.33333 6V1.33333" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.66699 1.33333V14.6667" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.0003 10V1.33333C13.1163 1.33333 12.2684 1.68452 11.6433 2.30964C11.0182 2.93477 10.667 3.78261 10.667 4.66667V8.66667C10.667 9.4 11.267 10 12.0003 10H14.0003ZM14.0003 10V14.6667" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                Categories
                            </Link>
                            <Link to="/menu-managemnet-add" className="btn btn-primary border border-0" style={{ background: "#fff", color: "#4B5563" }}>
                                <span className='pe-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg>
                                </span>
                                Add Item
                            </Link>
                            <Link to="/menu-managemnet-setting" className="btn btn-primary border border-0" style={{ background: "#fff", color: "#4B5563" }}>
                                <span className='pe-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" /></svg>
                                </span>
                                Settings
                            </Link>
                        </div>
                        <div className="bg-white mt-4 p-3">
                            <h4>Categories</h4>

                            <div className="pt-4 pb-3">
                                Existing Categories
                            </div>

                            <div className="container-fluid gap-2">
                                {products.map((product) => (
                                    <div className="p-3 mb-2 rounded-3 d-flex bg-light justify-content-between align-items-center">
                                        <div className="">
                                            {product.name.en}
                                        </div>
                                        <div className="d-flex">
                                            <button onClick={() => handleEditStart(product)} className="btn btn-primary border border-0 bg-light text-success">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDelete(product._id)} className="btn btn-primary border border-0 bg-light text-danger">
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}

                            </div>


                        </div>

                    </div>
                    <div className="col-md-6 ">
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductManagement;