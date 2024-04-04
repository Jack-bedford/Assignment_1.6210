import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import SCP2 from './SCP2';
import SCP3 from './SCP3';
import SCP4 from './SCP4';
import SCP5 from './SCP5';
import SCP6 from './SCP6';
import './App.css';



function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SCP2" element={<SCP2 />} />
          <Route path="/SCP3" element={<SCP3 />} />
          <Route path="/SCP4" element={<SCP4 />} />
          <Route path="/SCP5" element={<SCP5 />} />
          <Route path="/SCP6" element={<SCP6 />} />
        </Routes>
      </Router>
    </>
  );
}

function Home()
{
  return(
    <div className="p-3 rounded">
      <div className="p-2 pb-1 mt-3 mb-1 rounded text-left text-dark bg-info text-center">
      <h1 className='display-1'>Welcome to the SCP React App</h1>
      </div>
      <div className="p-2 pb-1 mt-3 mb-1 rounded text-left text-dark bg-info text-center">
      <p>Please Use links Above</p>
      </div>

    </div>
  );
}


export default App;
