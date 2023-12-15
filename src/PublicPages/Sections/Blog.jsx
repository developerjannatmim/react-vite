import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
//Assets
import ClassOne from '../../assets/img/class/class-1.jpg';
import ClassTwo from '../../assets/img/class/class-2.jpg';
import ClassThree from '../../assets/img/class/class-3.jpg';

export default function Blog() {
  return (
    // <Wrapper id="blog">
    //   <div classNameName="whiteBg">
    //     <div classNameName="container">
    //       <HeaderInfo>
    //         <h1 classNameName="font40 extraBold">classNamees for Your Kids</h1>
    //         <p classNameName="font13">
    //           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
    //           <br />
    //           labore et dolore magna aliquyam erat, sed diam voluptua.
    //         </p>
    //       </HeaderInfo>
    //       <div classNameName="row textCenter">
    //         <div classNameName="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    //           <BlogBox
    //             title="Drawing className"
    //             text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
    //             tag="company"
    //             author="Luke Skywalker, 2 days ago"
    //             action={() => alert("clicked")}
    //           />
    //         </div>
    //         <div classNameName="h3 col-xs-12 col-sm-4 col-md-4 col-lg-4">
    //           <BlogBox
    //             title="Language Learning"
    //             text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
    //             tag="company"
    //             author="Luke Skywalker, 2 days ago"
    //             action={() => alert("clicked")}
    //           />
    //         </div>
    //         <div classNameName="h3 col-xs-12 col-sm-4 col-md-4 col-lg-4">
    //           <BlogBox
    //             title="Basic Science"
    //             text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
    //             tag="company"
    //             author="Luke Skywalker, 2 days ago"
    //             action={() => alert("clicked")}
    //           />
    //         </div>
    //       </div>
    //       <div classNameName="row textCenter">
    //         <div classNameName="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    //           <BlogBox
    //             title="New Office!"
    //             text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
    //             tag="company"
    //             author="Luke Skywalker, 2 days ago"
    //             action={() => alert("clicked")}
    //           />
    //         </div>
    //         <div classNameName="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    //           <BlogBox
    //             title="New Office!"
    //             text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
    //             tag="company"
    //             author="Luke Skywalker, 2 days ago"
    //             action={() => alert("clicked")}
    //           />
    //         </div>
    //         <div classNameName="col-xs-12 col-sm-4 col-md-4 col-lg-4">
    //           <BlogBox
    //             title="New Office!"
    //             text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
    //             tag="company"
    //             author="Luke Skywalker, 2 days ago"
    //             action={() => alert("clicked")}
    //           />
    //         </div>
    //       </div>
    //       <div classNameName="row flexCenter">
    //         <div style={{ margin: "50px 0", width: "200px" }}>
    //           <FullButton title="Load More" action={() => alert("clicked")} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div classNameName="lightBg" style={{padding: '50px 0'}}>
    //     <div classNameName="container">
    //       <HeaderInfo>
    //         <h1 classNameName="font40 extraBold">What They Say?</h1>
    //         <p classNameName="font13">
    //           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
    //           <br />
    //           labore et dolore magna aliquyam erat, sed diam voluptua.
    //         </p>
    //       </HeaderInfo>
    //       <TestimonialSlider />
    //     </div>
    //   </div>
    // </Wrapper>
    <>
      {/* <!-- className Start --> */}
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Popular classNamees</span>
          </p>
          <h1 className="mb-4">classNamees for Your Kids</h1>
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
                    <strong>className Time</strong>
                  </div>
                  <div className="col-6 py-1">08:00 - 10:00</div>
                </div>
                <div className="row">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Tution Fee</strong>
                  </div>
                  <div className="col-6 py-1">$290 / Month</div>
                </div>
              </div>
              <a href="" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
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
                    <strong>className Time</strong>
                  </div>
                  <div className="col-6 py-1">08:00 - 10:00</div>
                </div>
                <div className="row">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Tution Fee</strong>
                  </div>
                  <div className="col-6 py-1">$290 / Month</div>
                </div>
              </div>
              <a href="" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
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
                    <strong>className Time</strong>
                  </div>
                  <div className="col-6 py-1">08:00 - 10:00</div>
                </div>
                <div className="row">
                  <div className="col-6 py-1 text-right border-right">
                    <strong>Tution Fee</strong>
                  </div>
                  <div className="col-6 py-1">$290 / Month</div>
                </div>
              </div>
              <a href="" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="lightBg" style={{padding: '30px 0'}}>
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