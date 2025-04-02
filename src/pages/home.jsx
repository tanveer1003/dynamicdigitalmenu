
//import Footer from './../components/footer';
import Header from './../components/header';
import searchComponent from './../components/searchcomponent';
import { FaFilter, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import translations from '../../src/components/languagues';

import category1 from './../assets/img/category-1.png';
import category2 from './../assets/img/category-2.png';
import category3 from './../assets/img/category-3.png';
import category4 from './../assets/img/category-4.png';

function Home({ language }) {

    const categories = [
        { name: "Appetizers", image: category1 },
        { name: "Main Course", image: category2 },
        { name: "Desserts", image: category3 },
        { name: "Starters", image: category4 },
        { name: "Starters", image: "https://s3-alpha-sig.figma.com/img/d2e8/7191/74c237403708f9c2ddffb04a8d9bf94e?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SahIidCo9QNOxVuDMqjmieOfw8arS93z-o16aUWWpbpTS2~gRxBreC9hBR5AOsxt3V2F2wJz67Yleu7ADT7GgZmdbLbD9BgKtRtkNzoiITpw7q~5S9E2EL~aLcBQs7D52b9AeTBMkvjjfIcFIuyoNYbMf5oxDMUDUEAJpzHPolACEp0PMlhwdyz-9P2gSpOaqfaxl2mVQNJxdRgM~cn~tZ13hBeepWHwy-WYXrFBNjGa0Y5XNkk08bSo3n5fl1vy1fGawsBjKNjnW~iF~hNdvS4GUOhoGpyPYy6wRNkR05gCcycy13A2uwlfK9oAkBETqJrUIchbbEecOKJIZ7coXQ__" },
        { name: "Cocktails", image: "https://s3-alpha-sig.figma.com/img/111f/f306/e06980019ed870c68840453ec1b01b0b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QhwEBCznNw0f9umomk1Fv2KoVmX9c~XeR3wbwjWYPhJ8-kjYZOt1sM3narblSKzErXoZTy1skTb-9L7QPp814aay4a3J~BoUj~QTuUOG2hcTKpFXutvlHUUd0sYAPERXRoqK8y9NTS-a~pKk4mPScFliEnfS1yhU-ErhZzlRn8icConcqWI~NLG31-gVQeTQlPJp7T5fx5ZeZroJjtOGrVj7j2arZdeUA9Q0nJADrOLBTTOSFkXe6-uI~w3UtYHDJxAJ8E9XFjFJmpnYgEXTd4OtgEwt-B-G4ECht9l2EYC-0qntQ2nY2PEA0KdS9d~HAYIPqFsOYu8ptzk8z~o0WA__" },
        { name: "Wines", image: "https://s3-alpha-sig.figma.com/img/7141/bc63/ca03bede5ad3c3503b9646326bf75e6b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X6Hy6ya0dR0YXW2EwDVzcs8WL-mWW7X7tRKeaKe94wteRHoBba7jvYqVaZHGJLxuGCqVtJCebTXKSI1mTZMXCLaAnfmJ1BwObluJcCnJzW0vt8EP8S5Dyzqd2HV161MDSZazdhTbxtx2WcvKGxlMrejHeCM32174wM9wEXAywH4dlEBDPFUOA6sjNN4GoLIHw6lJKKOa2MZH1MKQAlNOe2YTUAktc8xGdQoojIh48RMUJPZRY20LBPPcas-md-gK471fIIyCaYcvOQwBvlDcb497v4sBnblQIl30~0qBf2zScm~v3PZGcXrqQpJW6VrtqBsZ0AmvisD7PLw8GjrQbA__" },
        { name: "Beer", image: "https://s3-alpha-sig.figma.com/img/8b62/9e6f/d4b6900cf100679003a26d4e20e124a4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WwvhR65ATfYLR2eJU6A9V1U2dHyC77T7PUmeH7U7E7z0Yptx1N2S7WIzzv1g96hZrzKxdDbAPZxjNnyk9mfcLjPQIZDsp2AoIkFnNBNybp2cNaOPE38OqVa22InBqAh5rM~~LnrScozaLg1C9nUTX~vlaAXrQVZb5NByFacEg1cEANKRwyQoJ8KoZjvqUSTWXIhNbgbjwss1EmW7-PxlPFiyMK6RquBt74eIJy~RIOL~FYI9UsIjKczt~GuCU5oRA1PhaG59xfT6WNbh1xynQP64DLNOtHzMsfKMKnMDogsbmhNBdZHOUPPHf2l6RpDAELd9mpd2PjNOkNo4ZdAPHA__" },
        { name: "Alcohol", image: "https://s3-alpha-sig.figma.com/img/bc28/1232/f2ad2b3f2886eb87d4f55ca4abc37015?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iBG-N5UonUgaZkVnPNxrsNTPzIlRZNRwPzGvGKnRvbLPdQpV~6a-zNOReQvjfcYhk1LMP8EXjWHMl2TOzcQ6p-D1SeLACWCPedKsZzNK0u1iZ3elaJ2reiElrREEVDc1ECiwENM9pV7Z-9PwpRVKVLmQ2oCTrHcr8~fcJIHC1ry3axTkvLtPl7IS7DArKRqaR~LnHbZMqxj8jEmfKpxT0GwflIzREjVnyJWvWrTKTmSgUnhOcPnL-13lrfOl-Ax8fAkS0WFHAbf4ktYQ3LWHWGgkBcfBHg8Nfc4Z1j2m5NPOoXNTiF0xySDOYs3EZCATixQFrG0ITapXwI0lSIGx0A__" },
        { name: "Drinks", image: "https://s3-alpha-sig.figma.com/img/5ab9/2e28/f1f36259e5f4165148cf8ca79da9db30?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L42~1-BHJ6TRl9Xqtx92QVRzhR2eY5dfYEKL4DIl8SRJTV83a7PhgvmwhauzKSt95umTqukejmL8IVL5XQ8aEE2sqghEf-uQlSBIKvrt3ToLJUxX1BlouX1zUohun054lRgq13e3By18hUsg4uHORFfmLVsZUsuYv6AgRYPKNzK5zAdu8ynbAxV3SAnW9Bm6tDXam-P-QTu3ATfmqsC~w99Gle~511VAC5DW-3AmJBcRRJGbR~JWi~ZHU1kVoxTgr6KD1kxO2NpZa99~UJzMRAN9Bs7RSrfV1WvRZuke4PLtYZ94XeqifEF-889Ij4QLds7f4Lo95xLHQnp02prdXg__" },
        { name: "Desserts", image: "https://s3-alpha-sig.figma.com/img/e0eb/a9a4/827295d07bcc31ccdbb4c6bab98c8e9b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BoAbDnpQ6aMH0oKciVD33JJM3ZmzHbQBaUfFSiTRZ75iKEidWGfSIC3OVeGfQH371kkplkPM-meuWe4nLRRkZqn3J2eZzMji3wW30Jrwq0nZUBkkQJwOJ3KrZjBjyCImU~O3NZfGTEO~8rbWfmU0dqXFvq2mr1DiamZbyDsG4569kpJ1-Z32k07odlo8yiT1harkjB4UK1~UQz9B~wOt2-rovVa8EqpYAA6G6WhXeDTIvDK7DHbNNoz2qjLYVkx7w6dJqCDXerH6oKV-YzYvF3iAmgUbIcTqpOCHuc0vqIQh2JUWZiY-55W3e06BIaanfJeG5lHoIM9DBSF~yRowSA__" },
        { name: "Drinks", image: "https://s3-alpha-sig.figma.com/img/37a4/cde0/bdd0b0d2e6ab8fdb7d28cdee0822bdfa?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eWV~z4U2CeztYerf5Ryc0jHHW~8f4zbUtj3TowuP6zbouuDVGXB8auohZmNnaP7Undd5nWc34vB04dDOqKq7JGjZe64-Pubs4HnvkU1THmKYZHcHILukC0fJRw7xPOcM6Lb3GyUMdh~mX0jGIoAQ0nN~cCXqyjpE2xikYVsJjs-UxblbsCz7o4bb301LxgW4E9OLH2CIxTjsoQPNCGCBzWVL9CGynJHODI-u-O29HKA981DzZo8QFk-TFzWneSldj-9dvBpXP6pxmfrztA15ri6~I91~8Y2mkwdIeWY5g6gUN0kQ0kj-Pba~oSmEBF6DSPJvI5h7TIio59ZOsvcozg__" },
    ];

    const Categories = () => {
        return (
            <div className="container my-5">
                <h2 className="mb-4">Categories</h2>
                {/* 
                <div className="">
                    <div className="row justify-content-center"> 
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 mb-4 d-flex justify-content-center"  // Responsive column classes
                            >
                                <Link className='text-white text-decoration-none' to="/subcategories">
                                    <div
                                        className="category-card p-3" 
                                        style={{
                                            height: '240px', 
                                            width: '240px',
                                            backgroundImage: `url(${category.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    >
                                        <div className="overlay"></div>
                                        <h5 className="category-text text-white m-0">{category.name}</h5>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className="d-flex flex-wrap justify-content-center gap-4 "> 
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                to="/subcategories"
                                className="text-white text-decoration-none"
                            >
                                <div
                                    className="category-card p-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        height: "200px",
                                        width: "200px",
                                        backgroundImage: `url(${category.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="overlay"></div>
                                    <h5 className="category-text text-white m-0 text-center">{category.name}</h5>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <hr />

                </div>
                */}
                <div className="row">
                    {categories.map((category, index) => (

                        <div key={index} className="col-md-3 col-6 mb-4 text-center">
                            <Link className='text-white link-offset-2 link-underline link-underline-opacity-0' to="/subcategories">
                                <div className="category-card p-5" style={{ backgroundImage: `url(${category.image})` }}>
                                    <div className="overlay"></div>
                                    <h5 className="category-text text-white">{category.name}</h5>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        );
    };

    return (
        <div >

            <div className='pt-3' style={{ background: "rgb(243 246 250)" }} >
                <div className="px-2">
                    
                    {/*
                    <div className="container rounded-3 bg-white p-2 ">
                        <div className="row px-2 justify-content-center">

                            <div className="col-xl-8 col-lg-8 col-md-6 col-11">
                                <div className="input-group">
                                    <span className="input-group-text bg-white border border-end-0 pr-0" id="search-icon">
                                        <svg width="20" height="19" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.6746 14.3373L11.3752 11.0379M11.3752 11.0379C11.9396 10.4736 12.3873 9.80359 12.6927 9.06621C12.9981 8.32883 13.1553 7.53852 13.1553 6.74039C13.1553 5.94226 12.9981 5.15194 12.6927 4.41457C12.3873 3.67719 11.9396 3.00719 11.3752 2.44283C10.8109 1.87847 10.1409 1.43079 9.40349 1.12536C8.66611 0.819927 7.8758 0.662724 7.07767 0.662724C6.27953 0.662724 5.48922 0.819927 4.75184 1.12536C4.01447 1.43079 3.34447 1.87847 2.78011 2.44283C1.64032 3.58261 1 5.12849 1 6.74039C1 8.35229 1.64032 9.89816 2.78011 11.0379C3.91989 12.1777 5.46577 12.8181 7.07767 12.8181C8.68956 12.8181 10.2354 12.1777 11.3752 11.0379Z" stroke="#CCCCCC" stroke-width="0.759689" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control border border-start-0 pl-0"
                                        placeholder={` ${translations[language].seachPlaceholder} ...`}
                                        aria-label="Search"
                                        aria-describedby="search-icon"
                                        style={{ paddingLeft: "0px" }}
                                    />
                                </div>
                            </div>
                            <div className="col-1  p-0    d-md-none d-block">
                                <button className=" bg-white border-0  text-dark">
                                    <svg width="15" height="13" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6698 0.698597H1L5.26791 5.74541V9.23442L7.40187 10.3014V5.74541L11.6698 0.698597Z" stroke="#4B5563" stroke-width="1.28037" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </button>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-3 d-md-block d-none ">
                                <button className="btn w-100 border bg-white text-dark">
                                    <FaFilter className="me-1" />  {translations[language].FilterText}
                                </button>
                            </div>

                            <div className="col-xl-2 col-lg-2 col-md-3 d-md-block d-none">
                                <button className="btn btn-primary w-100">
                                    <FaSearch className="me-1" /> {translations[language].SearchText}
                                </button>
                            </div>

                        </div>
                    </div>
                    */}
                    <div className="container py-2 bg-white d-flex align-items-center mb-3">
                        {/* Search Input (95% on mobile, 80% on desktop) */}
                        <div className="flex-grow-1 me-2 w-sm-95 w-md-65">
                            <div className="input-group">
                                <span className="input-group-text bg-white border border-end-0 pr-0" id="search-icon">
                                    <svg width="20" height="19" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6746 14.3373L11.3752 11.0379M11.3752 11.0379C11.9396 10.4736 12.3873 9.80359 12.6927 9.06621C12.9981 8.32883 13.1553 7.53852 13.1553 6.74039C13.1553 5.94226 12.9981 5.15194 12.6927 4.41457C12.3873 3.67719 11.9396 3.00719 11.3752 2.44283C10.8109 1.87847 10.1409 1.43079 9.40349 1.12536C8.66611 0.819927 7.8758 0.662724 7.07767 0.662724C6.27953 0.662724 5.48922 0.819927 4.75184 1.12536C4.01447 1.43079 3.34447 1.87847 2.78011 2.44283C1.64032 3.58261 1 5.12849 1 6.74039C1 8.35229 1.64032 9.89816 2.78011 11.0379C3.91989 12.1777 5.46577 12.8181 7.07767 12.8181C8.68956 12.8181 10.2354 12.1777 11.3752 11.0379Z" stroke="#CCCCCC" stroke-width="0.759689" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    className="form-control border border-start-0 pl-0"
                                    placeholder={` ${translations[language].seachPlaceholder} ...`}
                                    aria-label="Search"
                                    aria-describedby="search-icon"
                                    style={{ paddingLeft: "0px" }}
                                />
                            </div>
                        </div>

                        {/* Filter Button (Hidden on desktop) */}

                        <button className=" d-md-none bg-white border-0  text-dark">
                            <svg width="15" height="13" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6698 0.698597H1L5.26791 5.74541V9.23442L7.40187 10.3014V5.74541L11.6698 0.698597Z" stroke="#4B5563" stroke-width="1.28037" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </button>

                        {/* Two Buttons (Hidden on mobile, 10% each on desktop) */}
                        <div className="d-none d-md-flex gap-2" style={{ width: "35%" }}>
                                <button className="btn w-100 border bg-white text-dark">
                                    <FaFilter className="me-1" />  {translations[language].FilterText}
                                </button>
                            <button className="btn btn-primary w-100">
                                    <FaSearch className="me-1" /> {translations[language].SearchText}
                                </button>
                        </div>
                    </div>
                </div>

                <Categories />
            </div>


        </div>
    )
}

export default Home
