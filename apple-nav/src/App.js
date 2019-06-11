import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// components
import NavWrapper from './Components/Navigation/NavWrapper';

function App() {
  return (
    <div className='App'>
      <NavWrapper />
    </div>
  );
}

export default App;
