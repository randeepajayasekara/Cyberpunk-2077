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
                                <img src={Logo} alt="Logo" width="150" height="75" />
                        </div>
                        <nav className="nav-buttons">
                                <div className="dropdown">
                                        <button className="dropbtn">Games<ArrowDropDownIcon/></button>
                                        <div className="dropdown-content">
                                                <a className='dropbtn-one' href="#">HALO INFINITE</a>
                                                <hr />
                                                <a className='dropbtn-two' href="#">HALO : THE MASTER CHIEF COLLECTION</a>
                                        </div>
                                </div>
                                <button className="nav-button" onClick={() => window.location.href = '/show-series'}>Show Series</button>
                                <button className="nav-button" onClick={() => window.location.href = 'https://gear.xbox.com/pages/halo?utm_source=halowaypoint.com&utm_medium=referral&utm_campaign=&utm_content='}>Gear</button>
                                <button className="nav-button" onClick={() => window.location.href = '/subscribe'}>Subscribe</button>
                                <button className="nav-button" onClick={() => window.location.href = 'https://support.halowaypoint.com/hc/en-us'}>Support</button>
                        </nav>
                        <button className="main-button" onClick={() => window.location.href = 'https://www.xbox.com/en-GB/games/store/halo-the-master-chief-collection/9ntm9hxnlszx?rtc=1'}>Buy</button>
                </header>
        </>
)
}
