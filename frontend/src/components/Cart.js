import React from 'react'
import HeaderBar from './HeaderBar'

const Cart = () => {
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
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <td>
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
                        <td colSpan={4}>
                            <button>Clear Cart</button>
                        </td>
                    </tr>
                </tfoot>
            </tbody>
        </table>
        <div className="cart-total"></div>
      </div>
    
    </div>
  )
}

export default Cart
