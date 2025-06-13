import './../assets/css/admin.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminHeader from './../components/adminheader';
import ImageUpload from './../components/imageUpload';
import wheatIconIcon from './../assets/icons/Vector-wheat.png';
import leafIcon from './../assets/icons/Vector-leaft.png';
import chilleIcon from './../assets/icons/Vector-chille.png';
import { fetchCategories } from './../api';
import { fetchProducts } from './../api';

function MenuManagementAdd() {

    const [itemName, setItemName] = useState('');
    const [itemNameUr, setItemNameUr] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionUr, setDescriptionUr] = useState('');
    const [price, setPrice] = useState('');
    const [sku, setSku] = useState('');
    const [highlight, setHighlight] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    const [selectedImage, setSelectedImage] = useState(null);

    const [dietaryOptions, setDietaryOptions] = useState({
        vegan: false,
        spicy: false,
    });

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
         fetchCategories().then( (data) => {
                setCategories(data);
            }
        );
        
    }, []);


    const changeCategory = e => {
        setCategory(e.target.value);
    };

    // Handle checkbox change
    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setDietaryOptions((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedImage) {
            alert("Please upload an image");
            return;
        }

        // Prepare FormData
        const formData = new FormData();
        formData.append("image", selectedImage);
        formData.append("title", JSON.stringify({ "en": itemName, "he": itemNameUr }));
        formData.append("description", JSON.stringify({ "en": description, "he": descriptionUr }));
        formData.append("sku", sku);
        formData.append("highlight", highlight);
        formData.append("price", price);

        if (category) formData.append("categoryId", category);

        
        // Append dietary options as an array of selected options
     const selectedDietary = Object.entries(dietaryOptions)
        .filter(([_, value]) => value)
        .map(([key]) => key);

        formData.append("tags", JSON.stringify(selectedDietary)); 
        
        // Send to backend
        try {
            const response = await axios.post("https://dynamicdigitalmenu2.touchtoshop.com/dynamicdigitalmenu-api2/api/products", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }
            );

            //const result = await response.data();
            //console.log("Success:", result);
            setMessage('Product created successfully');
            setMessageType('success');
        } catch (error) {
            console.error("Upload failed:", error);
            setMessage('Failed to save product ' + error);
            setMessageType('danger');
        }
    };


    return (
        <div>
            <AdminHeader />
            <div className="container-fluid" style={{ background: "#F9FAFB" }}>

                <div className="row">
                    <div className="col-md-6 p-3">
                        <div className="d-flex gap-2">
                            <Link to="/menu-managemnet" className="btn btn-primary border border-0" style={{ background: "#fff", color: "#4B5563" }}>
                                <span className='pe-1'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 1.33333V6C2 6.73333 2.6 7.33333 3.33333 7.33333H6C6.35362 7.33333 6.69276 7.19286 6.94281 6.94281C7.19286 6.69276 7.33333 6.35362 7.33333 6V1.33333" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M4.66699 1.33333V14.6667" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.0003 10V1.33333C13.1163 1.33333 12.2684 1.68452 11.6433 2.30964C11.0182 2.93477 10.667 3.78261 10.667 4.66667V8.66667C10.667 9.4 11.267 10 12.0003 10H14.0003ZM14.0003 10V14.6667" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                Categories
                            </Link>
                            <Link to="/menu-managemnet-add" className="btn btn-primary border border-0" style={{ background: "#DBEAFE", color: "#0d6efd" }}>
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
                            <h4>Add New Dish</h4>

                            <form className='' onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Title En</label>
                                    <input type="text" className="form-control border border-0 border-bottom rounded-0"
                                        style={{ "::placeholder": { color: "red" } }} id="exampleFormControlInput1"
                                        value={itemName}
                                        onChange={(e) => setItemName(e.target.value)}
                                        placeholder="e.g., Margherita Pizza" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput2" className="form-label">Title He</label>
                                    <input type="text" className="form-control border border-0 border-bottom rounded-0"
                                        style={{ "::placeholder": { color: "red" } }} id="exampleFormControlInput2"
                                        value={itemNameUr}
                                        onChange={(e) => setItemNameUr(e.target.value)}
                                        placeholder="e.g., Margherita Pizza" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput3" className="form-label">Description</label>
                                    <textarea type="text" className="form-control border border-0 border-bottom rounded-0"
                                        style={{ "::placeholder": { color: "red" } }} id="exampleFormControlInput3"
                                        onChange={(e) => setDescription(e.target.value)} value={description}
                                        placeholder="Brief description of the dish..." >
                                    </textarea>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput4" className="form-label">Description He</label>
                                    <textarea type="text" className="form-control border border-0 border-bottom rounded-0"
                                        style={{ "::placeholder": { color: "red" } }} id="exampleFormControlInput4"
                                        onChange={(e) => setDescriptionUr(e.target.value)} value={descriptionUr}
                                        placeholder="Brief description of the dish..." >
                                    </textarea>
                                </div>
                                <select className="mb-3" name="parentCategory" onChange={changeCategory}>
                                    <option value="0">None (Top-level)</option>
                                    {categories.map((cat) => (
                                        <option key={cat._id} value={cat._id}>{cat.name.en}</option>
                                    ))}
                                </select>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput5" className="form-label">Price</label>
                                    <input type="number" className="form-control border border-0 border-bottom rounded-0"
                                        style={{ "::placeholder": { color: "red" } }} id="exampleFormControlInput5"
                                        onChange={(e) => setPrice(e.target.value)} value={price}
                                        placeholder="0.00" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput6" className="form-label">SKU</label>
                                    <input type="text" className="form-control border border-0 border-bottom rounded-0"
                                        style={{ "::placeholder": { color: "red" } }} id="exampleFormControlInput6"
                                        onChange={(e) => setSku(e.target.value)} value={sku}
                                        placeholder="" />
                                </div>
                                <ImageUpload onImageSelect={(file) => setSelectedImage(file)} />

                                <div className="mb-3">
                                    <label for="exampleFormControlInput7" className="form-label">Dietary Options</label>
                                    <div className="">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="vegan"
                                                checked={dietaryOptions.vegan} onChange={handleCheckboxChange} />
                                            <label class="form-check-label" for="inlineCheckbox1"><img style={{ height: 20, width: 20, marginRight: 10 }} src={leafIcon} alt="Vegan Icon" />Vegan</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="checkbox" id="spicy"
                                                checked={dietaryOptions.spicy} onChange={handleCheckboxChange} />
                                            <label class="form-check-label" for="inlineCheckbox2"><img style={{ height: 20, width: 20, marginRight: 10 }} src={chilleIcon} alt="Spicy Icon" />Spicy</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput8" className="form-label">HighLight text</label>
                                    <input type="text" className="form-control border border-0 border-bottom rounded-0"
                                        style={{ "::placeholder": { color: "red" } }} id="exampleFormControlInput8"
                                        onChange={(e) => setHighlight(e.target.value)} value={highlight}
                                        placeholder="e.g., Special Dish" />
                                </div>
                                {message && (
                                    <div
                                        className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mt-2`}
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                )}
                                <button type="submit" className="btn btn-primary border border-0" style={{ background: "#0d6efd", color: "#fff" }}>
                                    Add Dish
                                </button>
                            </form>

                        </div>

                    </div>
                    <div className="col-md-6 ">
                        <div className="container p-3 bg-white mt-3">
                            <Link to="#" >
                                Live Preview
                            </Link>
                            {/* <h5 className="mb-4 pt-4">Appetizers</h5>*/}
                            <div className=" p-2 ">
                                <div className="product-card">



                                    <div className="product-image" style={{
                                        backgroundImage: selectedImage
                                            ? `url(${URL.createObjectURL(selectedImage)})`
                                            : `url('https://via.placeholder.com/300')` // <-- fallback image
                                    }}
                                    >
                                        <div className="overlay">
                                            <span className="product-category-tag">Special Deal</span>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <div className="product-row">
                                            <h5 className="product-title">{itemName}</h5>
                                            <div className="product-price">${price}</div>
                                        </div>
                                        <p className="product-description">{description} </p>
                                        <div className="product-row">
                                            <div className="product-tags">
                                                <div className='tag vegan'>
                                                    Vegan
                                                    <img style={{ height: 10, width: 10 }} src={leafIcon} alt="Vegan Icon" />
                                                </div>
                                                <div className='tag gluten-free'>
                                                    Gluten Free
                                                    <img style={{ height: 10, width: 10 }} src={wheatIconIcon} alt="Vegan Icon" />
                                                </div>
                                                <div className="tag spicy">
                                                    Spicy  <img style={{ height: 10, width: 10 }} src={chilleIcon} alt="Spicy Icon" />
                                                </div>
                                            </div>
                                            <button type="button" className="read-more-btn" data-bs-toggle="modal"
                                                data-bs-target="#productModal" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512">
                                                    <path fill="none" stroke="#0d6efd" stroke-linecap="round" stroke-linejoin="round" stroke-width="41" d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48" />
                                                </svg>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MenuManagementAdd;
