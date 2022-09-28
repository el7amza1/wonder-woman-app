import React from 'react'
import {BiPlusMedical} from"react-icons/bi"
const Services = () => {
  return (
    <div>
       <div id="services" className="section lb">
        <div className="container">
            <div className="section-title text-center">
                <h3>Services</h3>
                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
            </div>

            <div className="row">
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-seo"></i>
						</div>
						<h2>Web Development</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<span className='icon-p'>
						<BiPlusMedical />
						</span>
					</div>
                </div>
                <div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-development"></i>
						</div>
						<h2>Responsive Design</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<span className='icon-p'>
						<BiPlusMedical />
						</span>
					</div>
                </div>
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-process"></i>
						</div>
						<h2>Creative Design</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<span className='icon-p'>
						<BiPlusMedical />
						</span>
					</div>
                </div>
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-discuss-issue"></i>
						</div>
						<h2>Support</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<span className='icon-p'>
						<BiPlusMedical />
						</span>
					</div>
                </div>
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-idea"></i>
						</div>
						<h2>Web Idea</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<span className='icon-p'>
						<BiPlusMedical />
						</span>
					</div>
                </div>
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-idea-1"></i>
						</div>
						<h2>Graphic Design</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						<span className='icon-p'>
						<BiPlusMedical />
						</span>
					</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services
