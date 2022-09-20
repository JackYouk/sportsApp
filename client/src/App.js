import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Map from './components/Map'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* map/courts page */}
          <Route
            path='/'
            element={<Map />}
          />
        </Routes>
      </div>
      {/* bottom navbar */}
      <Navbar className='navbar' />
    </Router>
  );
}

export default App;
