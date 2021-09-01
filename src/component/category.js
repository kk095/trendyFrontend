import  './category.css'
import React, {useState } from 'react'


export default function Category(){
    return(
        <div className='cat'>
            <div className='item'>
                <div className='img' style={{
                background:` url('${process.env.PUBLIC_URL}/img/offers.png') no-repeat center`,
                backgroundSize:'contain'
                }}>
                </div>
                <div className='name'>
                    <h5>Offers</h5>
                </div>
            </div>
            <div className='item'>
                <div className='img' style={{
                background:` url('${process.env.PUBLIC_URL}/img/mobiles.png') no-repeat center`,
                backgroundSize:'contain'
                }}>
                </div>
                <div className='name'>
                    <h5>Mobiles</h5>
                </div>
            </div>
            <div className='item'>
                <div className='img' style={{
                background:` url('${process.env.PUBLIC_URL}/img/electronic.png') no-repeat center`,
                backgroundSize:'contain'
                }}>
                </div>
                <div className='name'>
                    <h5>Electronic</h5>
                </div>
            </div>
            <div className='item'>
                <div className='img' style={{
                background:` url('${process.env.PUBLIC_URL}/img/appliance.png') no-repeat center`,
                backgroundSize:'contain'
                }}>
                </div>
                <div className='name'>
                    <h5>Applications</h5>
                </div>
            </div>
            <div className='item'>
                <div className='img' style={{
                background:` url('${process.env.PUBLIC_URL}/img/fashion.png') no-repeat center`,
                backgroundSize:'contain'
                }}>
                </div>
                <div className='name'>
                    <h5>Fashion</h5>
                </div>
            </div>
            <div className='item house'>
                <div className='img' style={{
                background:` url('${process.env.PUBLIC_URL}/img/home.png') no-repeat center`,
                backgroundSize:'contain'
                }}>
                </div>
                <div className='name'>
                    <h5>Home</h5>
                </div>
            </div>
        </div>
    )
}