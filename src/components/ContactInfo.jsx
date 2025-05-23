import React from 'react'
import "../assets/css/ContactInfo.css"

function ContactInfo() {
	return (
		<>
			<section className='w-full py-10 bg-sky-500'>
				<div className='section_conatiner'>
					<div className="info-container">
						<div className="info-box">
							<div className="icon-circle">
								<span role="img" aria-label="running">🏃</span>
							</div>
							<h3>ABOUT CLUB</h3>
							<p>Running Guide</p>
							<p>Workouts</p>
						</div>

						<div className="info-box">
							<div className="icon-circle">
								<span role="img" aria-label="phone">📞</span>
							</div>
							<h3>PHONE (LANDLINE)</h3>
							<p>+912 3 567 8987</p>
							<p>+912 5 252 3336</p>
						</div>

						<div className="info-box">
							<div className="icon-circle">
								<span role="img" aria-label="location">📍</span>
							</div>
							<h3>OUR OFFICE LOCATION</h3>
							<p>The Interior Design Studio Company</p>
							<p>The Courtyard, Al Quoz 1, Colorado, USA</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ContactInfo
