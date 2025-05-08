import React from 'react'
import HeaderBar from '../HeaderBar'

const SellerDashboard = () => {
  return (
    <div className='seller-dashboard'>
        <HeaderBar 
            pageName={"Seller Dashboard"}
            pagePath={["Home", "Seller Dashboard"]}
        />
        <div className="sd">
            <div className="sd1">
                <div className="sd1-welcome">Welcome back, <span>{'Sarah Johnsons!'}</span></div>
            </div>
            <div className="sd2">
                <div className="sd2-sales">
                    <div className="sd2-sales-title">
                        <div className="sd2-sales-title-1">Total Sales</div>
                        <div className="sd2-sales-title-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign h-4 w-4 text-blue-600"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                    </div>
                    <div className="sd2-sales-amount">
                        <span>$</span>
                        {'48,659.75'}
                    </div>
                </div>
                <div className="sd2-orders">
                    <div className="sd2-sales-title">
                        <div className="sd2-sales-title-1">Total Orders</div>
                        <div className="sd2-sales-title-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag h-4 w-4 text-blue-600"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        </div>
                    </div>
                    <div className="sd2-sales-amount">
                        {'1,287'}
                    </div>
                </div>
                <div className="sd2-customers">
                    <div className="sd2-sales-title">
                        <div className="sd2-sales-title-1">Total Customers</div>
                        <div className="sd2-sales-title-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-4 w-4 text-blue-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                    </div>
                    <div className="sd2-sales-amount">
                        {'876'}
                    </div>
                </div>
                <div className="sd2-rating">
                    <div className="sd2-sales-title">
                        <div className="sd2-sales-title-1">Average Rating</div>
                        <div className="sd2-sales-title-2">
                            <svg className='star-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star h-4 w-4 text-yellow-400 fill-current"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                    </div>
                    <div className="sd2-sales-amount">
                        {'4.5'}
                    </div>
                </div>
            </div>
            <div className="sd3-title">Your Shops</div>
            <div className="sd3">
                {/* {map here } */}
                <div className="sd3-card">
                    <img className="sd3-c-img" src={'/images/placeholder.png'}></img>
                    <div className="sd3-c-name">Tech Gadgets Hub</div>
                    <div className="sd3-c-cat">Electronics</div>
                    <div className="sd3-c-desc">Premium electronics and gadgets for tech enthusiasts</div>
                    <button className="sd3-c-view">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link h-4 w-4 mr-2"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                        View Shop
                    </button>
                </div>
                <div className="new-shop">
                    <div className="new-shop-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus h-8 w-8 text-blue-600"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    </div>
                    <div className="new-shop-title">Add New Shop</div>
                    <div className="new-shop-desc">Add a new shop to expand your bussiness</div>
                    <button className="new-shop-create">Create Shop</button>
                </div>



            </div>
        </div>
      
    </div>
  )
}

export default SellerDashboard
