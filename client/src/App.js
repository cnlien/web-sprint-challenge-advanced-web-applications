import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// UTILS 
import PrivateRoute from './utils/PrivateRoute'

// COMPONENTS
import Login from './components/Login'
import BubblePage from './components/BubblePage'

import 'bootstrap/dist/css/bootstrap.css'
import "./styles.scss";
import './styles/global.scss'
import SprintAnswers from "./components/SprintAnswers";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/sprint-questions" component={SprintAnswers} />
        <PrivateRoute exact path='/bubbles-page' component={BubblePage}/>
      </Router>
    </div>
  );
}

export default App;
