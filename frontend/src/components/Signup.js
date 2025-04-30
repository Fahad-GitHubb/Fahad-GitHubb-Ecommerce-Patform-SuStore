import React from 'react'
import HeaderBar from './HeaderBar'
import {Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup'>
      <HeaderBar  
        pageName={'Create Account'}
        pagePath={['Home', 'Create Account']}
      />
      <div className="signup-container">
        <div className="signup-container-title">Sign Up</div>
        <div className="signup-container-info">Please fill in information to your account bellow.</div>
        <input type="text" className='signup-container-email' placeholder='Full Name'/>
        <input type="email" className='signup-container-email' placeholder='Email Address'/>
        <input type="password" placeholder="Password"  className='signup-container-password' />
        <input type="text" placeholder="Phone Number"  className='signup-container-password' />
        <input type="text" placeholder="Role (Customer / Seller)"  className='signup-container-password' />
        
        <button className="signup-container-signup">Sign Up</button>
        <div className="signup-container-haveAccount">
          Have an Account? <Link className="signup-container-haveAccount-link" to="/">Sign In</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Signup
