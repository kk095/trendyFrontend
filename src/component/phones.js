import React, { useState ,useEffect} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from "@material-ui/core";
import './phones.scss'

export default function Phones(){
    let settings={
        dot:true,
        speed:500,
        slidesToShow:4,
        slideToScroll:3,
        cssEase:'linear',
        arrows:true,
        centerPadding:'10px',
        responsive: [{
 
            breakpoint: 500,
            settings: {
              slidesToShow: 3,
            }
       
          },
        {
            breakpoint:400,
            settings:{
                slidesToShow:2
            }
        }]
    }
    let dl=[
        {
            'img':'../img/m3.jpeg',
            'des1':'POCO M3',
            'price':'₹10,000',
            'des2':'POCO',
        },
        {
            'img':'../img/redmi-9i.jpeg',
            'des1':'Redmi 9i',
            'price':'₹15,000',
            'des2':'Redmi',
        },
        {
            'img':'../img/c21.jpeg',
            'des1':'Realme',
            'price':'₹14,999',
            'des2':'Realme',
        },
        {
            'img':'../img/redmi.jpeg',
            'des1':'redmi 8pro',
            'price':'₹11,999',
            'des2':'Redmi',
        },
        {
            'img':'../img/samsung.jpeg',
            'des1':'Samsung Galaxy F22',
            'price':'₹15,999',
            'des2':'Samsung',
        },
    ]
    return(
        <div className='ph' >
            <div className='deal-header'>
                <div className='dod'>
                    Best Phones
                </div>
                <div className='btn'>
                <Button variant="contained"  style={{backgroundColor:"#5398DD",color:'white',letterSpacing:'1px'}} href="#contained-buttons" size="small">
                View All
                </Button>
                </div>
            </div>
            <hr />
        <Slider {...settings}>
            {dl.map(d=>(
            <div className='card-wrapper'>
                    <div className='card'>
                        <div className='card-image' style={{
                            background:` url(${d.img}) no-repeat center`,
                            backgroundSize:'contain'
                        }} >
                        </div>
                    </div>
                    <div className='des'>
                        <div className='des1'>
                            {d.des1}
                        </div>
                        <div className='price' style={{color:'green'}} >
                            {d.price}
                        </div>
                        <div className='des2' style={{color:'grey'}}>
                            {d.des2}
                        </div>
                    </div>
                   
            </div>
            ))}
            </Slider>
        </div>
    )
}
            