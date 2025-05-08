import React, { useEffect } from 'react'
import HeaderBar from './HeaderBar'

const Cart = () => {
    useEffect(() => {
        const token = sessionStorage.getItem('authenticated');
        if (token === 'false' || token === null) {
            window.location.href = '/';
        }
    }
    , []);



    const cart = [
    {
        productImage: '/images/chair1.png',
        name: 'Modern Chair',
        color: 'Red',
        size: 'Medium',
        price: 49.99
    },
    {
        productImage: '/images/chair1.png',
        name: 'Classic Chair',
        color: 'Blue',
        size: 'Large',
        price: 59.99
    },
    {
        productImage: '/images/chair1.png',
        name: 'Office Chair',
        color: 'Black',
        size: 'Small',
        price: 89.99
    }
    ];

    let quantity = 1;
  return (
    <div className='whole-cart'>
      <HeaderBar
      pageName={'Shopping Cart'}
      pagePath={['Home', 'Shopping Cart']}
      />

      <div className="cart">
        <table className="cart-table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cart.map((item)=>{
                    return (
                        <tr>
                            <td>
                                <div className="cart-table-product-imgContainer">
                                    <img className='cart-table-product-img' src={item.productImage} alt="" />
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="black"/>
                                        <path d="M7.8002 4.19995L4.2002 7.79995" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M4.2002 4.19995L7.8002 7.79995" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className='cart-table-product-detail'>
                                    <div className="name">{item.name}</div>
                                    <div className="color">Color: {item.color}</div>
                                    <div className="size">Size: {item.size}</div>
                                </div>
                            </td>
                            <td>{item.price}</td>
                            <td className='cart-quantity' >
                                <svg width="51" height="15" viewBox="0 0 51 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="51" height="15" fill="#F0EFF2"/>
                                    <rect width="12" height="15" fill="#E7E7EF"/>
                                    <rect x="39" width="12" height="15" fill="#E7E7EF"/>
                                    <path d="M4 8H8.66667" stroke="#BEBFC2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M44.625 5V10.25" stroke="#BEBFC2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M42 7.625H47.25" stroke="#BEBFC2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <text x="25" y="10" fill="#333" font-size="8" text-anchor="middle" alignment-baseline="middle">
                                        {quantity}
                                    </text>
                                </svg>
                            </td>
                            <td>${quantity*item.price}</td>
                        </tr>
                    )
                })}
                <tfoot>
                    <tr>
                        <td className='cart-clearCart-btn' colSpan={4}>
                            <button>Clear Cart</button>
                        </td>
                    </tr>
                </tfoot>
            </tbody>
        </table>

        
        <div className="cart-total">
            <div className="cart-shipping">
                <div class="cart-shipping-head">Shipping Address</div>
                <div class="cart-shipping-details">
                    <input type="text" placeholder='Address Line 1' class="address1"/>
                    <input type="text" placeholder='Address Line 2' class="address2"/>
                    <input type="text" placeholder='Postal Code' class="postalCode"/>
                    <button class="save-address">Save Address</button>
                </div>
            </div>
            <div class="cart-bill">
                <div class="cart-bill-head">Cart Total</div>
                <div class="cart-bill-details">
                    <div class="sub-total">
                        <div class="sub-total-1">Subtotal:</div>
                        <div class="sub-total-2">$245.00</div>
                    </div>
                    <div class="total">
                        <div class="total-1">Total:</div>
                        <div class="total-2">$245.00</div>
                    </div>
                    <div class="tax-included">
                        <svg width="7" height="7" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="8" height="8" rx="3" fill="#19D16F"/>
                        <path d="M6.23649 2.40335C6.2055 2.37211 6.16863 2.34731 6.12801 2.33038C6.08739 2.31346 6.04382 2.30475 5.99982 2.30475C5.95582 2.30475 5.91225 2.31346 5.87163 2.33038C5.83101 2.34731 5.79414 2.37211 5.76315 2.40335L3.27982 4.89001L2.23649 3.84335C2.20431 3.81227 2.16633 3.78783 2.12471 3.77143C2.0831 3.75503 2.03865 3.74698 1.99393 3.74776C1.9492 3.74853 1.90506 3.75811 1.86404 3.77594C1.82301 3.79377 1.7859 3.81951 1.75482 3.85168C1.72374 3.88386 1.6993 3.92184 1.6829 3.96345C1.6665 4.00507 1.65846 4.04951 1.65923 4.09424C1.66 4.13897 1.66958 4.1831 1.68741 4.22413C1.70524 4.26516 1.73098 4.30227 1.76315 4.33335L3.04315 5.61335C3.07414 5.64459 3.11101 5.66939 3.15163 5.68631C3.19225 5.70323 3.23582 5.71195 3.27982 5.71195C3.32382 5.71195 3.36739 5.70323 3.40801 5.68631C3.44863 5.66939 3.4855 5.64459 3.51649 5.61335L6.23649 2.89335C6.27032 2.86213 6.29732 2.82425 6.31579 2.78208C6.33426 2.73992 6.3438 2.69438 6.3438 2.64835C6.3438 2.60231 6.33426 2.55678 6.31579 2.51461C6.29732 2.47245 6.27032 2.43456 6.23649 2.40335Z" fill="white"/>
                        </svg>

                        <span>Shipping & taxes calculated at checkout</span>
                    </div>
                    <button class="checkout-btn">Proceed To Checkout</button>
                </div>
            </div>
            
        </div>
      </div>
    
    </div>
  )
}

export default Cart
