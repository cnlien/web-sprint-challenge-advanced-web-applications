import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// UTILS 
import PrivateRoute from './utils/PrivateRoute'

// COMPONENTS
import Login from './components/Login'
import BubblePage from './components/BubblePage'

import 'bootstrap/dist/css/bootstrap.css'
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/bubbles-page' component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
