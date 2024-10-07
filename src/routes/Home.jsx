import React, { useRef } from "react";
import "../components/styles/home.css";
import Typewriter from "typewriter-effect";

import IntroVideo from "../assets/Halo_Trailer.mp4";
import BlackHoleVideo from "../assets/public_blackhole.webm";
import InfiniteImg from '../assets/infinite_img.png';
import MasterChief from '../assets/master_chief_collection.png';
import Paramount from '../assets/paramount_logo.png';
import XBOXmerch from '../assets/xboxLogoGreen_Logo.webp';

export default function Home() {

  return (
    <div>

      <div className="video-clip-upper"></div>
      <div className="rounded-lg">
        <video className="starter-video" id="trailer-video" autoPlay loop muted>
          <source src={IntroVideo} type="video/mp4" />
          Your browser does not support the video functionality.
        </video>
      </div>
      <div className="video-clip-below"></div>

      <div className="clip-section">
        
      </div>

      <div className="second-video">
        <video className="black-hole-video" autoPlay loop muted>
          <source src={BlackHoleVideo} type="video/mp4" />
          Black Hole.
        </video>
      </div>

      <div className="infinite-page">
        <div className="infinite-card" id="infinite-section-target" >
          <img src={InfiniteImg} className="card-image" onClick={() => window.open('https://www.halowaypoint.com/en-gb/halo-infinite', '_blank')} />
          <div className="card-content">
            <p className="upper-header">Infitism</p>
            <h3 className="card-header">Halo Infinite</h3>
            <p className="card-description">
              Now is the time for a clash of champions! Relive the battles you fought as humanity’s champions in the new Community Reach playlist, bringing you back to iconic battles and maps from Halo: Reach. Build on your Banished Spartan look with the new Emissary armor in a new Operation Pass, and upgrade to the Premium Pass to obtain the Reavian Claw weapon model and Falling Flame weapon coating.
            </p>
          </div> 
        </div> 
      </div>

      <div className="infinite-page" id="masterchief-section-target">
        <div className="infinite-card" >
          <img src={MasterChief} className="card-image" onClick={() => window.open('https://www.halowaypoint.com/en-gb/halo-the-master-chief-collection', '_blank')} />
          <div className="card-content">
            <p className="upper-header">One Epic Saga</p>
            <h3 className="card-header">Halo : Master Chief Collection</h3>
            <p className="card-description">
            Halo: The Master Chief Collection offers players their own exciting journey through six games – Halo: Reach, Halo: Combat Evolved Anniversary, Halo 2: Anniversary, Halo 3, Halo 3: ODST Campaign, and Halo 4. Starting with the incredible bravery of Noble Six in Halo: Reach and ending with the rise of a new enemy in Halo 4, experience the complete Master Chief saga across a total of 67 campaign missions.
            </p>
          </div> 
        </div> 
      </div>

      <div className="show-section" id="show-series-target">
        <div className="">
          
          <div className="show-content">
            <h3 className="show-header">Halo : The Series</h3>
            <p className="show-text">
            Dramatizing an epic 26th-century conflict between humanity and an alien threat known as the Covenant, Halo the series will weave deeply drawn personal stories with action, adventure and a richly imagined vision of the future.
            </p>
          </div> 
          <div className="stream-display">
            <h2 className="stream-text">Streaming available only on:</h2>
            <a href="https://www.paramountplus.com/intl/?ftag=PPM-06-10bag1d" target="_blank"><img src={Paramount} className="stream-logo" /></a>
          </div>
        </div> 
      </div>

      <div className="gear-section">
        <h3 className="gear-header">HALO GEAR SHOP</h3>
        <div className="gear-text">
          <Typewriter
                  className="gear-text"
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "Premium Merchandise, New Releases and exclusive collectibles.",
                      "Gear up and get ready to launch into the Halo universe with our latest collections.",
                      " Fly your gaming colors and show off your fandom.",
                      "Shop the Halo Championship Launch Collection",
                      "And.. Gear up for your next expedition.",
                    ],
                  }}
                />   
        </div> 
        <a href='https://gear.xbox.com/pages/halo?utm_source=halowaypoint.com&utm_medium=referral&utm_campaign=&utm_content='><img src={XBOXmerch}  className="gear-logo"/></a>
                
                     
         
      </div>

    </div>
  );
}
