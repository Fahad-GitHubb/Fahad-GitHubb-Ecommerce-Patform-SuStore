import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <Router>
          <Routes>
            {/* <Route path="/" element={<Home />}/> */}
          {/* </Routes> */}
        {/* </Router> */} 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
