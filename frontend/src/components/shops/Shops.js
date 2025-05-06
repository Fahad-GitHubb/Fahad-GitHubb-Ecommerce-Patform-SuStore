import React from 'react'
import HeaderBar from '../HeaderBar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
//import ChatBot from '../components/ChatBot/ChatBot';

const Shops = () => {
    const [numStores, setNumStores] = useState(0)
    const shops = [
    {
        imgUrl: "/images/placeholder.png",
        name: "Trendy Boutique",
        avgRating: 4,
        description: "A stylish boutique offering the latest fashion trends."
    },
    {
        imgUrl: "/images/placeholder.png",
        name: "Gadgets Galore",
        avgRating: 5,
        description: "Your one-stop shop for all the latest tech gadgets."
    },
    {
        imgUrl: "/images/placeholder.png",
        name: "Book Haven",
        avgRating: 4,
        description: "A cozy bookstore with a wide selection of books and a reading nook."
    },
    {
        imgUrl: "/images/placeholder.png",
        name: "Home Essentials",
        avgRating: 3,
        description: "Everything you need for your home, from decor to kitchenware."
    },
    {
        imgUrl: "/images/placeholder.png",
        name: "Pet Paradise",
        avgRating: 5,
        description: "A pet store with a variety of supplies and adorable pets for adoption."
    }
    ];
  return (
    <div className='shops'>
      <HeaderBar
        pageName={'Shop List'}
        pagePath={['Home', 'Shop List']}
      />

      <div className="shop-list">
        <div className="shop-list-head">
            <div className="shop-list-head-left">
                <div className="shop-list-head-left-1">Ecommerce Stores</div>
                <div className="shop-list-head-left-2">About {numStores} results</div>
            </div>
            <div className="shop-list-head-right">
                <div className="shop-list-head-right-1">
                    <span>Sort By: </span>
                    <select name="sort" id="sort" className='shop-list-head-right-1-select'>
                        <option value="name">Name</option>
                        <option value="date">Date</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>

                <div className="shop-list-head-right-2">
                    View: 
                    <div>
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.66683 1.33337H2.00016C1.63197 1.33337 1.3335 1.63185 1.3335 2.00004V4.66671C1.3335 5.0349 1.63197 5.33337 2.00016 5.33337H4.66683C5.03502 5.33337 5.3335 5.0349 5.3335 4.66671V2.00004C5.3335 1.63185 5.03502 1.33337 4.66683 1.33337Z" fill="#9333EA"/>
                        <path d="M9.99984 1.33337H7.33317C6.96498 1.33337 6.6665 1.63185 6.6665 2.00004V4.66671C6.6665 5.0349 6.96498 5.33337 7.33317 5.33337H9.99984C10.368 5.33337 10.6665 5.0349 10.6665 4.66671V2.00004C10.6665 1.63185 10.368 1.33337 9.99984 1.33337Z" fill="#9333EA"/>
                        <path d="M4.66683 6.66663H2.00016C1.63197 6.66663 1.3335 6.9651 1.3335 7.33329V9.99996C1.3335 10.3681 1.63197 10.6666 2.00016 10.6666H4.66683C5.03502 10.6666 5.3335 10.3681 5.3335 9.99996V7.33329C5.3335 6.9651 5.03502 6.66663 4.66683 6.66663Z" fill="#9333EA"/>
                        <path d="M9.99984 6.66663H7.33317C6.96498 6.66663 6.6665 6.9651 6.6665 7.33329V9.99996C6.6665 10.3681 6.96498 10.6666 7.33317 10.6666H9.99984C10.368 10.6666 10.6665 10.3681 10.6665 9.99996V7.33329C10.6665 6.9651 10.368 6.66663 9.99984 6.66663Z" fill="#9333EA"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_738_777)">
<path d="M1.875 8.625H0.375C0.275544 8.625 0.180161 8.66451 0.109835 8.73483C0.0395088 8.80516 0 8.90054 0 9L0 10.5C0 10.5995 0.0395088 10.6948 0.109835 10.7652C0.180161 10.8355 0.275544 10.875 0.375 10.875H1.875C1.97446 10.875 2.06984 10.8355 2.14016 10.7652C2.21049 10.6948 2.25 10.5995 2.25 10.5V9C2.25 8.90054 2.21049 8.80516 2.14016 8.73483C2.06984 8.66451 1.97446 8.625 1.875 8.625ZM1.875 1.125H0.375C0.275544 1.125 0.180161 1.16451 0.109835 1.23483C0.0395088 1.30516 0 1.40054 0 1.5L0 3C0 3.09946 0.0395088 3.19484 0.109835 3.26516C0.180161 3.33549 0.275544 3.375 0.375 3.375H1.875C1.97446 3.375 2.06984 3.33549 2.14016 3.26516C2.21049 3.19484 2.25 3.09946 2.25 3V1.5C2.25 1.40054 2.21049 1.30516 2.14016 1.23483C2.06984 1.16451 1.97446 1.125 1.875 1.125ZM1.875 4.875H0.375C0.275544 4.875 0.180161 4.91451 0.109835 4.98484C0.0395088 5.05516 0 5.15054 0 5.25L0 6.75C0 6.84946 0.0395088 6.94484 0.109835 7.01517C0.180161 7.08549 0.275544 7.125 0.375 7.125H1.875C1.97446 7.125 2.06984 7.08549 2.14016 7.01517C2.21049 6.94484 2.25 6.84946 2.25 6.75V5.25C2.25 5.15054 2.21049 5.05516 2.14016 4.98484C2.06984 4.91451 1.97446 4.875 1.875 4.875ZM11.625 9H4.125C4.02554 9 3.93016 9.03951 3.85984 9.10983C3.78951 9.18016 3.75 9.27554 3.75 9.375V10.125C3.75 10.2245 3.78951 10.3198 3.85984 10.3902C3.93016 10.4605 4.02554 10.5 4.125 10.5H11.625C11.7245 10.5 11.8198 10.4605 11.8902 10.3902C11.9605 10.3198 12 10.2245 12 10.125V9.375C12 9.27554 11.9605 9.18016 11.8902 9.10983C11.8198 9.03951 11.7245 9 11.625 9ZM11.625 1.5H4.125C4.02554 1.5 3.93016 1.53951 3.85984 1.60984C3.78951 1.68016 3.75 1.77554 3.75 1.875V2.625C3.75 2.72446 3.78951 2.81984 3.85984 2.89016C3.93016 2.96049 4.02554 3 4.125 3H11.625C11.7245 3 11.8198 2.96049 11.8902 2.89016C11.9605 2.81984 12 2.72446 12 2.625V1.875C12 1.77554 11.9605 1.68016 11.8902 1.60984C11.8198 1.53951 11.7245 1.5 11.625 1.5ZM11.625 5.25H4.125C4.02554 5.25 3.93016 5.28951 3.85984 5.35984C3.78951 5.43016 3.75 5.52554 3.75 5.625V6.375C3.75 6.47446 3.78951 6.56984 3.85984 6.64017C3.93016 6.71049 4.02554 6.75 4.125 6.75H11.625C11.7245 6.75 11.8198 6.71049 11.8902 6.64017C11.9605 6.56984 12 6.47446 12 6.375V5.625C12 5.52554 11.9605 5.43016 11.8902 5.35984C11.8198 5.28951 11.7245 5.25 11.625 5.25Z" fill="#9333EA"/>
</g>
<defs>
<clipPath id="clip0_738_777">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
                        </svg>
                            
                    </div>

                </div>
            </div>
        </div>

        <div className="shop-list-items">
            {shops.map((shop, index) => (
                <div className="shop-list-item" key={index}>
                    <div className="shop-list-item-img">
                        <img src={shop.imgUrl} alt={shop.name} />
                    </div>
                    <div className="shop-list-item-info">
                        <div className="shop-list-item-info-name">{shop.name}</div>
                        <div className="shop-list-item-info-rating">
                            <span>Avg Rating of Products: </span>
                            <>
                                {Array.from({ length: shop.avgRating }, (_, index) => (
                            <div key={index}>
                            {<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className='star'>
                                <path d="M10.6415 4.13792L7.66615 3.7055L6.33608 1.00901C6.29975 0.935185 6.23998 0.875419 6.16615 0.839091C5.981 0.747685 5.756 0.823857 5.66342 1.00901L4.33334 3.7055L1.35795 4.13792C1.27592 4.14964 1.20092 4.18831 1.1435 4.2469C1.07408 4.31826 1.03582 4.41425 1.03714 4.51379C1.03846 4.61333 1.07924 4.70828 1.15053 4.77776L3.30326 6.87659L2.79467 9.84026C2.78274 9.9092 2.79037 9.98011 2.81669 10.0449C2.84301 10.1098 2.88697 10.1659 2.94358 10.207C3.00019 10.2481 3.06719 10.2726 3.13697 10.2776C3.20676 10.2825 3.27655 10.2679 3.33842 10.2352L5.99975 8.83597L8.66108 10.2352C8.73373 10.2739 8.81811 10.2867 8.89897 10.2727C9.10287 10.2375 9.23998 10.0442 9.20483 9.84026L8.69623 6.87659L10.849 4.77776C10.9076 4.72034 10.9462 4.64534 10.958 4.56331C10.9896 4.35823 10.8466 4.16839 10.6415 4.13792Z" fill="#FFC416"/>

                            </svg>}
                            </div>
                                ))}
                                {Array.from({ length: (5 - shop.avgRating) }, (_, index) => (
                                    <div key={index}>
                                    {<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.64154 4.13792L6.66615 3.7055L5.33608 1.00901C5.29975 0.935185 5.23998 0.875419 5.16615 0.839091C4.981 0.747685 4.756 0.823857 4.66342 1.00901L3.33334 3.7055L0.35795 4.13792C0.275919 4.14964 0.200919 4.18831 0.143497 4.2469C0.0740774 4.31826 0.0358239 4.41425 0.0371424 4.51379C0.0384608 4.61333 0.0792433 4.70828 0.150529 4.77776L2.30326 6.87659L1.79467 9.84026C1.78274 9.9092 1.79037 9.98011 1.81669 10.0449C1.84301 10.1098 1.88697 10.1659 1.94358 10.207C2.00019 10.2481 2.06719 10.2726 2.13697 10.2776C2.20676 10.2825 2.27655 10.2679 2.33842 10.2352L4.99975 8.83597L7.66108 10.2352C7.73373 10.2739 7.81811 10.2867 7.89897 10.2727C8.10287 10.2375 8.23998 10.0442 8.20483 9.84026L7.69623 6.87659L9.84897 4.77776C9.90756 4.72034 9.94623 4.64534 9.95795 4.56331C9.98959 4.35823 9.84662 4.16839 9.64154 4.13792V4.13792Z" fill="#B2B2B2"/>
                                    </svg>}
                                    </div>
                                ))}
                            </>
                        </div>
                        <div className="shop-list-item-info-description">{shop.description}</div>
                        <button className='shop-list-item-info-button'> 
                            <Link to='/shop/1'>Got to Shop</Link>
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Shops
