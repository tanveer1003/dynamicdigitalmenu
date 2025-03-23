import './../assets/css/admin.css';
import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from './../components/adminheader';
import wheatIconIcon from './../assets/icons/Vector-wheat.png';
import leafIcon from './../assets/icons/Vector-leaft.png';
import chilleIcon from './../assets/icons/Vector-chille.png';

function MenuManagementSetting(){

    const categories = [
        { name: "Appetizers", image: "https://s3-alpha-sig.figma.com/img/af99/bb38/066fa85c4ddb4079400be84797edaf0d?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VPHV02Iwva66kEktsYeqIRJSKMj1UybO0mstSsxAIBWG1SWn59iLoCCtxNfXeVfkzCIntIpSgk-Cjj1aXJ1fqauNE2KkVNRZZ85dJGbrJYkiXJE1TLOpEl6S-fDja2cr0xY9AUgdrgXz5CGTxjm0YhluyNZod4ivvOzB1Zyd7qeWA00Opd22tOgCxYaBaBU3TyA~xfxjWz8aNf4HgHoLNhn3AQfyrp2atCozM~71Ve8h7wh993P8~AjZI75fOPMpLf44Gq2iuDv7b~bWjecwCepF~-1eAXGFT~JfAxEBIWbyvYqKFFhgot6Wr~hJjJcmbT3zvJPVhsDLv7~0R08iSw__" },
        { name: "Main Course", image: "https://s3-alpha-sig.figma.com/img/da6e/0072/3035095c8694b1fecb5a8978bc04f554?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VlqWE4h7xtGunDG8IHQPnQAEQFuKsQXqscpUa7vVMtImnfLKgFxaCCUyNO7HcEdAVRrdxy3H-RYSF0OEU6HyVmvQS8WZOkIhCxGKx8Kt-qFL0dxjRccSa-IYK2wuBxFloi0j-V9mu21BSGVczSzLd5Cy6XqutG5jBYn3vBjb6saAsZEdn5eX12laXNtxE-QvNB6dl4TTvycL8KA4B54opxMKVw1n2NKP7SN9zghWnQ87ET6BvFM74S35Ak~I2eub7vEwJuREvZOkblm1ItjDO0GxBBCIa-P7x4MJpWCYULlTOhlQEkxaVL-M2~nOh-XTr46iUex-8zk6nzjtrNadOA__" },
        { name: "Desserts", image: "https://s3-alpha-sig.figma.com/img/ceff/b7a3/68aecebd398f9c726343810117badbe3?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k-QjtpFt6NZM7rRW0ESSk2Ijyidix2zoeL3sRSG4oKVBOfiObFZFAWJsfUDHpklsP8tZ0APX4n-CeIAdYUWGGTas9Dpysto5IPhVBeaRLYdOb1T0DQXKw8DH5Y~31sBY-2K21-Ct8AYq5TBuhoZ1VdzCymODKZ-Qody6WUllBS51Ob3SCNgH78dWBPeogdlrFSx-tk5yVM2rOlAoKEU~qHZt0Js5Ra1vrfmIgZKa9s4kVEGkKuU0KvSbrB82hcC7JYBSmkvXDOAR-xqd59FVJzrVIi9NfA3hzCKEDeRF6X8MzbxvMpfrcpV1l7PEAk6LQN8TL09bS2bSK2ZB1yz3EQ__" },
        { name: "Drinks", image: "https://s3-alpha-sig.figma.com/img/e9a9/466f/e1f5cf6664854aa30c855585ec161324?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gq5iaes2WNym6oOPh1aJ0k8wAKBePt6uOd7isHKXEFnysdkCNmG9FcRclBvS1lIJCWFFzE5sFTvNIl15QKJaZUJBdVmS2cXel8W~JFDBcLc0OSHbK~~pCndZ~BjDCHR1n6wf0EQdL8wDaWCF4C4tuRThFV4Pa59zIaHXf-wLvqZDySApBHO9pkgzptM1kQY9QrMnTDz4zK3P~wf1V~k-KS0ADxQinm5qoN5kzgztjzcnH9IQgaTniXor2RbiW4BetqMwQYS1UwZprLYz6ZBuyCRlkGgX7gYWtsGHnfiTtzVsUfQoEcZYYgiiU2cPDsqPzXrz7z0kh32iQqxPA5acJA__" },
    ];

    const categories2 = [
        { name: "Drinks", image: "https://s3-alpha-sig.figma.com/img/e9a9/466f/e1f5cf6664854aa30c855585ec161324?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gq5iaes2WNym6oOPh1aJ0k8wAKBePt6uOd7isHKXEFnysdkCNmG9FcRclBvS1lIJCWFFzE5sFTvNIl15QKJaZUJBdVmS2cXel8W~JFDBcLc0OSHbK~~pCndZ~BjDCHR1n6wf0EQdL8wDaWCF4C4tuRThFV4Pa59zIaHXf-wLvqZDySApBHO9pkgzptM1kQY9QrMnTDz4zK3P~wf1V~k-KS0ADxQinm5qoN5kzgztjzcnH9IQgaTniXor2RbiW4BetqMwQYS1UwZprLYz6ZBuyCRlkGgX7gYWtsGHnfiTtzVsUfQoEcZYYgiiU2cPDsqPzXrz7z0kh32iQqxPA5acJA__" },
    ];

   
    
    return (
        <div>
            <AdminHeader />
            <div className="container-fluid" style={{ background:"#F9FAFB"}}>
                
                <div className="row">
                    <div className="col-md-6 p-3">
                        <div className="d-flex gap-2">
                            <Link to="/menu-managemnet"  className="btn btn-primary border border-0" style={{background:"#fff",color:"#4B5563"}}>
                                <span className='pe-1'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 1.33333V6C2 6.73333 2.6 7.33333 3.33333 7.33333H6C6.35362 7.33333 6.69276 7.19286 6.94281 6.94281C7.19286 6.69276 7.33333 6.35362 7.33333 6V1.33333" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.66699 1.33333V14.6667" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.0003 10V1.33333C13.1163 1.33333 12.2684 1.68452 11.6433 2.30964C11.0182 2.93477 10.667 3.78261 10.667 4.66667V8.66667C10.667 9.4 11.267 10 12.0003 10H14.0003ZM14.0003 10V14.6667" stroke="#1D4ED8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                                Categories
                            </Link>
                            <Link to="/menu-managemnet-add"  className="btn btn-primary border border-0" style={{background:"#fff",color:"#4B5563"}}>
                                <span className='pe-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
                                </span>
                                Add Item
                            </Link>
                            <Link to="/menu-managemnet-setting"  className="btn btn-primary border border-0" style={{background:"#DBEAFE",color:"#0d6efd"}}>
                                <span className='pe-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"/></svg>
                                </span>
                                Settings
                            </Link>

                        </div>
                        <div className="bg-white mt-4 p-3">
                            <h4>Layout Settings</h4>

                            <form className=''>
                                <div className="d-flex gap-2">
                                    <div className="mb-3 d-flex flex-column">
                                        <button type="button" className="btn btn-primary px-5 py-1 bg-white text-dark border border-1" style={{background:"#0d6efd",color:"#4B5563",border: "2px dotted #fff",}}>
                                            <span className='d-flex flex-column justify-content-center align-items-start'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M3 9H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M9 21V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>

                                                Square Grid
                                            </span>
                                        </button>
                                    </div>
                                    <div className="mb-3 d-flex flex-column">
                                        <button type="button" className="btn btn-primary px-5 py-1 bg-white text-dark border border-1" style={{background:"#0d6efd",color:"#4B5563",border: "2px dotted #fff",}}>
                                            <span className='d-flex flex-column justify-content-center align-items-center'>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M3 9H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M9 21V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                                Banner List
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            
                            
                            
                        </div>
                        
                    </div>
                    <div className="col-md-6 ">
                        <div className="container p-3 bg-white mt-3">
                            <Link to="#" >
                                Live Preview
                            </Link>
                            <h5 className="mb-4 pt-4">Appetizers</h5>
                            <div  className=" p-2 ">
                                <div className="product-card">
                                    <div className="product-image" style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/d0eb/8e0c/a260d8a11f4b6635b008a86cd0ab6545?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a6fWuiB208FAQWLcSWJPyEz1EdHNRMQ8NPxAOPbZ2eYQmGWTXqnIOV2h1b-0bBnBZtvbSII4zulu-U1QoeiQxUl1tfnS~pcNqbSbREV~Ojtobwob6TiLYdsSuapJfBUUs2CVbghVk89ZpRQgMi~GJ8PlQdXitE6pog7gnHUCk9njzZdx6IuFLNb5mZeN1Hc1XTkmwqV8E6ill2H4G-9-TkevGl~gXunuuxm6zzg5yc~3MWgHWB8kHtv5C5j4avYAt9XZITRbIau-LcmAohC3Cb9O2YAaGL-QdkwOgwkWaXnx4yugCoBgj9M759ECfsjjB0ouA~6iPjljICT4zGrHow__)` }}>
                                        <div className="overlay">
                                            <span className="product-category-tag">Special Deal</span>
                                        </div>
                                    </div>
                                    <div className="product-details">
                                        <div className="product-row">
                                            <h5 className="product-title">Mediterranean Salad</h5>
                                            <div className="product-price">$12.99</div>
                                        </div>
                                        <p className="product-description">Fresh mixed greens with feta cheese, olives, and house dressing . </p>
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

export default MenuManagementSetting;