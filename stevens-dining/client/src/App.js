import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Sono from './components/Sono';
import Grill from './components/Grill';
import Gateway from './components/Gateway';
import Halal from './components/Halal';
import Italia from './components/Italia';
import America from './components/America';
import Pierce from './components/Pierce';
import PierceCafe from './components/PierceCafe';
import Navbar from './components/NavBar';
import Locations from './components/Locations';

function App() {
  
  return (
    <Router>
      <div>
          <div>
            <Navbar />
          </div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/locations' element={<Locations />} />
              <Route path='sono' element={<Sono />}/>
              <Route path='grill' element={<Grill />}/>
              <Route path='gateway' element={<Gateway />}/>
              <Route path='halal' element={<Halal />}/>
              <Route path='italia' element={<Italia />}/>
              <Route path='america' element={<America />}/>
              <Route path='pierce' element={<Pierce />}/>
              <Route path='piercecafe' element={<PierceCafe />}/>
          </Routes>
      </div>
</Router>
  );
}

export default App;