import React from 'react'

const Slider = () => {
  return (
    <div>
      <section id="home" className="main-banner parallaxie h-full md:py-5" style={{background:'url(./images/bg.png)'}} >
		<div className="heading">
			<h1 className='md:text-xl'>Welcome to <br/> WunderWoman</h1>			
			<h3 className="cd-headline clip is-full-width">
				<span>by Wunderman Thompson</span>
				
				<div className="btn-ber">
					<a className="get_btn hvr-bounce-to-top" href="#team">Get started</a>
					{/* <a className="learn_btn hvr-bounce-to-top" href="#">Learn More</a> */}
				</div>
			</h3>
		</div>
	</section>
    </div>
  )
}

export default Slider
