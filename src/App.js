import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Products from './components/Products';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path = '/' component = {Login} />
         <Route exact path = '/home' component = {Home} />
         <Route exact path = '/products' component = {Products} />
         <Route exact path = '/register' component={Register} />
         <Route exact path = '/products' component={Products} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
