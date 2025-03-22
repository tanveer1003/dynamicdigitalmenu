import { FaFilter, FaSearch } from "react-icons/fa";
import './../assets/css/categories_slidable.css';
import './../assets/css/productCard.css';
import React, { useRef, useEffect, useState } from "react";
import { FaStar, FaList, FaTh, FaArrowRight } from "react-icons/fa";

function searchComponent() {
    return (
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
    );
}

export default searchComponent;