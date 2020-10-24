import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './screens/Home'  // we do not have to write index.js it will take it as bt default
import Header from './components/Header';
import Contact from './screens/ContactUs';
import Login from './screens/LoginScreen'
import Signup from './screens/SignUpScreen'
import BlogDetail from './screens/BlogDetail';
import CreateBlog from './screens/CreateBlog';
import EditBlog from './screens/EditBlog'
import UserBlogsScreen from './screens/UserBlogsScreen'

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Route path='/contact' component ={Contact} exact/>
          <Route path='/login' component = {Login} exact/>
          <Route path='/signup' component = {Signup} exact/>
          <Route path='/:id' component ={BlogDetail} exact/>
          <Route path='/create' component = {CreateBlog} exact/>
          <Route path='/edit/:id' component = {EditBlog} exact/>
          <Route path='/:id/posts' component = {UserBlogsScreen} exact/>
          <Route path='/' component={Home} exact/>
        </div>
    </Router>
  
  );
} 

export default App;
