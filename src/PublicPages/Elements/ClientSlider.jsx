import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import ClientLogo01 from "../../assets/img/clients/playground.png";
import ClientLogo02 from "../../assets/img/clients/logo02.svg";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";
import ClientLogo06 from "../../assets/img/clients/logo06.svg";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* <Slider {...settings}>
        <LogoWrapper classNameName="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" />
          <div>
            <h5>Logo</h5>
          </div>
        </LogoWrapper>
        <LogoWrapper classNameName="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper classNameName="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper classNameName="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper classNameName="flexCenter">
          <ImgStyle src={ClientLogo05} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper classNameName="flexCenter">
          <ImgStyle src={ClientLogo06} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper classNameName="flexCenter">
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper classNameName="flexCenter">
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper classNameName="flexCenter">
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper classNameName="flexCenter">
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
      </Slider> */}
      {/* <!-- Facilities Start --> */}
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 pb-1" style={{cursor: 'pointer'}}>
              <div
                className="d-flex bg-light shadow-lg border-top rounded mb-4"
                style={{ padding: "15px"}}
              >
                <div className="pl-4">
                  <h4 className="h4" style={{ color: "#FFB534"}}>Play Ground</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1" style={{cursor: 'pointer'}}>
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: "15px" }}
              >
                <div className="pl-4">
                  <h4 className="h4" style={{ color: "#49108B"}}>Music and Dance</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1" style={{cursor: 'pointer'}}>
              <div
                className="d-flex bg-light shadow-lg border-top rounded mb-4"
                style={{ padding: "15px" }}
              >
                <div className="pl-4">
                  <h4 className="h4" style={{ color: "#7ED7C1"}}>Arts and Crafts</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1" style={{cursor: 'pointer'}}>
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: "15px" }}
              >
                <div className="pl-4">
                  <h4 className="h4" style={{ color: "#C21292"}}>Safe Transportation</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1" style={{cursor: 'pointer'}}>
              <div
                className="d-flex bg-light shadow-lg border-top rounded mb-4"
                style={{ padding: "15px" }}
              >
                <div className="pl-4">
                  <h4 className="h4" style={{ color: "#3081D0"}}>Healthy food</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1" style={{cursor: 'pointer'}}>
              <div
                className="d-flex bg-light shadow-sm border-top rounded mb-4"
                style={{ padding: "15px" }}
              >
                <div className="pl-4">
                  <h4 className="h4" style={{ color: "#EE7214"}}>Educational Tour</h4>
                  <p className="m-0">
                    Kasd labore kasd et dolor est rebum dolor ut, clita dolor
                    vero lorem amet elitr vero...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facilities Start --> */}
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;
