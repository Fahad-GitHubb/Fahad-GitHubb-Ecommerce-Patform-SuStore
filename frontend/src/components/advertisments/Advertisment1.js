import React from 'react'

const Advertisment1 = ({adImage, adTitle, adDescription, adTagline, adStore}) => {
    // will get adImage, adTitle, adDescription, adStore as props 

    // on shopnow press, move to that store id store
    

  return (
    <div className='ad1'>
      <div className="ad1-left">
        <div className="ad-left-tagline">Tagline{adTagline}</div>
        <div className="ad-left-title">{adTitle}</div>
        <div className="ad-left-description">{adDescription}</div>
        <button className="ad-left-shopnow">Shop Now</button>
      </div>
      <div className="ad1-right">
        <div className="ad1-right-image">
            <img src={adImage} />
        </div>
      </div>
    </div>
  )
}

export default Advertisment1
