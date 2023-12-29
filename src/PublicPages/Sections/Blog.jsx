import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
//Assets
import ClassOne from '../../assets/images/class.jpg';
import ClassTwo from '../../assets/images/front3.jpg';
import ClassThree from '../../assets/images/class1.jpg';

import teacherOne from '../../assets/teacher/teacher.jpg';
import teacherTwo from '../../assets/teacher/teacher004.jpg';
import teacherThree from '../../assets/teacher/teacher007.jpg';
import teacherFour from '../../assets/teacher/teacher1.webp';

import teacherFive from '../../assets/teacher/teacher3.jpg';
import teacherSix from '../../assets/teacher/teacher4.jpg';
import teacherSeven from '../../assets/img/teacher/p-3.jpg';
import teacherEight from '../../assets/img/teacher/p-4.jpg';

export default function Blog() {
  return (
    <>
      {/* <!-- className Start --> */}
    <div id="blog" className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Popular className</span>
          </p>
          <h1 className="mb-4">className for Your Kids</h1>
        </div>
        <div className="row">
          <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
              <img className="card-img-top mb-2" src={ClassOne} alt="" />
              <div className="card-body text-center">
                <h4 className="card-title">Drawing className</h4>
                <p className="card-text">
                  Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                  ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                </p>
              </div>
              <div className="card-footer bg-transparent py-4 px-5">
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Age of Kids</strong>
                  </div>
                  <div className="col-6 py-1">3 - 6 Years</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Total Seats</strong>
                  </div>
                  <div className="col-6 py-1">40 Seats</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Class Time</strong>
                  </div>
                  <div className="col-6 py-1">08:00 - 10:00</div>
                </div>
              </div>
              <Link href="/login" className="join btn px-4 mx-auto mb-4">Join Now</Link>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
              <img className="card-img-top mb-2" src={ClassTwo} alt="" />
              <div className="card-body text-center">
                <h4 className="card-title">Language Learning</h4>
                <p className="card-text">
                  Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                  ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                </p>
              </div>
              <div className="card-footer bg-transparent py-4 px-5">
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Age of Kids</strong>
                  </div>
                  <div className="col-6 py-1">3 - 6 Years</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Total Seats</strong>
                  </div>
                  <div className="col-6 py-1">40 Seats</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Class Time</strong>
                  </div>
                  <div className="col-6 py-1">08:00 - 10:00</div>
                </div>
              </div>
              <Link href="/login" className="join btn px-4 mx-auto mb-4">Join Now</Link>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
              <img className="card-img-top mb-2" src={ClassThree} alt="" />
              <div className="card-body text-center">
                <h4 className="card-title">Basic Science</h4>
                <p className="card-text">
                  Justo ea diam stet diam ipsum no sit, ipsum vero et et diam
                  ipsum duo et no et, ipsum ipsum erat duo amet clita duo
                </p>
              </div>
              <div className="card-footer bg-transparent py-4 px-5">
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Age of Kids</strong>
                  </div>
                  <div className="col-6 py-1">3 - 6 Years</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Total Seats</strong>
                  </div>
                  <div className="col-6 py-1">40 Seats</div>
                </div>
                <div className="row border-bottom">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Class Time</strong>
                  </div>
                  <div className="col-6 py-1">08:00 - 10:00</div>
                </div>
              </div>
              <Link href="/login" className="join btn px-4 mx-auto mb-4">Join Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>   
    {/* <!-- Teacher Start --> */}
    <div id="teacher" className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Our Teachers</span>
          </p>
          <h1 className="mb-4">Meet Our Teachers</h1>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div
              className="position-relative overflow-hidden mb-4"
              style={{borderRadius: "100%"}}
            >
              <img className="img-fluid w-50" src={teacherOne} alt="" />
              <div
                className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
              >
                <Link
                  className="btn btn-outline-primary rounded-circle text-center"
                  width="38px"
                  height="38px"
                  to="#"
                  style={{ marginRight: "6px", backgroundColor: 'black' }}
                >
                  <i className="bi bi-twitter"></i>
                </Link>
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' 
                  height="38px"
                  href="#"
                  ><i className="fab fa-facebook-f"></i></Link>
                <Link
                  className="btn btn-outline-light text-center px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
            <h4>Raktim</h4>
            <i>Music Teacher</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div
              className="position-relative overflow-hidden mb-4"
              style={{borderRadius: '100%'}}
            >
              <img className="img-fluid w-50" src={teacherTwo} alt="" />
              <div
                className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
              >
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-twitter"></i></Link>
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-facebook-f"></i></Link>
                <Link
                  className="btn btn-outline-light text-center px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
            <h4>Ayesha</h4>
            <i>Language Teacher</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div
              className="position-relative overflow-hidden mb-4"
              style={{borderRadius: "100%"}}
            >
              <img className="img-fluid w-50" src={teacherThree} alt="" />
              <div
                className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
              >
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px'
                  height='38px'
                  href="#"
                  ><i className="fab fa-twitter"></i></Link>
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' 
                  height='38px'
                  href="#"
                  ><i className="fab fa-facebook-f"></i></Link>
                <Link
                  className="btn btn-outline-light text-center px-0"
                  width='38px'
                  height='38px'
                  href="#"
                  ><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
            <h4>Mollie</h4>
            <i>Dance Teacher</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div
              className="position-relative overflow-hidden mb-4"
              style={{borderRadius: "100%"}}
            >
              <img className="img-fluid w-50" src={teacherFour} alt="" />
              <div
                className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
              >
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-twitter"></i></Link>
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-facebook-f"></i></Link>
                <Link
                  className="btn btn-outline-light text-center px-0"
                  width='38px'
                  height="38px"
                  href="#"
                  ><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
            <h4>Oshim Das</h4>
            <i>Art Teacher</i>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div
              className="position-relative overflow-hidden mb-4"
              style={{borderRadius: "100%"}}
            >
              <img className="img-fluid w-50" src={teacherFive} alt="" />
              <div
                className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
              >
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px'
                  height='38px'
                  href="#"
                  ><i className="fab fa-twitter"></i></Link>
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' 
                  height="38px"
                  href="#"
                  ><i className="fab fa-facebook-f"></i></Link>
                <Link
                  className="btn btn-outline-light text-center px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
            <h4>Romana Khan</h4>
            <i>Math Teacher</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div
              className="position-relative overflow-hidden mb-4"
              style={{borderRadius: '100%'}}
            >
              <img className="img-fluid w-50" src={teacherSix} alt="" />
              <div
                className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
              >
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-twitter"></i></Link>
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-facebook-f"></i></Link>
                <Link
                  className="btn btn-outline-light text-center px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
            <h4>Nabil</h4>
            <i>Bangla Teacher</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div
              className="position-relative overflow-hidden mb-4"
              style={{borderRadius: "100%"}}
            >
              <img className="img-fluid w-50" src={teacherSeven} alt="" />
              <div
                className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
              >
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px'
                  height='38px'
                  href="#"
                  ><i className="fab fa-twitter"></i></Link>
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' 
                  height='38px'
                  href="#"
                  ><i className="fab fa-facebook-f"></i></Link>
                <Link
                  className="btn btn-outline-light text-center px-0"
                  width='38px'
                  height='38px'
                  href="#"
                  ><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
            <h4>Mahmud</h4>
            <i>English Teacher</i>
          </div>
          <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div
              className="position-relative overflow-hidden mb-4"
              style={{borderRadius: "100%"}}
            >
              <img className="img-fluid w-50" src={teacherEight} alt="" />
              <div
                className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
              >
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-twitter"></i
                ></Link>
                <Link
                  className="btn btn-outline-light text-center mr-2 px-0"
                  width='38px' height='38px'
                  href="#"
                  ><i className="fab fa-facebook-f"></i
                ></Link>
                <Link
                  className="btn btn-outline-light text-center px-0"
                  width='38px'
                  height="38px"
                  href="#"
                  ><i className="fab fa-linkedin-in"></i
                ></Link>
              </div>
            </div>
            <h4>Delwar</h4>
            <i>Chemistry Teacher</i>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Teacher End --> */}
    <div className="lightBg" style={{padding: '30px 0', marginTop: '60px'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What Parents Say!</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    {/* <!-- className End --> */}
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;