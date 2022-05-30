import React from 'react';
import PortalRouter from './routes';
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom';

const App=()=>{
  return(
  <Router>
    <PortalRouter/>
  </Router>)
}
export default App;