import React, { useState } from 'react'
import HeaderBar from './HeaderBar'
import {Link} from 'react-router-dom'
// store - user.js
import { createUser } from '../store/users'

const Signup = () => {
  const [formData, setFormData] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      role: formData.role || 'customer'
    }
    const data = await createUser(user)
    console.log('Data',data)
  }

  return (
    <div className='signup'>
      <HeaderBar  
        pageName={'Create Account'}
        pagePath={['Home', 'Create Account']}
      />
      <form className="signup-container" onSubmit={handleSubmit}>
        <div className="signup-container-title">Sign Up</div>
        <div className="signup-container-info">Please fill in information to your account bellow.</div>
        <input type="text" className='signup-container-email' placeholder='Full Name' name='name' value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
        <input type="email" className='signup-container-email' placeholder='Email Address' name='email' value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
        <input type="password" placeholder="Password"  className='signup-container-password' name='password' value={formData.password || ''} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <input type="text" placeholder="Phone Number"  className='signup-container-password' name='phone' value={formData.phone || ''} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
        <input type="text" placeholder="Role (Customer / Seller)"  className='signup-container-password' name='role' value={formData.role || ''} onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
        
        <button className="signup-container-signup">Sign Up</button>
        <div className="signup-container-haveAccount">
          Have an Account? <Link className="signup-container-haveAccount-link" to="/">Sign In</Link>
        </div>
      </form>
      
    </div>
  )
}

export default Signup
