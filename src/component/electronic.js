import React, { useState ,useEffect} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './men.scss'
import { Button } from "@material-ui/core";
import './electronic.scss'

export default function Electronic(){
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
            'img':'../img/headphone.jpeg',
            'des1':'boult bluetooth headset',
            'price':'₹1,566',
            'des2':'boult',
        },
        {
            'img':'../img/boat.jpeg',
            'des1':'boat airdopes 131 bluetooth headset',
            'price':'₹1,455',
            'des2':'Boat',
        },
        {
            'img':'../img/tab.jpeg',
            'des1':'samsung galaxy tab',
            'price':'₹10,999',
            'des2':'Samsung',
        },
        {
            'img':'../img/holder.jpeg',
            'des1':'Mobile Holder',
            'price':'₹499',
            'des2':'black',
        },
        {
            'img':'../img/speaker.jpeg',
            'des1':'speaker',
            'price':'₹599',
            'des2':'JLB',
        },
    ]
    return(
        <div className='ele' >
            <div className='deal-header'>
                <div className='dod'>
                    Electronic Products
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
            