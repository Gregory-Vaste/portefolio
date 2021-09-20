import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

import Contact from './pages/Contact';
import Home from './pages/Home';
import knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portefolio from './pages/Portefolio';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* navigation */}
        <switch>
        
          <Route path="/" exact component={Home}/>
          <Route path="/compétences" exact component={knowledges}/>
          <Route path="/portfolio" exact component={Portefolio}/>
          <Route path="contact" exact component={Contact}/>
          <Route component={NotFound}/>
        </switch>
      </BrowserRouter>
    </div>
  );
};

export default App;