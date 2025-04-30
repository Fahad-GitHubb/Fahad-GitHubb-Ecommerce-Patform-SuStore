import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';

import './App.css';
import Advertisment1 from './components/advertisments/Advertisment1';
import Advertisment2 from './components/advertisments/Advertisment2';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
        {/* <Advertisment1
          adImage = "@/frontend/assets/asImages/chair1.png"
          adTitle1 = "New Furniture Collection."
          adTitle2 = "Trends in 2025"
          adDescription = "Lorem ipsum dolor sit amet,    consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo "
          adTagline = "Best Furniture for your castle..." 
          adStore = "112"
        /> */}
      {/* <Advertisment2
        adImage = "/images/chair1.png"
        adTitle = "Unique Features Of leatest & Trending Poducts"
        adFeatures = {['All frames constructed with hardwood solids and laminates', 'Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails', 'Arms, backs and seats are structurally reinforced']}
        adName='B&B Italian Sofa'
        adPrice= '$32.00'
        adProductPage = "112"
      /> */}

      <div className="content">
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
