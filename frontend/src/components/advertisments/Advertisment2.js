import React from 'react'

const Advertisment2 = ({adImage, adTitle, adFeatures, adName, adPrice, adProductPage}) => {
    
    

  return (
    <div className='ad2'>
      <div className="ad2-left">
        <div className="ad2-left-image">
            <div class="ad1-right-image-background">
                <svg width="270" height="270" viewBox="0 0 481 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M481 232C481 362.339 412.339 450 282 450C151.661 450 0 376.339 0 246C0 115.661 142 -23.9999 251.5 4.00004C361 32 481 101.661 481 232Z" fill="#F5E1FC"/>
                </svg>
            </div>
            <img src={adImage} alt='Ad Image' />
        </div>

      </div>
      <div className="ad2-right">
        <div className="ad2-right-title">{adTitle}</div>
        <div className="ad2-right-features">
            <div className="ad2-right-features-f1">
                <div className="ad2-right-features-f1-svg">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="#F52B70"/>
                    </svg>

                </div>
                <div className="ad2-right-features-f1-feature">{adFeatures[0]}</div>
            </div>
            <div className="ad2-right-features-f2">
                <div className="ad2-right-features-f2-svg"> 
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="#2B2BF5"/>
                    </svg>
                </div>
                <div className="ad2-right-features-f2-feature">{adFeatures[1]}</div>
            </div>
            <div className="ad2-right-features-f3">
                <div className="ad2-right-features-f3-svg">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.5" cy="5.5" r="5.5" fill="#2BF5CC"/>
                    </svg>
                </div>
                <div className="ad2-right-features-f3-feature">{adFeatures[2]}</div>
            </div>
        </div>
        <div className="ad2-right-bottom">
            <button className="ad2-right-bottom-button">Add to Cart</button>
            <div className="ad2-right-bottom-nameNprice">
                <div className="ad2-right-bottom-nameNprice-name">{adName}</div>
                <div className="ad2-right-bottom-nameNprice-price">{adPrice}</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Advertisment2
