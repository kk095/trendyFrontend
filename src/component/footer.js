import React from 'react'
import './footer.scss'
import {ReactComponent as Fsvg} from './fsvg.svg'

export default function Footer(){
    return(
        <div className='footer'>
            <div className='footer-text'>
                @ copyright 2021 | design by Krishan Kant Sharma (KK)
            </div>
                <Fsvg className='svgfoot'/>
        </div>
    )
}