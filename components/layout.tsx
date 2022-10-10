import React, { useEffect, useState } from "react";
import { Props } from "../types";
import Scrollspy from "react-scrollspy";
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Head from "next/head";
const Layout = ({ children }: Props) => {
  const [show , setShow] = useState(false)
  const [scrolll , setScroll] = useState(false)
 
useEffect(() => {
  const handleScroll = (event:any) => {
    window.scrollY > 50 ? setScroll(true): setScroll(false)
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  
  return (
    <div>
      <Head>
        <title>JWT</title>
        <link
          rel="shortcut icon"
          href="https://d3bzyjrsc4233l.cloudfront.net/company_office/WTSA.png"
        />
      </Head>
      <nav
        className={ scrolll ?"navbar navbar-expand-lg navbar-dark fixed-top nav-bg":"navbar navbar-expand-lg navbar-dark fixed-top "}
        id="mainNav"
      >
        <div className="container flex justify-between">
        <a href="/">
              <img src="./images/logo.png" alt=""  style={{width:"120px"}}/>
              </a>
        
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={()=>setShow(!show)}
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className={show? "collapse navbar-collapse show":"collapse navbar-collapse"} id="navbarResponsive">
            <Scrollspy
              className="navbar-nav text-uppercase ml-auto"
              items={[
                "home",
                "services",
                "team",
                "interns",
                "podcasts",
                "contact",
              ]}
              currentClassName="active"
            >
              <div className="">
              

              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={false}
                    to="home"
                    className="nav-link "
                    onClick={()=>setShow(false)}

                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={false}
                    to="careers"
                    className="nav-link "
                    onClick={()=>setShow(false)}

                  >
                    Careers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={false}
                    to="team"
                    className="nav-link "
                    onClick={()=>setShow(false)}

                  >
                    Our Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={false}
                    to="interns"
                    className="nav-link "
                    onClick={()=>setShow(false)}

                  >
                    Interns
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={false}
                    to="podcasts"
                    className="nav-link "
                    onClick={()=>setShow(false)}

                  >
                    Podcasts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    spy={true}
                    smooth={false}
                    to="contact"
                    className="nav-link "
                    onClick={()=>setShow(false)}

                  >
                    Contect Us
                  </Link>
                </li>
              </ul>
              </div>
            </Scrollspy>
          </div>
        </div>
      </nav>
      {children}
      <div className="copyrights">
        <div className="container">
          <div className="footer-distributed">
            <a href="/">
              <img className="h-10" src="./images/logo.png" alt="" />
            </a>

            <div className="footer-center">
              <p className="footer-links">
                <a href="/">Home</a>
                <a href="#">Blog</a>
                <a href="#">Pricing</a>
                <a href="#">About</a>
                <a href="#">Faq</a>
                <a href="#">Contact</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
