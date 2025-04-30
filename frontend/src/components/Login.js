import React from 'react'
import HeaderBar from './HeaderBar'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <HeaderBar  
        pageName={'My Account'}
        pagePath={['Home', 'My Account']}
      />
      <div className="login-container">
        <div className="login-container-title">Login</div>
        <div className="login-container-info">Please login using account detail bellow.</div>
        <input type="email" className='login-container-email' placeholder='Email Address'/>
        <input type="password" placeholder="Password"  className='login-container-password' />
        <Link to='/forgot-password' className="login-container-forgot" href=''>Forgot your password?</Link>
        <button className="login-container-signin">Sign In</button>
        <div className="login-container-createAccount">
          Don't have an Account? <Link className="login-container-createAccount-link" to="/signup">Create Account</Link>
        </div>
      </div>
      
    </div>
  )
}

export default Login
