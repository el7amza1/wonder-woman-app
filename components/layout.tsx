import React from 'react'
import { Props } from '../types'

const Layout = ({children}:Props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-black" id="mainNav">
      <div className="container">
        {/* <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <svg className="wt-logo" role="img"><title>Wunderman Thompson</title><use href="#40b66408b68b0d881ddb6afded3b01f0"></use></svg>
		</a> */}
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger active" href="#home">Home</a>
            </li>
        
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
			<li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#blog">Blog</a>
            </li>
			<li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team">Our Team</a>
            </li>
			<li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#pricing">Pricing</a>
            </li>
			<li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">Contect Us</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
        {children}
        <div className="copyrights">
        <div className="container">
            <div className="footer-distributed">
				<a href="#"><img src="images/logo.png" alt="" /></a>
                <div className="footer-center">
                    <p className="footer-links">
                        <a href="#">Home</a>
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
  )
}

export default Layout
