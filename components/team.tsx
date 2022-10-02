import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
const Team = () => {
  return (

        <div id="team" className="bg-g1 wb pt-3 bg-g1 mt-4">
	    <Carousel className='overflow-hidden' autoPlay={true} infiniteLoop={true} stopOnHover={true} useKeyboardArrows={true} >
                <div  style={{backgroundImage:"url(./images/team/t-1.webp)"}} className="w-full h-screen bg-cover	">
                </div>
                <div style={{backgroundImage:"url(./images/team/t-2.jpg)"}} className="w-full h-screen bg-cover	">
                </div>
                <div style={{backgroundImage:"url(./images/team/t-3.jpg)"}} className="w-full h-screen bg-cover	">
                </div>
            </Carousel>
		{/* <div className="container">
			<div className="section-title text-center">
				<h3>Our Team</h3>
				<p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
			</div>
		
			<div className="row">
				<div className="col-md-3 col-sm-6">
					<div className="our-team">
						<div className="pic">
							<img src="./uploads/img-2.jpg"/>
						</div>
						<div className="team-content">
							<h3 className="title">Kristiana</h3>
							<span className="post">Web Designer</span>
							<ul className="social">
								<li><a href="#" className="fa fa-facebook"></a></li>
								<li><a href="#" className="fa fa-twitter"></a></li>
								<li><a href="#" className="fa fa-google-plus"></a></li>
								<li><a href="#" className="fa fa-skype"></a></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-6">
					<div className="our-team">
						<div className="pic">
            <img src="./uploads/img-2.jpg"/>
						</div>
						<div className="team-content">
							<h3 className="title">Miranda joy</h3>
							<span className="post">Web Designer</span>
							<ul className="social">
								<li><a href="#" className="fa fa-facebook"></a></li>
								<li><a href="#" className="fa fa-twitter"></a></li>
								<li><a href="#" className="fa fa-google-plus"></a></li>
								<li><a href="#" className="fa fa-skype"></a></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-6">
					<div className="our-team">
						<div className="pic">
            <img src="./uploads/img-2.jpg"/>
						</div>
						<div className="team-content">
							<h3 className="title">Williamson</h3>
							<span className="post">Web Developer</span>
							<ul className="social">
								<li><a href="#" className="fa fa-facebook"></a></li>
								<li><a href="#" className="fa fa-twitter"></a></li>
								<li><a href="#" className="fa fa-google-plus"></a></li>
								<li><a href="#" className="fa fa-skype"></a></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="col-md-3 col-sm-6">
					<div className="our-team">
						<div className="pic">
            <img src="./uploads/img-2.jpg"/>
						</div>
						<div className="team-content">
							<h3 className="title">Steve Thomas</h3>
							<span className="post">Web Developer</span>
							<ul className="social">
								<li><a href="#" className="fa fa-facebook"></a></li>
								<li><a href="#" className="fa fa-twitter"></a></li>
								<li><a href="#" className="fa fa-google-plus"></a></li>
								<li><a href="#" className="fa fa-skype"></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div> */}
	</div>
  )
}

export default Team
