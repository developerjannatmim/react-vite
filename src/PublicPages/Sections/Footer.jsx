import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
// Assets
import Logo from "../../assets/img/projects/logo.png";
import fb from "../../assets/images/fbimage.png";
import twitter from "../../assets/images/twitter.png";
import whatsup from "../../assets/images/whats.png";
import instagram from "../../assets/images/insta.png";
import "../../assets/css/Footer.css";

import gal1 from "../../assets/teacher/parent2.jfif";
import gal2 from "../../assets/teacher/parent4.jpg";
import gal3 from "../../assets/teacher/teacher.jpg";
import gal4 from "../../assets/teacher/teacher.jpg";
import gal5 from "../../assets/teacher/teacher004.jpg";
import gal6 from "../../assets/teacher/teacher007.jpg";
import gal7 from "../../assets/teacher/teacher1.webp";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container-fluid footer">
          <div className="sb__footer-links">
            <div className="col-lg-3 col-md-4 mb-5">
              <Image
                style={{ marginTop: "10px" }}
                src={Logo}
                alt="office"
                width="70px"
                height="70px"
              />
              <Link
                to="#"
                className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
                style={{ fontSize: "20px", lineHeight: "20px" }}
              >
                <span className="canto text-white">
                  Cantoment Public School
                </span>
              </Link>
              <p style={{ color: "white", fontSize: "13px" }}>
              At Cantonment Public School, we believe in fostering a lifelong love of learning in each child. We recognize each individual as a unique expression of body, soul and spirit, and we seek to engage the whole child through a developmentally appropriate curriculum that addresses the physical, emotional, and intellectual aspects of a child. 
              </p>
              <div className="d-flex justify-content-start mt-4">
                <Link
                  className="btn btn-outline-primary rounded-circle text-center"
                  width="38px"
                  height="38px"
                  to="#"
                  style={{ marginRight: "6px" }}
                >
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link
                  className="btn btn-outline-primary rounded-circle text-center"
                  width="40px"
                  height="40px"
                  to="#"
                  style={{ marginRight: "6px" }}
                >
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link
                  className="btn btn-outline-primary rounded-circle text-center"
                  width="38px"
                  height="38px"
                  to="#"
                  style={{ marginRight: "6px" }}
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link
                  className="btn btn-outline-primary rounded-circle text-center"
                  to="#"
                >
                  <i className="bi bi-instagram"></i>
                </Link>
              </div>
            </div>
            <div className="sb__footer-links_div">
              <strong className="footer-text">Get In Touch</strong>
              <div className="d-flex mb-2">
                <i className="bi bi-geo-alt"></i>
                <div className="pl-3">
                  <h6 className="text-white">Address</h6>
                  <p>Airport Road, Jessore, Bangladesh</p>
                </div>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-envelope"></i>
                <div className="pl-3">
                  <h6 className="text-white">Email</h6>
                  <p>info@school.com</p>
                </div>
              </div>
              <div className="d-flex">
                <i class="bi bi-telephone"></i>
                <div className="pl-3">
                  <h6 className="text-white">Phone</h6>
                  <p>+012 345 67890</p>
                </div>
              </div>
            </div>
            <div id="home">
            <div className="sb__footer-links_div">
              <strong className="footer-text">Quick Links</strong>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-white mb-2" to="#">
                  <i className="bi bi-chevron-right"></i> Home
                </Link>
                <Link className="text-white mb-2" to="#">
                  <i className="bi bi-chevron-right"></i> About Us
                </Link>
                <Link className="text-white mb-2" to="#">
                  <i className="bi bi-chevron-right"></i> Programs
                </Link>
                <Link className="text-white mb-2" to="#">
                  <i className="bi bi-chevron-right"></i> Our Classes
                </Link>
                <Link className="text-white mb-2" to="#">
                  <i className="bi bi-chevron-right"></i> Our Teachers
                </Link>
                <Link className="text-white" to="#">
                  <i className="bi bi-chevron-right"></i> FAQ
                </Link>
                <Link className="text-white" to="#">
                  <i className="bi bi-chevron-right"></i> Contact Us
                </Link>
              </div>
            </div>
            </div>
            <div className="sb__footer-links_div">
              <strong class="footer-news mb-3">Gallery</strong>
                <div className="row">
                  <div className="col-4"><img src={gal1} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal2} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal3} width="40px" height="20px"/></div>
                  <div className="col-4"><img src={gal4} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal5} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal6} width="40px" height="20px"/></div>
                  <div className="col-4"><img src={gal7} width="40px" height="20px"/></div>
                  
                  <div className="col-4 px-1"><img src={gal1} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal2} width="40px" height="20px"/></div>
                  <div className="col-4"><img src={gal3} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal4} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal5} width="40px" height="20px"/></div>
                  <div className="col-4"><img src={gal6} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal7} width="40px" height="20px"/></div>
                  
                  <div className="col-4 px-1"><img src={gal1} width="40px" height="20px"/></div>
                  <div className="col-4"><img src={gal2} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal3} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal4} width="40px" height="20px"/></div>
                  <div className="col-4"><img src={gal5} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal6} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal7} width="40px" height="20px"/></div>
                  
                  <div className="col-4"><img src={gal1} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal2} width="40px" height="20px"/></div>
                  <div className="col-4 px-1"><img src={gal3} width="40px" height="20px"/></div>
                  
                </div>
              {/* <form action="">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control border-0 py-4"
                    placeholder="Your Name"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control border-0 py-4"
                    placeholder="Your Email"
                    required="required"
                  />
                </div>
                <div>
                  <button
                    class="footer-submit btn btn-block border-0 py-3"
                    type="submit"
                  >
                    Submit Now
                  </button>
                </div>
              </form> */}
            </div>
          </div>
          <hr></hr>
          <StyleP className="whiteColor font13">
            © {getCurrentYear()} -{" "}
            <span className="purpleColor font13">Cantonment Public School</span>{" "}
            All Right Reserved
          </StyleP>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
