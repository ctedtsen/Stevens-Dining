import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <body>
        <div>
          <h1>Stevens Dining</h1>
        </div>
        <p><Link to='/pierce'>Pierce Dining Hall</Link></p>
        <p><Link to='/piercecafe'>Pierce Cafe</Link></p>
        <p><Link to="/america">America's Cup</Link></p>
        <p><Link to="/gateway">Gateway Cafe</Link></p>
        <p><Link to="/grill">Grill Nation</Link></p>
        <p><Link to="/sono">Sono</Link></p>
        <p><Link to="/halal">The Halal Stall</Link></p>
        <p><Link to="/italia">Piccola Italia</Link></p>
      </body>
    );
};

export default Home;