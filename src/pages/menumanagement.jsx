import './../assets/css/admin.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import AdminHeader from './../components/adminheader';
import { fetchCategories,deleteCategory } from './../api';
import translations from '../../src/components/languagues';

function MenuManagement({ language, setLanguage }) {

    const [form, setForm] = useState({
        id: null,
        name: { en: '', he: '' },
        image: null,
    });

    const [categoryName, setCategoryName] = useState('');
    const [categoryNameHe, setCategoryNameHe] = useState('');
    const [categoryParent, setCategoryParent] = useState('');
    const [btnText, setbtnText] = useState('Add Category');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [categories, setCategories] = useState([]);
    const [editingCategory, setEditingCategory] = useState(null);
    const [preview, setPreview] = useState(null);
    const [image, setImage] = useState(null);
    const [formId, setFormId] = useState(null);

    const changeParentCategory = e => {
    setCategoryParent( e.target.value );
  };

    const handleImageChange = (e) => {
        const file = e.target.files[0];


        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (lang, value) => {
        setForm(prev => ({
            ...prev,
            name: { ...prev.name, [lang]: value }
        }));
    };

    useEffect(() => {
        fetchCategories().then( (data) => {
                setCategories(data);
            }
        );
    }, []);


    const handleDelete = async (id) => {
        try {
            deleteCategory(id);
            fetchCategories().then( (data) => {
                    setCategories(data);
                }
            );
        } catch (error) {
            alert('Error deleting');
        }
    };
    // SAVE UPDATE
    const handleUpdate = async () => {
        try {
            const res = await fetch(`https://localhost:5000/api/categories/${editingCategory._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: editingCategory.name,
                    image: editingCategory.image,
                }),
            });
            if (res.ok) {
                setbtnText("Add Category");
                setMessage('Category updated successfully!');
                setMessageType('success');
                setCategoryName('');
                setCategoryNameHe('');
                setEditingCategory(null);
                fetchCategories();
            } else {
                alert('Update failed');
            }
        } catch (error) {
            alert('Error updating');
        }
    };

    /*
    const handleSubmit = async () => {
        setMessage('');
        setMessageType('');
        try {
            const response = await fetch('http://localhost:5000/api/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: {
                        en: categoryName, // Add other languages here if needed
                        he: categoryNameHe
                    },
                    image: '', // You can add image upload later
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Category added successfully!');
                setMessageType('success');
                setCategoryName('');
                setCategoryNameHe('');
                fetchCategories();
            } else {
                setMessage(data.message || 'Something went wrong!');
                setMessageType('error');
            }
        } catch (error) {
            setMessage('Server error: ' + error.message);
            setMessageType('error');
        }
    };
    */

    const handleEditStart = (cat) => {
        setEditingCategory(cat);
        setForm({
            id: cat._id,
            name: cat.name,
            image: cat.image || null,
        });
        setPreview(cat.image || null);
        setImage(null);
        setBtnText("Update Category");
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', JSON.stringify({ en: categoryName, he: categoryNameHe }));
        if (image) formData.append('image', image);
        if (categoryParent) formData.append("parentCategory", categoryParent);

        
        try {
            /*
          if (form.id) {
            await axios.put(`/api/categories/${form.id}`, formData);
            setMessage('Category updated successfully');
            setMessageType('success');
          } else {
           */
            await axios.post('https://dynamicdigitalmenu2.touchtoshop.com/dynamicdigitalmenu-api2/api/categories', formData);
            setMessage('Category created successfully');
            setMessageType('success');
            setCategoryName("");
        setCategoryNameHe("");
        setImage(null);
            //}

            // Reset form

            setForm({ id: null, name: { en: '', he: '' }, image: null });
            setFormId(null);
            setCategoryName('');
            setCategoryNameHe('');
            setImage(null);
            setPreview(null);
            setbtnText('Add Category');
            setEditingCategory(null);
            fetchCategories();

        } catch (err) {
            console.error('Error saving category:', err);
            setMessage('Failed to save category' + err);
            setMessageType('danger');
        }
    };



    /*
    const categories = [
        { name: "Appetizers", image: "https://s3-alpha-sig.figma.com/img/af99/bb38/066fa85c4ddb4079400be84797edaf0d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VPHV02Iwva66kEktsYeqIRJSKMj1UybO0mstSsxAIBWG1SWn59iLoCCtxNfXeVfkzCIntIpSgk-Cjj1aXJ1fqauNE2KkVNRZZ85dJGbrJYkiXJE1TLOpEl6S-fDja2cr0xY9AUgdrgXz5CGTxjm0YhluyNZod4ivvOzB1Zyd7qeWA00Opd22tOgCxYaBaBU3TyA~xfxjWz8aNf4HgHoLNhn3AQfyrp2atCozM~71Ve8h7wh993P8~AjZI75fOPMpLf44Gq2iuDv7b~bWjecwCepF~-1eAXGFT~JfAxEBIWbyvYqKFFhgot6Wr~hJjJcmbT3zvJPVhsDLv7~0R08iSw__" },
        { name: "Main Course", image: "https://s3-alpha-sig.figma.com/img/da6e/0072/3035095c8694b1fecb5a8978bc04f554?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VlqWE4h7xtGunDG8IHQPnQAEQFuKsQXqscpUa7vVMtImnfLKgFxaCCUyNO7HcEdAVRrdxy3H-RYSF0OEU6HyVmvQS8WZOkIhCxGKx8Kt-qFL0dxjRccSa-IYK2wuBxFloi0j-V9mu21BSGVczSzLd5Cy6XqutG5jBYn3vBjb6saAsZEdn5eX12laXNtxE-QvNB6dl4TTvycL8KA4B54opxMKVw1n2NKP7SN9zghWnQ87ET6BvFM74S35Ak~I2eub7vEwJuREvZOkblm1ItjDO0GxBBCIa-P7x4MJpWCYULlTOhlQEkxaVL-M2~nOh-XTr46iUex-8zk6nzjtrNadOA__" },
        { name: "Desserts", image: "https://s3-alpha-sig.figma.com/img/ceff/b7a3/68aecebd398f9c726343810117badbe3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k-QjtpFt6NZM7rRW0ESSk2Ijyidix2zoeL3sRSG4oKVBOfiObFZFAWJsfUDHpklsP8tZ0APX4n-CeIAdYUWGGTas9Dpysto5IPhVBeaRLYdOb1T0DQXKw8DH5Y~31sBY-2K21-Ct8AYq5TBuhoZ1VdzCymODKZ-Qody6WUllBS51Ob3SCNgH78dWBPeogdlrFSx-tk5yVM2rOlAoKEU~qHZt0Js5Ra1vrfmIgZKa9s4kVEGkKuU0KvSbrB82hcC7JYBSmkvXDOAR-xqd59FVJzrVIi9NfA3hzCKEDeRF6X8MzbxvMpfrcpV1l7PEAk6LQN8TL09bS2bSK2ZB1yz3EQ__" },
        { name: "Drinks", image: "https://s3-alpha-sig.figma.com/img/e9a9/466f/e1f5cf6664854aa30c855585ec161324?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gq5iaes2WNym6oOPh1aJ0k8wAKBePt6uOd7isHKXEFnysdkCNmG9FcRclBvS1lIJCWFFzE5sFTvNIl15QKJaZUJBdVmS2cXel8W~JFDBcLc0OSHbK~~pCndZ~BjDCHR1n6wf0EQdL8wDaWCF4C4tuRThFV4Pa59zIaHXf-wLvqZDySApBHO9pkgzptM1kQY9QrMnTDz4zK3P~wf1V~k-KS0ADxQinm5qoN5kzgztjzcnH9IQgaTniXor2RbiW4BetqMwQYS1UwZprLYz6ZBuyCRlkGgX7gYWtsGHnfiTtzVsUfQoEcZYYgiiU2cPDsqPzXrz7z0kh32iQqxPA5acJA__" },
    ];
    */


    const CategoriesSection = () => {


        return (
            <div className="container p-3 bg-white mt-3">
                <Link to="#" >
                    Live Preview
                </Link>
                <h5 className="mb-4 pt-4">{translations[language].categoryTitle}</h5>

                {/* Scrollable Row */}
                <div className="categories-container">
                    {categories.map((cat, index) => (
                        <div key={index} className="category-card" style={{ backgroundImage: `url(${cat.imageUrl})` }}>
                            <Link className='text-white link-offset-2 link-underline link-underline-opacity-0' to="/categoryproducts">
                                <div className="overlay"></div>
                                <h5 className="category-text">{cat.name.en}</h5>
                            </Link>
                        </div>
                    ))}
                </div>

                <h5 className="mb-4 pt-4">{translations[language].categoryTitle}</h5>

                <div className="categories-container">
                    {categories.map((category, index) => (
                        <div key={index} className="category-card" style={{ backgroundImage: `url(${category.imageUrl})` }}>
                            <Link className='text-white link-offset-2 link-underline link-underline-opacity-0' to="/categoryproducts">
                                <div className="overlay"></div>
                                <h5 className="category-text">{category.name.en}</h5>
                            </Link>
                        </div>
                    ))}
                </div>


            </div>
        );
    };

    const CategoiresData = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        }

    ];
    return (
        <div>
            <AdminHeader language={language} setLanguage={setLanguage} />
            <div className="container-fluid" style={{ background: "#F9FAFB" }}>

                <div className="row" style={{ direction: language === "he" ? "rtl" : "ltr" }}>
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
                                {translations[language].categoryTitle}
                            </Link>
                            <Link to="/menu-managemnet-add" className="btn btn-primary border border-0" style={{ background: "#fff", color: "#4B5563" }}>
                                <span className='pe-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg>
                                </span>
                                {translations[language].addItem}
                            </Link>
                            <Link to="/menu-managemnet-setting" className="btn btn-primary border border-0" style={{ background: "#fff", color: "#4B5563" }}>
                                <span className='pe-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2" /></svg>
                                </span>
                                {translations[language].setting}
                            </Link>
                        </div>
                        <div className="bg-white mt-4 p-3">
                            <h4>{translations[language].categoryTitle}</h4>

                            <form className='' onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label" >{translations[language].name} English</label>
                                    <input type="text" value={categoryName}
                                        onChange={(e) => setCategoryName(e.target.value)} className="form-control border border-0 border-bottom rounded-0" style={{ "::placeholder": { color: "red" } }} id="exampleFormControlInput1" placeholder="e.g., Main Dishes" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput2" className="form-label" >{translations[language].name} Hebrow</label>
                                    <input type="text" value={categoryNameHe}
                                        onChange={(e) => setCategoryNameHe(e.target.value)} className="form-control border border-0 border-bottom rounded-0" style={{ "::placeholder": { color: "red" } }} id="exampleFormControlInput2" placeholder="e.g., Main Dishes" />
                                </div>
                                <select className="mb-3" name="parentCategory" onChange={changeParentCategory}>
                                    <option value="0">None (Top-level)</option>
                                    {categories.map((cat) => (
                                        <option key={cat._id} value={cat._id}>{cat.name.en}</option>
                                    ))}
                                </select>
                                <div className="mb-3">
                                    <label className="block text-sm font-medium">{translations[language].image}</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="mt-1 block"
                                    />
                                </div>
                                {preview && (
                                    <div className="mt-2">
                                        <img src={preview} alt="Preview" style={{ height: 120, width: 120 }} className="h-32 object-cover rounded" />
                                    </div>
                                )}

                                <button type="button" className="btn btn-primary border border-0" onClick={btnText == "Update Category" ? handleUpdate : handleSubmit} style={{ background: "#0d6efd", color: "#fff" }}>
                                    <span className='pe-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg>
                                    </span>
                                    {btnText}
                                </button>
                                {message && (
                                    <div
                                        className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'} mt-2`}
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                )}
                            </form>
                            <div className="pt-4 pb-3">
                                {translations[language].existing} {translations[language].categoryTitle}
                            </div>

                            <div className="container-fluid gap-2">
                                {categories.map((cat) => (
                                    <div className="p-3 mb-2 rounded-3 d-flex bg-light justify-content-between align-items-center">
                                        <div className="">
                                            {cat.name.en}
                                        </div>
                                        <div className="d-flex">
                                            {/* 
                                            <button onClick={() => handleEditStart(cat)} className="btn btn-primary border border-0 bg-light text-success">
                                                Edit
                                            </button>
                                            */}
                                            <button onClick={() => handleDelete(cat._id)} className="btn btn-primary border border-0 bg-light text-danger">
                                                {translations[language].remove}
                                            </button>
                                        </div>
                                    </div>
                                ))}

                            </div>


                        </div>

                    </div>
                    <div className="col-md-6 ">
                        <CategoriesSection />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MenuManagement;
