import React from 'react'
import HeaderBar from '../HeaderBar'

const Shop = () => {
  return (
    <div className='shop'>
        <HeaderBar
            pageName={'Shop'}
            pagePath={['Home', 'Shop']}
        />
        
    </div>
  )
}

export default Shop