import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/activities/pohela.jpg";
import ProjectImg2 from "../../assets/activities/sciencefari.jpg";
import ProjectImg3 from "../../assets/activities/sports.jpg";
import ProjectImg4 from "../../assets/activities/arts.jpg";
import ProjectImg5 from "../../assets/activities/picnic.jpg";
import ProjectImg6 from "../../assets/activities/cultural.jpg";
import AddImage2 from "../../assets/img/add/add2.png";
import { Link } from "react-scroll";
import About1 from "../../assets/front/best1.jpg";
import About2 from "../../assets/front/best2.jpg";
import { useNavigate } from "react-router";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
        {/* <!-- About Start --> */}
    <div className="container-fluid">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <img
              className="img-fluid rounded mb-5 mb-lg-0"
              src={About1}
              alt=""
            />
          </div>
          <div className="col-lg-7">
            <p className="section-title pr-5">
              <span className="pr-2">Learn About Us</span>
            </p>
            <h1 className="mb-3">Best School For Your Children</h1>
            <p className="mb-3">
            Cantonment High School Jessore is the first school established by the Directorate of Military Lands and Cantonments under the Ministry of Defence. The journey of the college started in two small rooms of Daud High School with a total of 5 students including 3 Bengalis on 17 July 1969 as 'Cantonment College Jessore' within Jessore Cantonment.
            </p>
            <div className="row pt-2 pb-4">
              <div className="col-6 col-md-4">
                <img className="img-fluid rounded" src={About2} alt="" />
              </div>
              <div className="col-6 col-md-8">
                <ul className="list-inline m-0">
                  <li className="py-2 border-top border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>Labore eos amet
                    dolor amet diam
                  </li>
                  <li className="py-2 border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>Etsea et sit
                    dolor amet ipsum
                  </li>
                  <li className="py-2 border-bottom">
                    <i className="fa fa-check text-primary mr-3"></i>Diam dolor diam
                    elitripsum vero.
                  </li>
                </ul>
              </div>
            </div>
            <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0", color: 'white'}}>
              <Link
                to="/login"
                className="learn btn mt-4 py-2 px-4"
              >
                Learn More
              </Link>
              {/* <div style={{ width: "190px", marginLeft: "15px" }}>
                <Link to="contact" spy={true} smooth={true} offset={-80}>
                  <FullButton title="Contact Us" border />
                </Link>
              </div> */}
            </ButtonsRow>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- About End --> */}
    <div className="extra">
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="extra container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Extracurricular Activities</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="pic row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Pohela Boishakh
                "
                text="The Bengali New Year is observed as a High holiday in Bangladesh. The day is marked with singing, processions, and fairs. Traditionally, businesses start this day with a new ledger, clearing out the old."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Science Fair"
                text="ASIS Annual Science Fair provides an important opportunity for the students to showcase and highlight their projects or experiments. Students may either work independently or in pairs."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Annual Sports"
                text="Sports Day at ASIS is a platform to showcase the talent and efforts put in by the student to make it a successful event. Sports here is not only about competition, it is also about having fun."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Art Competition"
                text="Creating art expands a child’s ability to interact with the world around them, and provides a new set of skills for self-expression and communication. Not only does art help to develop the right side of the brain.."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title="School Picnic"
                text="Winter is the perfect time for celebrations at school. We have our winter picnic right on the last day before the winter break. As ours is a multicultural school, we have children from different countries."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Cultural Program"
                text="In Cantoment Primary School, we introduce our students with culture, music is a form of art and cultural activity whose medium is sound organized in time. It helps to learn language easily. It helps recalling memories, improves mood"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <Link
            to="/login"
            className="load-more btn mt-4 py-2 px-4"
            style={{color: 'white'}}
          >
            Load More
          </Link>
        </div>
      </div>
      {/* <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">A few words about cantoment primary school</h4>
              <h2 className="font40 extraBold">ABOUT US</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <Link to="services"><FullButton title="Learn More" /></Link>
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                    <Link to="contact" spy={true} smooth={true} offset={-80}>
                      <FullButton title="Contact Us" border />
                    </Link>
                  </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div> */}
    </Wrapper>
    </div>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
