import React, { useState ,useEffect} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './dayDeal.scss'
import { Button } from "@material-ui/core";
import AlarmIcon from '@material-ui/icons/Alarm';

export default function DayDeal(){
    let [countdown,setcountdown]=useState('')
    useEffect(()=>{
        setInterval(function(){
            setcountdown(time())
         },1000)
    })

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
    function time(){
        let date=new Date()
        let h=date.getHours()
        let m=date.getMinutes()
        let s=date.getSeconds()
        
        let hl= 24-h
        let ml=60-m
        let sl=60-s
        let v= `${hl}:${ml}:${sl} left`
        return v
    }
    let dl=[
        {
            'img':'../img/bag.jpeg',
            'des1':'Laptop Bags',
            'price':'min 70%off',
        },
        {
            'img':'../img/deal4.jpeg',
            'des1':'designer lehanga',
            'price':'min 60%off',
        },
        {
            'img':'../img/m.jpeg',
            'des1':'Round neck T-shirts',
            'price':'under ₹500',
        },
        {
            'img':'../img/laptopbag.jpeg',
            'des1':'Laptop bags',
            'price':'under ₹900',
        },
        {
            'img':'../img/jacket.jpeg',
            'des1':'solid denim jacket',
            'price':'under ₹789',
            'des2':'denim'
        },
        {
            'img':'../img/deal2.jpg',
            'des1':'set wet and fogg perfumes',
            'price':'under ₹699',
        },
    ]
    return(
        <div className='deal' >
            <div className='deal-header'>
                <div className='dod'>
                    Deal Of The day
                    <span className='alarm'>
                    <AlarmIcon className='time'/>
                    {countdown}
                    </span>
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
                    </div>
                   
            </div>
            ))}
            </Slider>
        </div>
    )
}
            