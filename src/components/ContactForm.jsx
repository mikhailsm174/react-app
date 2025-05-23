import React from 'react'
import "../assets/css/ContactForm.css"

import ContactImg from "../assets/images/contactimg.png";

function ContactForm() {
	return (
		<>
			<section className='w-100 py-10'>
				<div className='section_conatiner'>
					<section className="contact-wrapper">
						<div className="contact-container">
							<form className="contact-form">
								<h2>Send Us Message</h2>
								<div className="form-row">
									<div className="form-group">
										<label htmlFor="firstName">First Name</label>
										<input type="text" id="firstName" placeholder="First name" />
									</div>
									<div className="form-group">
										<label htmlFor="lastName">Last Name</label>
										<input type="text" id="lastName" placeholder="Last name" />
									</div>
								</div>
								<div className="form-row">
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<input type="email" id="email" placeholder="Email" />
									</div>
									<div className="form-group">
										<label htmlFor="phone">Phone Number</label>
										<input type="text" id="phone" placeholder="Phone number" />
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="message">What do you have in mind?</label>
									<textarea id="message" placeholder="Please enter query..."></textarea>
								</div>
								<button type="submit" className="submit-btn">Submit</button>
							</form>

							<div className="contact-info">
								<img
									src={ContactImg}
									alt="Contact Info"
									className="contact-image"
								/>
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	)
}

export default ContactForm
