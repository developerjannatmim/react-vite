import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
// import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import Logo from "../../assets/img/projects/logo.png";
import { Image } from "react-bootstrap";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "60px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            {/* <LogoIcon /> */}
              <Image src={Logo} alt="office" width='50px' height='50px'/>
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Cantonment Public School
            </h1>
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active01" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active01" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                About Us
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active01" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Programmes
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active01" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                Classes
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active01" style={{ padding: "10px 15px" }} to="teacher" spy={true} smooth={true} offset={-80}>
                Teachers
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active01" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                FAQ
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active01" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a href="/login" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <a href="/register" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Register
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


