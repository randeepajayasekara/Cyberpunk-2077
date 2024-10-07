import React from 'react'
import './styles/footer.css';

import FooterLogo from '../assets/logo.png';

export default function Footer() {
  return (
    <div>
        <footer>
            <div className='row'>
                <div className="col">
                    <img src={FooterLogo} alt='Logo' className='footer-logo' />
                    <p>The 2024 Halo World Championship is here!From October 4-6 in Seattle, WA, the capstone event of the year will bring Year 3 of the Halo Championship Series to a climactic conclusion with a $1,000,000 prize pool. Of course, that’s just one part of the event. The Halo World Championship is an event for all kinds of fans to enjoy. As such, this event will once again see the return of the Community Stage, cosplay contest, partnered team booths, and more. Watch broadcasts all weekend long!</p>            
                </div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </footer>
    </div>
  )
}
