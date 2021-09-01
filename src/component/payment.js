import React from 'react'
import './payment.scss'

export default function Payment(){
    return(
        <div className='pay'>
            <div className='pay1' style={{
                background:`url('../img/creditcard.jpg') no-repeat center`,
                backgroundSize:'cover'
            }} >
                
            </div>
            <div className='pay2' style={{
                background:` url('../img/debit.jpg') no-repeat center`,
                backgroundSize:'cover'
            }} >

            </div>
            <div className='pay3' style={{
                background:`url('../img/online.jpg') no-repeat center`,
                backgroundSize:'cover'
            }} >

            </div>
        </div>
    )
}