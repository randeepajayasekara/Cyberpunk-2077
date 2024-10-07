import React from 'react'
import './styles/header.css';
import Logo from '../assets/logo.png';
import { FaAngleDown } from "react-icons/fa";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { MdOutlineMenu } from "react-icons/md";

export default function Header() {
return (
        <>
                <header className='header'>
                        <div className="logo">
                                <a onClick={() => document.getElementById('trailer-video').scrollIntoView({ behavior: 'smooth'})}><img src={Logo} alt="Logo" width="150" height="75" /></a>
                        </div>
                        <nav className="nav-buttons">
                                <div className="dropdown">
                                        <button className="dropbtn">Games<ArrowDropDownIcon/></button>
                                        <div className="dropdown-content">
                                                <a className='dropbtn-one' onClick={() => document.getElementById('infinite-section-target').scrollIntoView({ behavior: 'smooth'})}>HALO INFINITE</a>
                                                <hr />
                                                <a className='dropbtn-two' onClick={() => document.getElementById('masterchief-section-target').scrollIntoView({ behavior: 'smooth'})}>HALO : THE MASTER CHIEF COLLECTION</a>
                                        </div>
                                </div>
                                <button className="nav-button" onClick={() => document.getElementById('show-series-target').scrollIntoView({ behavior: 'smooth'})}>Show Series</button>
                                <button className="nav-button" onClick={() => window.open('https://gear.xbox.com/pages/halo?utm_source=halowaypoint.com&utm_medium=referral&utm_campaign=&utm_content=', '_blank')}>Gear</button>
                                <button className="nav-button" onClick={() => document.getElementById('subscribe-section-target').scrollIntoView({ behavior: 'smooth'})}>Subscribe</button>
                                <button className="nav-button" onClick={() => window.open('https://support.halowaypoint.com/hc/en-us', '_blank')}>Support</button>
                        </nav>
                        <button className="main-button" onClick={() => window.open('https://www.xbox.com/en-GB/games/store/halo-the-master-chief-collection/9ntm9hxnlszx?rtc=1', '_blank')}>Buy</button>
                </header>
        </>
)
}
