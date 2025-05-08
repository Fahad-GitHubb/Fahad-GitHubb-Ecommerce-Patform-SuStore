import React, { useState } from 'react'
import HeaderBar from './HeaderBar'
import {Link} from 'react-router-dom'
import { validateUser } from '../store/users'
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticated}) => {
  const [formData, setFormData] = useState({})
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      email: formData.email,
      password: formData.password,
    }
    const isValid = await validateUser(user)
    if (isValid.validity) {
      console.log('User is valid')
      setAuthenticated(true)
      sessionStorage.setItem('authenticated', true)
      sessionStorage.setItem('user', JSON.stringify(isValid.user))
      // Redirect to home page or perform any other action
      navigate('/customer-dashboard');
    } else{
      sessionStorage.setItem('authenticated', false);
      sessionStorage.setItem('user', null)
    }
  }
  return (
    <div className='login'>
      <HeaderBar  
        pageName={'My Account'}
        pagePath={['Home', 'My Account']}
      />
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="login-container-title">Login</div>
        <div className="login-container-info">Please login using account detail bellow.</div>
        <input type="email" className='login-container-email' placeholder='Email Address' name='email' value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
        <input type="password" placeholder="Password"  className='login-container-password' name='password' value={formData.password || ''} onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
        <Link to='/forgot-password' className="login-container-forgot" href=''>Forgot your password?</Link>
        <button className="login-container-signin">Sign In</button>
        <div className="login-container-createAccount">
          Don't have an Account? <Link className="login-container-createAccount-link" to="/signup">Create Account</Link>
        </div>
      </form>
      
    </div>
  )
}

export default Login
