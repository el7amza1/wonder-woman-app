import React from 'react'

const ContactUs = () => {
  return (
    <div>
        <div id="contact" className="section db">
        <div className="container">
            <div className="section-title text-center">
                <h3>Contact</h3>
                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="contact_form">
                        <div id="message"></div>
                        <form id="contactForm" name="sentMessage">
							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<input className="form-control" id="name" type="text" placeholder="Your Name"   />
										<p className="help-block text-danger"></p>
									</div>
									<div className="form-group">
										<input className="form-control" id="email" type="email" placeholder="Your Email"  />
										<p className="help-block text-danger"></p>
									</div>
									<div className="form-group">
										<input className="form-control" id="phone" type="tel" placeholder="Your Phone"  />
										<p className="help-block text-danger"></p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<textarea className="form-control" id="message" placeholder="Your Message" ></textarea>
										<p className="help-block text-danger"></p>
									</div>
								</div>
								<div className="clearfix"></div>
								<div className="col-lg-12 text-center">
									<div id="success"></div>
									<button id="sendMessageButton" className="sim-btn hvr-bounce-to-top" type="submit">Send Message</button>
								</div>
							</div>
						</form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContactUs
