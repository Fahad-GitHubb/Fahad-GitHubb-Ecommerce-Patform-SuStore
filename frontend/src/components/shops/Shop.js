import React, { useState } from 'react'
import HeaderBar from '../HeaderBar'
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // Get the id
    const myParam = searchParams.get('id');
    // Get Shop details 


    // Categories array 
    const [categories, setCategories] = useState([
      { image: '/images/placeholder.png', name: "Laptops & Computers", quantity: 42 },
      { image: '/images/placeholder.png', name: "Smartphones", quantity: 35 },
      { image: '/images/placeholder.png', name: "Tablets", quantity: 28 },
      { image: '/images/placeholder.png', name: "Headphones", quantity: 50 },
      { image: '/images/placeholder.png', name: "Smartwatches", quantity: 22 }
    ]);

    const bundles = [
        {
          bundleName: "Chef's Delight Bundle",
          imgUrl: "/images/placeholder.png",
          shortDescription: "The ultimate starter kit for aspiring chefs.",
          includes: ["Chef's Knife", "Cutting Board", "Mixing Bowl", "Spatula"],
          previousPrice: 120.00,
          nowPrice: 102.00, // 120 * 0.85 (15% discount)
        },
        {
          bundleName: "Cozy Night In Bundle",
          imgUrl: "/images/placeholder.png",
          shortDescription: "Cozy night in? We've got you covered.",
          includes: ["Fuzzy Blanket", "Hot Chocolate Mix", "Scented Candle", "Book"],
          previousPrice: 60.00,
          nowPrice: 51.00, // 60 * 0.85
        },
        {
          bundleName: "Home Workout Power Pack",
          imgUrl: "/images/placeholder.png",
          shortDescription: "Level up your home workout routine.",
          includes: ["Yoga Mat", "Resistance Bands", "Dumbbells", "Water Bottle"],
          previousPrice: 90.00,
          nowPrice: 76.50, // 90 * 0.85
        },
        {
          bundleName: "Adventure Ready Kit",
          imgUrl: "/images/placeholder.png",
          shortDescription: "Get ready for your next outdoor adventure.",
          includes: ["Backpack", "Hiking Boots", "Compass", "First Aid Kit"],
          previousPrice: 150.00,
          nowPrice: 127.50, // 150 * 0.85
        },
        {
          bundleName: "Coffee Lover's Dream",
          imgUrl: "/images/placeholder.png",
          shortDescription: "The perfect gift for the coffee lover in your life.",
          includes: ["Coffee Beans", "French Press", "Mug", "Coffee Grinder"],
          previousPrice: 75.00,
          nowPrice: 63.75, // 75 * 0.85
        },
    ];
      
   
    
  return (
    <div className='Shop'>
        <HeaderBar
            pageName={'TechGadgets Hub'}
            pagePath={['Home', 'Shops', 'Shop']}
        />

        <div className="shop">
          <div className="shop-intro">
            <div className="shop-intro-title">TechGadgets Hub</div>
            <div className="shop-intro-tagline">Discover the Future of Technology</div>
            <div className="shop-intro-description">Your one-stop destination for premium electronics, gadgets, and accessories. We offer the latest technology at competitive prices with exceptional customer service</div>
            <div className="shop-intro-buttons">
              <button className="shop-intro-buttons-btn1">Browse Products</button>
              <button className="shop-intro-buttons-btn2">Contact Us</button>
            </div>
          </div>

          <div className="shop-category">
            <div className="shop-category-head">
              <div className="shop-category-head-left">
                <div className="shop-category-head-left-title">Shop by Category</div>
                <div className="shop-category-head-left-desc">Browse our wide selection of products by category</div>
              </div>
              <div className="shop-category-head-right">View All Categories {'>'}</div>
            </div>
            <div className="shop-category-categories">
              {categories.map((category)=>{
                return (
                <div className="shop-category-categories-card">
                  {/* <div className="shop-category-categories-card-image">*/}<img  className="shop-category-categories-card-image" src={category.image} alt="" />
                  <div className="shop-category-categories-card-desc">
                    <div className="shop-category-categories-card-desc-title">{category.name}</div>
                    <div className="shop-category-categories-card-desc-quantity">{category.quantity} Products</div>
                  </div>
                </div>)
              })}
            </div>
          </div>

          <div className="shop-bundles">
            <div className="shop-category-head">
              <div className="shop-category-head-left">
                <div className="shop-category-head-left-title">Featured Bundles</div>
                <div className="shop-category-head-left-desc">Save big with our specially curated product bundles</div>
              </div>
              <div className="shop-category-head-right">View All Bundles {'>'}</div>
            </div>
            <div className="shop-bundles-bundle">
              {bundles.map((bundle)=>{
                return (
                <div className="shop-bundles-bundle-card">
                  <div className='image-container'>
                    <img  className="shop-bundles-bundle-card-image" src={bundle.imgUrl} alt="" />
                    <div class="discount-badge">15% Off</div>
                    </div>
                  <div className="shop-bundles-bundle-card-desc">
                    <div className="shop-bundles-bundle-card-desc-title">{bundle.bundleName}</div>
                    <div className="shop-bundles-bundle-card-desc-shortDesc">{bundle.shortDescription}</div>
                    <div className="shop-bundles-bundle-card-desc-includes">
                      <div className='bundle-includes'>Includes: </div>
                        {bundle.includes.map((item)=>{
                            return (
                                <div className='bundle-item'><span className='arrow'>{'>'} </span>{item}</div>
                            )
                        })}
                    </div>
                    <div className="shop-bundles-bundle-card-desc-end">
                      <div className="shop-bundles-bundle-card-desc-price">
                        <div className="shop-bundles-bundle-card-desc-price-previous">${bundle.nowPrice}</div>
                        <div className="shop-bundles-bundle-card-desc-price-now">${bundle.previousPrice}</div>
                      </div>
                      <div className="shop-bundles-bundle-card-desc-button">
                        <button className="shop-bundles-bundle-card-desc-button-btn">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>)
              })}
              
            </div>
          </div>


        </div>


        
    </div>
  )
}

export default Shop