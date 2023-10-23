import React from 'react';
import fb from '../../assets/images/fbimage.png';
import twitter from '../../assets/images/twitter.png';
import whatsup from '../../assets/images/whats.png';
import instagram from '../../assets/images/insta.png';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <div>
      <footer class="py-4 bg-light mt-auto">
        <div class="container-fluid px-4">
          <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted">Copyright &copy; Your Website 2023</div>
            <div>
              <a href="#">Privacy Policy</a>
              &middot;
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
