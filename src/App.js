import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Frontpage from './components/frontpage/frontpage';
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Ticketform from './components/ticketform/ticketform';

function App() {

  return (
    // <Ticketform />
    <Router>
        <div className="App">

                <Switch>
                    <Route exact path="/">
                      <Frontpage />
                    </Route>
                </Switch>
             

        
                <Switch>
                    <Route exact path="/form">
                        <Ticketform />
                    </Route>
                </Switch>
            
        </div>

    </Router>    
  );
}

export default App;