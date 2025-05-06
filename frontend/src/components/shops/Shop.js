import React, { useState } from 'react'
import HeaderBar from '../HeaderBar'
import { useSearchParams } from 'react-router-dom';
//import ChatBot from '../components/ChatBot/ChatBot';

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

  const products = [
  {
    category: "Laptops and Computers",
    name: "AwesomeBook Pro 16",
    rating: 5,
    hasDiscount: true,
    originalPrice: 1999.99,
    discountedPrice: 1799.99,
    discountPercentage: 10,
    imageUrl: "/images/placeholder.png",
  },
  {
    category: "Smartphones",
    name: "MegaPhone X",
    rating: 4,
    hasDiscount: false,
    originalPrice: 999.00,
    discountedPrice: null,
    discountPercentage: 0,
    imageUrl: "/images/placeholder.png",
  },
  {
    category: "Tablets",
    name: "TabMaster 11",
    rating: 4,
    hasDiscount: true,
    originalPrice: 499.00,
    discountedPrice: 399.00,
    discountPercentage: 20,
    imageUrl: "/images/placeholder.png",
  },
  {
    category: "Headphones",
    name: "AudioBlaster Pro",
    rating: 5,
    hasDiscount: false,
    originalPrice: 249.00,
    discountedPrice: null,
    discountPercentage: 0,
    imageUrl: "/images/placeholder.png",
  },
  {
    category: "Smartwatches",
    name: "WatchIt Now 3",
    rating: 4,
    hasDiscount: true,
    originalPrice: 349.00,
    discountedPrice: 299.00,
    discountPercentage: 14,
    imageUrl: "/images/placeholder.png",
  },
  {
    category: "Laptops and Computers",
    name: "BudgetBook 14",
    rating: 3,
    hasDiscount: false,
    originalPrice: 799.00,
    discountedPrice: null,
    discountPercentage: 0,
    imageUrl: "/images/placeholder.png",
  },
  ];

  const faqs = [
{
  question: "What is your return policy?",
  answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, we can't offer you a refund or exchange."
},
{
  question: "How do I track my order?",
  answer: "You can track your order using the tracking link sent to your email after shipment."
},
{
  question: "What payment methods do you accept?",
  answer: "We accept credit cards, PayPal, and other major payment methods."
},
{
  question: "Can I change or cancel my order?",
  answer: "You can change or cancel your order within 24 hours of placing it. Please contact customer support."
},
{
  question: "Do you ship internationally?",
  answer: "Yes, we ship to many countries worldwide. Shipping fees may vary."
}
  ];

  const [openIndex, setOpenIndex] = useState(null); 
  const handleFaq = (index) =>{
    setOpenIndex(prev => (prev === index ? null : index));
  }
      
   
    
  return (
    <div className='Shop'>
        <HeaderBar
            pageName={'TechGadgets Hub'}
            pagePath={['Home', 'Shop List', 'Shop']}
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

          <div className="shop-products">
            <div className="shop-category-head">
              <div className="shop-category-head-left">
                <div className="shop-category-head-left-title">Our Products</div>
                <div className="shop-category-head-left-desc">Discover our wide range of high-quality products</div>
              </div>
              <div className="shop-category-head-right">View All Products {'>'}</div>
            </div>

            <div className="shop-products-product">
              {products.map((product)=>{
                return (
                <div className="shop-products-product-card">

                  <div className='image-container'>
                    <img  className="shop-bundles-bundle-card-image" src={product.imageUrl} alt="" />
                    {product.hasDiscount && (
                      <div class="discount-badge">{product.discountPercentage}% Off</div>
                    )}
                    <button className="view-product">View Product</button>
                  </div>

                  <div className="shop-products-product-card-desc">
                    <div className="shop-products-product-card-desc-cat">{product.category}</div>
                    <div className="shop-products-product-card-desc-title">{product.name}</div>
                    <div className="shop-products-product-card-desc-rating">
                      {Array.from({ length: product.rating }, (_, index) => (
                        <div key={index}>
                          {<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='star'>
                            <path d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z" fill="#FFC416"/>

                           </svg>}
                        </div>
                      ))}
                      {Array.from({ length: (5 - product.rating) }, (_, index) => (
                        <div key={index}>
                          {<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.64154 4.13792L6.66615 3.7055L5.33608 1.00901C5.29975 0.935185 5.23998 0.875419 5.16615 0.839091C4.981 0.747685 4.756 0.823857 4.66342 1.00901L3.33334 3.7055L0.35795 4.13792C0.275919 4.14964 0.200919 4.18831 0.143497 4.2469C0.0740774 4.31826 0.0358239 4.41425 0.0371424 4.51379C0.0384608 4.61333 0.0792433 4.70828 0.150529 4.77776L2.30326 6.87659L1.79467 9.84026C1.78274 9.9092 1.79037 9.98011 1.81669 10.0449C1.84301 10.1098 1.88697 10.1659 1.94358 10.207C2.00019 10.2481 2.06719 10.2726 2.13697 10.2776C2.20676 10.2825 2.27655 10.2679 2.33842 10.2352L4.99975 8.83597L7.66108 10.2352C7.73373 10.2739 7.81811 10.2867 7.89897 10.2727C8.10287 10.2375 8.23998 10.0442 8.20483 9.84026L7.69623 6.87659L9.84897 4.77776C9.90756 4.72034 9.94623 4.64534 9.95795 4.56331C9.98959 4.35823 9.84662 4.16839 9.64154 4.13792V4.13792Z" fill="#B2B2B2"/>
                          </svg>}
                        </div>
                      ))}
                    </div>
                    <div className="shop-bundles-bundle-card-desc-end">
                      <div className="shop-bundles-bundle-card-desc-price">
                        {product.hasDiscount && (
                          <>
                            <div className="shop-bundles-bundle-card-desc-price-previous">${product.discountedPrice}</div> 
                            <div className="shop-bundles-bundle-card-desc-price-now">${product.originalPrice}</div>
                          </>
                        )}
                        {!product.hasDiscount && (
                          <div className="shop-bundles-bundle-card-desc-price-now">${product.originalPrice}</div>
                        )}
                      </div>
                      <div className="shop-bundles-bundle-card-desc-button">
                        <button className="shop-products-product-card-desc-button-btn">+</button>
                      </div>
                    </div>
                  </div>
                </div>)
              })}
              
            </div>
          </div>

          <div className="shop-faqs">
            <div className="shop-faqs-intro">
              <div className="shop-faqs-intro-title">Frequently Asked Questions</div>
              <div className="shop-faqs-intro-desc">Find answers to common questions about our products and services</div>
            </div>
            <div className="faq">
              {faqs.map((faq, index)=>{
                return (
                  <div key={index} class={`faq-item ${openIndex === index ? 'active' : ''}`} onClick={()=>handleFaq(index)}>
                    <div class="question">{faq.question}</div>
                    <div class="answer">
                      {faq.answer}
                    </div>
                  </div>
                )
              })}
              
            </div>
            <div className="shop-faqs-end">
              <div className="shop-faqs-end-desc">Still have questions? We're here to help!</div>
              <button className="shop-faqs-end-btn">Contact Support</button>
            </div>

          </div>


        </div>


        
    </div>
  )
}

export default Shop