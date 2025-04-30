import React from 'react'
import HeaderBar from '../HeaderBar'
import { useSearchParams } from 'react-router-dom';

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // Get the id
    const myParam = searchParams.get('id');
    // Get Shop details 
    
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