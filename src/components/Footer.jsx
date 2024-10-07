import React from 'react'
import './styles/footer.css';

import { AiOutlineMail } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import { database } from "../firebase";
import { addDoc, collection, doc } from "firebase/firestore";

import FooterLogo from '../assets/logo.png';

export default function Footer() {

  const handleAdd = (e) => {
    e.preventDefault();

    const val = doc(database, "newsletter", "data");
    const collectinVal = collection(val, "email");
    addDoc(collectinVal, { title: e.target.title.value });
    alert("Your E-Mail has been added to our Newsletter. Thank you for subscribing!");  
  };


  return (
    <div>
        <footer>
            <div className='row'>
                <div className="col">
                    <a onClick={() => document.getElementById('trailer-video').scrollIntoView({ behavior: 'smooth'})}><img src={FooterLogo} alt='Logo' className='footer-logo' /></a>
                    <p>The series that changed gaming forever, featuring six legendary titles. enjoy iconic halo game moments, collected in a single integrated experience</p>            
                </div>
                <div className="col">
                  <h3><b>Game</b> <div className="underline"><span></span></div> </h3>
                  <p>Halo Studios is conducting a multi-discipline research project,</p>
                  <p>"Project Foundry," to explore the creative potential of Unreal 5 for the</p>
                  <p>next generation of Halo games.</p>
                  <p className='email-id'>customerservice@halostudios.com.</p>
                  <h4>2024</h4>
                </div>
                <div className="col">
                  <h3><b>Links</b> <div className="underline"><span></span></div> </h3>
                  <ul>
                    <li><a onClick={() => document.getElementById('infinite-section-target').scrollIntoView({ behavior: 'smooth'})}>Halo: Infinite</a></li>
                    <li><a onClick={() => document.getElementById('masterchief-section-target').scrollIntoView({ behavior: 'smooth'})}>Halo: Masterchief Collection</a></li>
                    <li><a onClick={() => document.getElementById('show-series-target').scrollIntoView({ behavior: 'smooth'})}>Halo: The Series</a></li>
                    <li><a onClick={() => window.open('https://gear.xbox.com/pages/halo?utm_source=halowaypoint.com&utm_medium=referral&utm_campaign=&utm_content=', '_blank')}>Gear Merchandise</a></li>
                    <li><a onClick={() => window.open('https://support.halowaypoint.com/hc/en-us', '_blank')}>Support Center</a></li>
                  </ul>
                </div>
                <div className="col">
                  <h3><b>Newsletter</b> <div className="underline" id='subscribe-section-target'><span></span></div> </h3>
                  <form onSubmit={(e)=>handleAdd(e)}>
                    <AiOutlineMail className='footer-mail-logo' />
                    <input type='email' name='title' placeholder='Enter your Email' required/>
                    <button type='submit'><FaArrowRight className='footer-arrow' /></button>
                  </form>
                  <div className="social-icons">
                    <a href='https://x.com/Halo' target='_blank'><FaXTwitter className='ico'/></a>
                    <a href='https://www.youtube.com/halo' target='_blank'><FaYoutube className='ico'/></a>
                    <a href='https://discord.com/invite/halo' target='_blank'><FaDiscord className='ico'/></a>
                    <a href='https://www.facebook.com/Halo' target='_blank'><FaFacebook className='ico'/></a>
                </div> 
              </div>
                
            </div>
            <hr className='footer-line' />
            <p className='footer-credit'>© 2024 Halo Waypoint. All Rights Reserved.</p>
        </footer>
    </div>
  )
}   