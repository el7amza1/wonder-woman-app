import React from 'react'

const Slider = () => {
  return (
    <div>
      <section id="home" className="main-banner parallaxie h-full md:py-5" style={{background:'url(./images/bg.png)'}} >
		<div className="heading">
			<h1 className='md:text-6xl text-3xl'>Welcome to <br/> WunderWoman</h1>			
			<h3 className="cd-headline clip is-full-width md:text-6xl text-xl">
				<span>by Wunderman Thompson</span>
				
				
			</h3>
			<div className="btn-ber">
					<a className="get_btn hvr-bounce-to-top" href="#team">Get started</a>
					{/* <a className="learn_btn hvr-bounce-to-top" href="#">Learn More</a> */}
				</div>
		</div>
	</section>
    </div>
  )
}

export default Slider
