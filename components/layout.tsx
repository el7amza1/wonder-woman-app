import React, { useEffect, useState } from "react";
import { Props } from "../types";
import Scrollspy from "react-scrollspy";
import { Link, animateScroll as scroll } from "react-scroll";
import Link2 from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
const Layout = ({ children }: Props) => {
  const [show, setShow] = useState(false);
  const [scrolll, setScroll] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  useEffect(() => {
    const handleScroll = (event: any) => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        className={
          scrolll
            ? "navbar navbar-expand-lg navbar-dark fixed-top nav-bg"
            : "navbar navbar-expand-lg navbar-dark fixed-top "
        }
        id="mainNav"
      >
        <div className="container flex justify-between">
          <Link2 href="/">
            <img src="./images/logo.png" alt="" style={{ width: "120px" }} />
          </Link2>

          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="true"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div
            className={
              show
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarResponsive"
          >
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
                {path == "/" ? (
                  <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                      <Link
                        activeClass="active"
                        spy={true}
                        smooth={false}
                        to="home"
                        className="nav-link "
                        onClick={() => setShow(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        activeClass="active"
                        spy={true}
                        smooth={false}
                        to="/#careers"
                        className="nav-link "
                        onClick={() => setShow(false)}
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
                        onClick={() => setShow(false)}
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
                        onClick={() => setShow(false)}
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
                        onClick={() => setShow(false)}
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
                        onClick={() => setShow(false)}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                      <Link2
                        href="/#home"
                        className="nav-link "
                        onClick={() => setShow(false)}
                      >
                        Home
                      </Link2>
                    </li>
                    <li className="nav-item">
                      <Link2
                        href="/#careers"
                        className="nav-link "
                        onClick={() => setShow(false)}
                      >
                        <a href="/#careers">Careers</a>
                      </Link2>
                    </li>
                    <li className="nav-item">
                      <Link2
                        href="/#team"
                        className="nav-link "
                        onClick={() => setShow(false)}
                      >
                        Our Team
                      </Link2>
                    </li>
                    <li className="nav-item">
                      <Link2
                        href="/#interns"
                        className="nav-link "
                        onClick={() => setShow(false)}
                      >
                        Interns
                      </Link2>
                    </li>
                    <li className="nav-item">
                      <Link2
                        href="/#podcasts"
                        className="nav-link "
                        onClick={() => setShow(false)}
                      >
                        Podcasts
                      </Link2>
                    </li>
                    <li className="nav-item">
                      <Link2
                        href="/#contact"
                        className="nav-link "
                        onClick={() => setShow(false)}
                      >
                        Contact Us
                      </Link2>
                    </li>
                  </ul>
                )}
              </div>
            </Scrollspy>
          </div>
        </div>
      </nav>
      {children}
      <div className="copyrights">
        <div className="container">
          <div className="footer-distributed">
            <Link2 href="/">
              <img className="h-10" src="./images/logo.png" alt="" />
            </Link2>

            <div className="footer-center">
              <p className="footer-links">
                <Link2 href="/">Home</Link2>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
