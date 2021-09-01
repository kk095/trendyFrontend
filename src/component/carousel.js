import React, { useState ,useEffect} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss'


function Myslider(){
    let settings={
        dot:true,
        infinite:true,
        autoplay:true,
        speed:500,
        slidesToShow:1,
        slideToScroll:1,
        cssEase:'linear',
        arrows:true,
        centerPadding:'10px',
        fade:true,
        touchMove:true,
        accessibility:false,
        autoplaySpeed:5000,
    }
    let lst=[
        {
            'link':'../phone.jpg',
            'line1':'Iphone-11',
            'line2':'Pre-order price - from ₹1,99,999',
            'line22':'Pre Order now',
            'line3':'*special offers on credit cards'
        },
        {
            'link':'../img7.jpg',
            'line1':'Denim jacket',
            'line2':'80% off on this festival',
            'line22':'Order now',
            'line3':'*special offers on credit cards'
        },
        {
            'link':'../img8.jpg',
            'line1':'',
            'line2':'',
            'line22':'',
            'line3':''
        },
        {
            'link':'../img5.jpg',
            'line1':'',
            'line2':'',
            'line22':'',
            'line3':''
        },
    ]
    return(
        <Slider {...settings}>
        {lst.map(i=>(
            <div className='card-wrapper'>
                    <div className='card'>
                        <div className='card-image' >
                            <img src={i.link} style={{
                            width:'100%',
                            height:'100%'}}/>
                        </div>
                    </div>
                    <div className='some-text'>
                    <div className='line1'>
                        <h3>{i.line1}</h3>
                    </div><br/><br/>
                    <div className='line2'>
                    {i.line2}<br/>{i.line22}
                    </div>
                    <div className='line3'>
                    {i.line3}
                    </div>
                    </div>
                </div>
        ))}
            </Slider>
        )
    }
    
    
    export default Myslider;
    