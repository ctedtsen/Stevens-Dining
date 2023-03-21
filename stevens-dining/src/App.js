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

function App() {
  return (
    <Router>
      <div>
          <Routes>
              <Route path='/' element={<Home />} />
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