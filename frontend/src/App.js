import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';

import './App.css';
import Advertisment1 from './components/advertisments/Advertisment1';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Advertisment1 
        adImage = "@/frontend/assets/asImages/chair1.png"
        adTitle = "New Furniture Collection Trends in 2025"
        adDescription = "Lorem ipsum dolor sit amet,    consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo "
        adTagline = "Best Furniture for your castle..." 
        adStore = "112"
      />
      <div className="content">
        <Routes>
          <Route to='/'></Route>
        </Routes> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
