import React from 'react'
import { useState } from 'react'
import HeaderBar from '../HeaderBar'

const ProductListing = () => {
    const [numProducts, setNumProducts] = useState(0)
    const products = [
    {
        imgUrl: "/images/placeholder.png",
        name: "Wireless Headphones",
        hasDiscount: true,
        discount: 20,
        realPrice: 100,
        discountedPrice: 80
    },
    {
        imgUrl: "/images/placeholder.png",
        name: "Smart Watch",
        hasDiscount: false,
        discount: 0,
        realPrice: 150,
        discountedPrice: 150
    },
    {
        imgUrl: "/images/placeholder.png",
        name: "Portable Charger",
        hasDiscount: true,
        discount: 10,
        realPrice: 30,
        discountedPrice: 27
    },
    {
        imgUrl: "/images/placeholder.png",
        name: "Bluetooth Speaker",
        hasDiscount: true,
        discount: 15,
        realPrice: 60,
        discountedPrice: 51
    },
    {
        imgUrl: "/images/placeholder.png",
        name: "Gaming Mouse",
        hasDiscount: false,
        discount: 0,
        realPrice: 40,
        discountedPrice: 40
    },
    {
        imgUrl: "/images/placeholder.png",
        name: "Gaming Mouse",
        hasDiscount: false,
        discount: 0,
        realPrice: 40,
        discountedPrice: 40
    }
    ];

  return (
    <div className='products'>
        <HeaderBar
            pageName={"Products"}
            pagePath={["Home", "Products"]}
        />
        <div className="product-list">
            <div className="shop-list-head">
            <div className="shop-list-head-left">
                <div className="shop-list-head-left-1">Fashion Items</div>
                <div className="shop-list-head-left-2">About {numProducts} results</div>
            </div>
            <div className="product-list-head-right">
                <div className="shop-list-head-right-1">
                    <span>Sort By: </span>
                    <select name="sort" id="sort" className='shop-list-head-right-1-select'>
                        <option value="name">Name</option>
                        <option value="date">Date</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>

                <div className="shop-list-head-right-2">
                    <div className="navbar-lower-right-searchbar">
                        <label name='searchBar'>
                            <input type="text" placeholder="Search Items" id='searchBar' style={{fontStyle:'italic'}}/>
                        </label>
                        <button id='searchButton'>
                            <svg width="24" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7099 20.2899L17.9999 16.6099C19.44 14.8143 20.1374 12.5352 19.9487 10.2412C19.76 7.94721 18.6996 5.81269 16.9854 4.27655C15.2713 2.74041 13.0337 1.91941 10.7328 1.98237C8.43194 2.04534 6.24263 2.98747 4.61505 4.61505C2.98747 6.24263 2.04534 8.43194 1.98237 10.7328C1.91941 13.0337 2.74041 15.2713 4.27655 16.9854C5.81269 18.6996 7.94721 19.76 10.2412 19.9487C12.5352 20.1374 14.8143 19.44 16.6099 17.9999L20.2899 21.6799C20.3829 21.7736 20.4935 21.848 20.6153 21.8988C20.7372 21.9496 20.8679 21.9757 20.9999 21.9757C21.1319 21.9757 21.2626 21.9496 21.3845 21.8988C21.5063 21.848 21.6169 21.7736 21.7099 21.6799C21.8901 21.4934 21.9909 21.2442 21.9909 20.9849C21.9909 20.7256 21.8901 20.4764 21.7099 20.2899ZM10.9999 17.9999C9.61544 17.9999 8.26206 17.5894 7.11091 16.8202C5.95977 16.051 5.06256 14.9578 4.53275 13.6787C4.00293 12.3996 3.86431 10.9921 4.13441 9.63427C4.4045 8.27641 5.07119 7.02912 6.05016 6.05016C7.02912 5.07119 8.27641 4.4045 9.63427 4.13441C10.9921 3.86431 12.3996 4.00293 13.6787 4.53275C14.9578 5.06256 16.051 5.95977 16.8202 7.11091C17.5894 8.26206 17.9999 9.61544 17.9999 10.9999C17.9999 12.8564 17.2624 14.6369 15.9497 15.9497C14.6369 17.2624 12.8564 17.9999 10.9999 17.9999Z" fill="url(#paint0_linear_708_260)"/>
                                <defs>
                                <linearGradient id="paint0_linear_708_260" x1="1.979" y1="1.979" x2="25.4288" y2="16.376" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#F3F9FF"/>
                                <stop offset="1" stopColor="#F1F0FF"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            </div>

            <div className="product-list-items">
                {products.map((product, index) => (
                    <div className="product-list-item" key={index}>
                        <div className="product-image-container">
                            <img src={product.imgUrl} alt={product.name} className="product-list-item-image" />
                            <div className="icon-container">
                                <svg className='icon1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs></defs><g       ><path class="cls-1" d="M29.46 10.14A2.94 2.94 0 0 0 27.1 9H10.22L8.76 6.35A2.67 2.67 0 0 0 6.41 5H3a1 1 0 0 0 0 2h3.41a.68.68 0 0 1 .6.31l1.65 3 .86 9.32a3.84 3.84 0 0 0 4 3.38h10.37a3.92 3.92 0 0 0 3.85-2.78l2.17-7.82a2.58 2.58 0 0 0-.45-2.27zM28 11.86l-2.17 7.83A1.93 1.93 0 0 1 23.89 21H13.48a1.89 1.89 0 0 1-2-1.56L10.73 11H27.1a1 1 0 0 1 .77.35.59.59 0 0 1 .13.51z" fill="#151875"/><circle class="cls-1" cx="14" cy="26" r="2"/><circle class="cls-1" cx="24" cy="26" r="2"/></g>
                                </svg>

                                <svg className='icon2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4399 3.07335C12.7321 2.36536 11.7937 1.9349 10.7953 1.86027C9.79701 1.78564 8.80505 2.07179 7.99986 2.66668C7.15163 2.03578 6.09585 1.74969 5.04514 1.86604C3.99442 1.98239 3.02682 2.49254 2.33717 3.29374C1.64753 4.09495 1.28707 5.1277 1.32839 6.18403C1.36971 7.24036 1.80974 8.2418 2.55986 8.98668L7.52652 13.9534C7.5885 14.0158 7.66223 14.0654 7.74347 14.0993C7.82471 14.1331 7.91185 14.1505 7.99986 14.1505C8.08787 14.1505 8.175 14.1331 8.25624 14.0993C8.33748 14.0654 8.41122 14.0158 8.47319 13.9534L13.4399 8.98668C13.8283 8.5985 14.1364 8.13758 14.3467 7.63026C14.5569 7.12294 14.6651 6.57917 14.6651 6.03002C14.6651 5.48086 14.5569 4.93709 14.3467 4.42977C14.1364 3.92246 13.8283 3.46154 13.4399 3.07335ZM12.4999 8.04668L7.99986 12.54L3.49986 8.04668C3.10331 7.64848 2.83317 7.14205 2.72334 6.59091C2.61351 6.03977 2.66888 5.46847 2.88249 4.94868C3.09611 4.42889 3.45846 3.98375 3.92409 3.6691C4.38972 3.35445 4.9379 3.18431 5.49986 3.18002C6.2506 3.18186 6.96992 3.48158 7.49986 4.01335C7.56183 4.07584 7.63557 4.12543 7.71681 4.15928C7.79805 4.19313 7.88518 4.21055 7.97319 4.21055C8.0612 4.21055 8.14834 4.19313 8.22958 4.15928C8.31082 4.12543 8.38455 4.07584 8.44652 4.01335C8.99207 3.54061 9.69685 3.29278 10.4182 3.32003C11.1396 3.34729 11.8237 3.64758 12.332 4.16014C12.8403 4.6727 13.1349 5.35924 13.1562 6.08081C13.1774 6.80238 12.9238 7.50508 12.4465 8.04668H12.4999Z" fill="#151875"/>
                                </svg>
                            </div>
                        </div>
                        <div className="product-list-item-name">{product.name}</div>
                        {/* {product.hasDiscount && <div className="product-list-item-discount">-{product.discount}%</div>} */}
                        <div className="product-list-item-price">
                            <span className={`real-price ${product.hasDiscount ? 'has-discount' : ''}`}>${product.discountedPrice}</span>
                            {product.hasDiscount ? (
                                <span className="discounted-price">${product.realPrice}</span>
                            ) : null}
                        </div>
                    </div>
                ))} 
            </div>
        </div>
      
    </div>
  )
}

export default ProductListing
