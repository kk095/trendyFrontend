import './App.css';
import React, { Component, createContext, useState } from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Error from './component/error'
import Navbar from './component/navbar';
import Category from './component/category';
import Myslider from './component/carousel';
import Banner from './component/banner';
import DayDeal from './component/dayDeal';
import Phones from './component/phones';
import Payment from './component/payment'
import Men from './component/men';
import Upi from './component/upi'
import Electronic from './component/electronic';
import Footer from './component/footer';
import Homepage from './component/homepage';
import Login from './component/login';
import Signup from './component/signup'

function App(){
  return(
    <>
    <Router>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
      </Switch>
    </Router>
    </>
  )
}





export default App;
