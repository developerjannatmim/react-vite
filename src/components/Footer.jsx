import React from 'react';
import fb from "../assets/images/fbimage.png";
import twitter from "../assets/images/twitter.png";
import whatsup from "../assets/images/whats.png";
import instagram from "../assets/images/insta.png";
import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>employer</p>
            </a>
            <a href="/employer">
              <p>Health Plane</p>
            </a>
            <a href="/employer">
              <p>proucts</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/employer">
              <p>employer</p>
            </a>
            <a href="/employer">
              <p>employer</p>
            </a>
            <a href="/employer">
              <p>employer</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Partners</h4>
            <a href="/employer">
              <p>employer</p>
            </a>
            <a href="/employer">
              <p>employer</p>
            </a>
            <a href="/employer">
              <p>employer</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/employer">
              <p>employer</p>
            </a>
            <a href="/employer">
              <p>employer</p>
            </a>
            <a href="/employer">
              <p>employer</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Comming Soon on</h4>
            <div className='socialmedia'>
            <p className='socialmedia-fb'><img src={fb} alt=''/></p>
            <p className='socialmedia-twitter'><img src={twitter} alt=''/></p>
            <p><img src={instagram} alt=''/></p>
            <p className='socialmedia-whatsup'><img src={whatsup} alt=''/></p>
            </div>

          </div>
        </div>
      </div>
      <hr></hr>
      <div className='sb__footer-below'>
        <div className='sb__footer-copyright'>
          <p>
            @{new Date().getFullYear()} AodeInn. All right Reserved
          </p>
        </div>
        <div className='sb__footer-below-links'>
          <a href='/terms'><div><p>Terms & Conditions</p></div></a>
          <a href='/privacy'><div><p>Privacy</p></div></a>
          <a href='/security'><div><p>Security</p></div></a>
          <a href='/cookie'><div><p>Cookie Declaration</p></div></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
