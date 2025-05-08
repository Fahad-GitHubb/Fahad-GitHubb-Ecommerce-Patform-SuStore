import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import CustomerDashboard from './components/CustomerDashboard';
import { useState, useEffect, use } from 'react';

import './App.css';
import Advertisment1 from './components/advertisments/Advertisment1';
import Advertisment2 from './components/advertisments/Advertisment2';
import Signup from './components/Signup';
import Shop from './components/shops/Shop';
import Shops from './components/shops/Shops';
import ProductListing from './components/products/ProductListing';
import ProductDetail from './components/products/ProductDetail';
import Cart from './components/Cart';
import Wishlist from './components/WishList';
import OrderCompletion from './components/OrderCompletion';
import Blogs from './components/blogs/Blogs';
import Blog from './components/blogs/Blog';
import AboutUs from './components/AboutUs';
import SellerDashboard from './components/seller/SellerDashboard';
import CreateShopPage from './components/seller/CreateShop';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setAuthenticated(true);
  //   } else {
  //     setAuthenticated(false);
  //   }
  // }
  // , []);

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
          <Routes>
              <Route path='/' element={<Login setAuthenticated = {setAuthenticated} />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/customer-dashboard' element={<CustomerDashboard />} />
              <Route path='/shop/:id' element={<Shop />} />
              <Route path='/shops' element={<Shops />} />
              <Route path='/products' element={<ProductListing />} />
              <Route path='/product/:id' element={<ProductDetail />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/order-completion' element={<OrderCompletion />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/about-us' element={<AboutUs />} />
              <Route path='/seller-dashboard' element={<SellerDashboard />} />
              <Route path='/create-shop' element={<CreateShopPage />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
