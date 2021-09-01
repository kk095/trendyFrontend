import React, { useState ,useEffect} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './men.scss'
import { Button } from "@material-ui/core";
import './phones.scss'

export default function Men(){
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
            'img':'../img/shirt.jpeg',
            'des1':'Men slim fit casual shirt',
            'price':'₹566',
            'des2':'black',
        },
        {
            'img':'../img/whiteshirt.jpeg',
            'des1':'regular fir shirt',
            'price':'₹455',
            'des2':'white',
        },
        {
            'img':'../img/deal3.jpeg',
            'des1':'pant',
            'price':'₹399',
            'des2':'green',
        },
        {
            'img':'../img/deal1.jpeg',
            'des1':'sports shoes',
            'price':'₹899',
            'des2':'sports',
        },
        {
            'img':'../img/jacket.jpeg',
            'des1':'denim jacket',
            'price':'₹599',
            'des2':'blue',
        },
    ]
    return(
        <div className='man' >
            <div className='deal-header'>
                <div className='dod'>
                    Top Pickup's Of Men
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
            