import React, { useState } from 'react';
import HeaderBar from '../HeaderBar';

const Wishlist = () => {
  // Example wishlist items; in a real app you'd pull these from context or API
  const [wishlist, setWishlist] = useState([
    {
      imgUrl: "/images/placeholder.png",
      name: "Wireless Headphones",
      discountedPrice: 80,
      realPrice: 100,
      hasDiscount: true,
      discount: 20
    },
    {
      imgUrl: "/images/placeholder.png",
      name: "Smart Watch",
      discountedPrice: 150,
      realPrice: 150,
      hasDiscount: false,
      discount: 0
    }
  ]);

  const removeFromWishlist = (index) => {
    setWishlist(wishlist.filter((_, i) => i !== index));
  };

  return (
    <div className='products'>
      <HeaderBar
        pageName={"My Wishlist"}
        pagePath={["Home", "Wishlist"]}
      />

      <div className="product-list">
        <div className="shop-list-head">
          <div className="shop-list-head-left">
            <div className="shop-list-head-left-1">Wishlist Items</div>
            <div className="shop-list-head-left-2">
              {wishlist.length > 0
                ? `About ${wishlist.length} item${wishlist.length > 1 ? 's' : ''}`
                : "No items yet"}
            </div>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="empty-message p-8 text-center text-gray-500">
            Your wishlist is empty.
          </div>
        ) : (
          <div className="product-list-items">
            {wishlist.map((item, idx) => (
              <div className="product-list-item" key={idx}>
                <div className="product-image-container">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="product-list-item-image"
                  />
                  <button
                    className="remove-btn"
                    onClick={() => removeFromWishlist(idx)}
                    title="Remove from wishlist"
                  >
                    ✕
                  </button>
                </div>
                <div className="product-list-item-name">{item.name}</div>
                <div className="product-list-item-price">
                  <span className={`real-price ${item.hasDiscount ? 'has-discount' : ''}`}>
                    ${item.discountedPrice}
                  </span>
                  {item.hasDiscount && (
                    <span className="discounted-price">
                      ${item.realPrice}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
