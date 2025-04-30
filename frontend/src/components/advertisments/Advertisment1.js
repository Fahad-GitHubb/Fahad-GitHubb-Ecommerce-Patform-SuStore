import React from 'react'

const Advertisment1 = ({adImage, adTitle1, adTitle2, adDescription, adTagline, adStore}) => {
    // will get adImage, adTitle, adDescription, adStore as props 

    // on shopnow press, move to that store id store
    
    

  return (
    <div className='ad1'>
      <div className="ad1-left">
        <div className="ad1-left-tagline">{adTagline}</div>
        <div className="ad1-left-title1">{adTitle1}</div>
        <div className="ad1-left-title2">{adTitle2}</div>
        <div className="ad1-left-description">{adDescription}</div>
        <button className="ad1-left-shopnow">Shop Now</button>
      </div>
      <div class="ad1-right">
            <div class="ad1-right-image">
                <div class="ad1-right-image-background">
                    <svg width="220" height="220" viewBox="0 0 706 689" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="380.5" cy="325.5" r="325.5" fill="#ECD2FA" fill-opacity="0.35"/>
                        <circle cx="324" cy="365" r="324" fill="#ECD2FA" fill-opacity="0.35"/>
                    </svg>
                </div>
                <img src='/images/chair1.png' alt='Ad Image' />
            </div>
        </div>
    </div>
  )
}

export default Advertisment1
