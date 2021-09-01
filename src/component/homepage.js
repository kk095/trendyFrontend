import React, { Component, createContext, useState } from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'
import Error from './error'
import Navbar from './navbar';
import Category from './category';
import Myslider from './carousel';
import Banner from './banner';
import DayDeal from './dayDeal';
import Phones from './phones';
import Payment from './payment'
import Men from './men';
import Upi from './upi'
import Electronic from './electronic';
import Footer from './footer';

export default function Homepage(){
  return(
    <>
    <Navbar/>
    <Category/>
    <Myslider/>
    <Banner/>
    <DayDeal/>
    <Phones/>
    <Payment/>
    <Men/>
    <Upi/>
    <Electronic/>
    <Footer/>
    </>
  )
}





