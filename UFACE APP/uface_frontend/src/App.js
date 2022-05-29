
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';

import './App.css';
import Signin from './component/signin';
import Login from './component/login';
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App" id='header'>
            <div id='titlehead'>UFace Pay</div> 
           <Link to="/" id='titlehome'>Home</Link>
           
           <Link to="/login" id='titlelogin'>Already have an account?Proceed!</Link>
           <div id='signbox'>
           <Link to="/signin" id='titlesign'>Sign Up</Link>
           </div>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/signin' element={< Signin />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
          </Routes>
          </div>
          
       </Router>

       
   );
  }
}
 
export default App;