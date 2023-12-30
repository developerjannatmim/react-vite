import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Contact() {
  return (
    <div id="contact" className="container-fluid py-5 mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <p className="section-title pr-5">
              <span className="pr-2">Book A Seat</span>
            </p>
            <h1 className="mb-4">Book A Seat For Your Children</h1>
            <p>
            Our school admits both international and local students throughout the year for preschool (ages 2 to 3), pre-kindergarten (age 4), kindergarten (age 5), and grades 1-12 (ages 6-18 YRS). Applications for the current year are accepted if there is available space. We welcome you to visit our friendly staff and administrators in our school building and also to make an appointment to meet our principal, Mrs. Lori A. Walsh, and or management.
            </p>
            <Link href="" className="join btn mt-4 py-2 px-4">Book Now</Link>
          </div>
          <div className="col-lg-5">
            <div className="card border-0">
              <div className="book-seat card-header text-center p-4">
                <h1 className="text-white m-0">Book A Seat</h1>
              </div>
              <div className="books card-body rounded-bottom p-5">
                <form>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 p-4"
                      placeholder="Your Email"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 p-4"
                      placeholder="Your Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control border-0 p-4"
                      placeholder="Your Phone Number"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    {/* <select
                      className="custom-select border-0 px-4"
                      style="height: 47px"
                    >
                      <option selected>Select A className</option>
                      <option value="1">className 1</option>
                      <option value="2">className 1</option>
                      <option value="3">className 1</option>
                    </select> */}
                  </div>
                  <div >
                    <button
                      className="book-now btn btn-block border-0 py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









