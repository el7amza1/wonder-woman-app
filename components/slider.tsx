import React from 'react'

const Slider = () => {
  return (
    <div>
      <section id="home" className="main-banner parallaxie h-full md:py-5" style={{background:'url(./images/bg.png)'}} >
		<div className="heading">
			<h1>Welcome to <br/> wunderman thompson</h1>			
			<h3 className="cd-headline clip is-full-width">
				<span>Lorem Ipsum Dolor Sit Amet </span>
				<span className="cd-words-wrapper">
					<b className="is-visible">Web Developer</b>
					<b>Web Design</b>
					<b>Creative Design</b>
					<b>Graphic Design</b>
				</span>
				<div className="btn-ber">
					<a className="get_btn hvr-bounce-to-top" href="#careers">Get started</a>
					{/* <a className="learn_btn hvr-bounce-to-top" href="#">Learn More</a> */}
				</div>
			</h3>
		</div>
	</section>
    </div>
  )
}

export default Slider
