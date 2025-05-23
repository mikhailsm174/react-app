
import React from 'react'
import "../assets/css/AboutHeroSection.css"

import furnitureImg from '../assets/images/furniture2.png';

function AboutHeroSection() {
	return (
		<section className='hero_section'>
			<div className='section_conatiner'>
				<div className='about-hero-content'>
					<div className='about-text'>
						<h2>About Us</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam harum veritatis necessitatibus eos ratione, obcaecati odio fugiat animi amet non at, iste et ipsa consectetur. Cumque sapiente recusandae voluptatum assumenda quaerat itaque asperiores eaque accusamus dolores iusto provident natus possimus atque tempora quasi vero, voluptates quidem aperiam nostrum exercitationem reiciendis!
						</p>
						<button className='about_section_btn'>Learn More!</button>
					</div>
					<div className='about-image'>
						<img src={furnitureImg} alt="Furniture" />
					</div>
				</div>
			</div>

		</section>
	)
}

export default AboutHeroSection
