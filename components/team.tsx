import React from 'react'

const Team = () => {
  return (
    <div>
      {/* <div className='bg-t' style={{backgroundImage:"url(./images/bg-1.png)"}}>

</div> */}
      <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{    height: "656px",margin:"0"}}>
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="item bg bg1 active">
            <div className="container">
              <div className="carousel-caption">
                <h1>Example headline.</h1>
                <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="item bg bg2">
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="item bg bg1">
            <div className="container">
              <div className="carousel-caption">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#myCarousel" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
      </div>
      {/* <div id="team" className="section wb">
		<div className="container">
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
		</div>
	</div> */}
    </div>
  )
}

export default Team
