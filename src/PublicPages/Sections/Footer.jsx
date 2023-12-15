import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
import fb from "../../assets/images/fbimage.png";
import twitter from "../../assets/images/twitter.png";
import whatsup from "../../assets/images/whats.png";
import instagram from "../../assets/images/insta.png";
import "../../assets/css/Footer.css";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <LogoImg />
              <h1
                className="font15 extraBold whiteColor"
                style={{ marginLeft: "15px" }}
              >
                Cantoment Primary School
              </h1>
            </Link>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} -{" "}
              <span className="purpleColor font13">
                Cantoment Primary School
              </span>{" "}
              All Right Reserved
            </StyleP>

            <Link
              className="whiteColor animate pointer font13"
              to="home"
              smooth={true}
              offset={-80}
            >
              Back to top
            </Link>
          </InnerWrapper>
        </div>
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
                <div className="socialmedia">
                  <p className="socialmedia-fb">
                    <img src={fb} alt="" />
                  </p>
                  <p className="socialmedia-twitter">
                    <img src={twitter} alt="" />
                  </p>
                  <p>
                    <img src={instagram} alt="" />
                  </p>
                  <p className="socialmedia-whatsup">
                    <img src={whatsup} alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>@{new Date().getFullYear()} AodeInn. All right Reserved</p>
            </div>
            <div className="sb__footer-below-links">
              <a href="/terms">
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </a>
              <a href="/privacy">
                <div>
                  <p>Privacy</p>
                </div>
              </a>
              <a href="/security">
                <div>
                  <p>Security</p>
                </div>
              </a>
              <a href="/cookie">
                <div>
                  <p>Cookie Declaration</p>
                </div>
              </a>
            </div>
          </div>
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
