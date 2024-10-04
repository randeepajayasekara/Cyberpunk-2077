import React from 'react'
import './styles/header.css';
import Logo from '../assets/logo.png';
import { FaAngleDown } from "react-icons/fa";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
                            <button className="nav-button">Show Series</button>
                            <button className="nav-button">Gear</button>
                            <button className="nav-button">Subscribe</button>
                            <button className="nav-button">Contact</button>
                            
                    </nav>
                    <button className="main-button">Buy</button>
            </header>
    </>
)
}
