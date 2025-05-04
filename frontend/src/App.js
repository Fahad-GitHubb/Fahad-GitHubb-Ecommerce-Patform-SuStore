import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import CustomerDashboard from './components/CustomerDashboard';

import './App.css';
import Advertisment1 from './components/advertisments/Advertisment1';
import Advertisment2 from './components/advertisments/Advertisment2';
import Signup from './components/Signup';
import Shop from './components/shops/Shop';
import Shops from './components/shops/Shops';
import ProductListing from './components/products/ProductListing';
import ProductDetail from './components/products/ProductDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/customer-dashboard' element={<CustomerDashboard />} />
              <Route path='/shop/:id' element={<Shop />} />
              <Route path='/shops' element={<Shops />} />
              <Route path='/products' element={<ProductListing />} />
              <Route path='/product/:id' element={<ProductDetail />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
