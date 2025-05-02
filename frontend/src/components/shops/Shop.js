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
      { image: '/images/placeholder.png', name: "Laptops and Computers", quantity: 42 },
      { image: '/images/placeholder.png', name: "Smartphones", quantity: 35 },
      { image: '/images/placeholder.png', name: "Tablets", quantity: 28 },
      { image: '/images/placeholder.png', name: "Headphones", quantity: 50 },
      { image: '/images/placeholder.png', name: "Smartwatches", quantity: 22 }
    ]);
    
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
                  <div className="shop-category-categories-card-image"><img src={category.image} alt="" /></div>
                  <div className="shop-category-categories-card-desc">
                    <div className="shop-category-categories-card-desc-title">{category.name}</div>
                    <div className="shop-category-categories-card-desc-quantity">{category.quantity} Products</div>
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