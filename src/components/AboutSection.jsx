import React from 'react'
import "../assets/css/AboutSection.css";

import chair1 from '../assets/images/products/chair-1.png';
import chair2 from '../assets/images/products/chair-2.png';
import chair3 from '../assets/images/products/chair-3.png';
import chair4 from '../assets/images/products/chair-4.png';

import furniture from '../assets/images/furniture.png';

const categories = [
	{
		title: 'Comfortable & Stylish Chairs',
		desc: 'Our chairs are designed with ergonomics, style, and durability in mind, providing comfortable seating solutions for any space.',
		img: chair1
	},
	{
		title: 'Beds for Restful Sleep',
		desc: 'We provide a selection of beds that include options with storage. Available in king, queen, and more sizes, made from modern materials.',
		img: chair2
	},
	{
		title: 'Modern Sofas for Every Home',
		desc: 'Our sofas are designed to suit any living space, with options including space-saving models and modular designs.',
		img: chair3
	},
	{
		title: 'Lighting that Speaks Style',
		desc: 'Our lamps enhance ambiance and offer practical lighting solutions — stylish, energy-efficient, and suited for every room.',
		img: chair4
	}
];

function AboutSection() {
	return (
		<>
			<section className='w-full py-10'>
				<div className='section_conatiner'>
					<div className="about-container">
						<div className="about-hero">
							<h1>About Our Products</h1>
							<p>
								Learn more about the furniture we offer. Our range includes chairs, beds, sofas, and lamps,
								all crafted with quality and design in mind.
							</p>
						</div>
						<div className="category-section">
							{categories.map((item, index) => (
								<div key={index} className="category-card">
									<img src={item.img} alt={item.title} />
									<h2>{item.title}</h2>
									<p>{item.desc}</p>
								</div>
							))}
						</div>

						<div className='more_about_btn_section'>
							<button className='more_about_btn'>More About</button>
						</div>


						<div>
							<div className="story_section">
								<div className="section story-top">
									<div className="text-block">
										<h2 className='text-3xl mb-5'>Our Story</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores provident facilis dignissimos incidunt illum ab hic optio, voluptas iure impedit laboriosam, est reiciendis. Temporibus facere doloribus fuga voluptates obcaecati praesentium pariatur velit blanditiis neque repellat nesciunt quam sunt voluptas doloremque, dolorum dolores placeat saepe sint nihil, ducimus quae ratione possimus. Unde eius aliquam provident dolore voluptatem. Nesciunt minus,
										</p>
									</div>
									<div className="image-block">
										<img src={furniture} alt="Chair" className="chair-image" />
									</div>
								</div>

								<div className="section info-grid">
									<div className="info-box">
										<h3 className='text-2xl mb-3'>Our Mission</h3>
										<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores provident facilis dignissimos incidunt illum ab hic optio, voluptas iure impedit laboriosam, est reiciendis. Temporibus facere doloribus fuga voluptates obcaecati praesentium pariatur velit blanditiis neque repellat nesciunt quam sunt voluptas doloremque, dolorum dolores placeat saepe sint nihil, ducimus quae ratione possimus. Unde eius aliquam provident dolore voluptatem. Nesciunt minus,
										</p>
									</div>
									<div className="info-box">
										<h3 className='text-2xl mb-3'>Our Values</h3>
										<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores provident facilis dignissimos incidunt illum ab hic optio, voluptas iure impedit laboriosam, est reiciendis. Temporibus facere doloribus fuga voluptates obcaecati praesentium pariatur velit blanditiis neque repellat nesciunt quam sunt voluptas doloremque, dolorum dolores placeat saepe sint nihil, ducimus quae ratione possimus. Unde eius aliquam provident dolore voluptatem. Nesciunt minus,
										</p>
									</div>
									<div className="info-box">
										<h3 className='text-2xl mb-3'>Our Team</h3>
										<p>
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores provident facilis dignissimos incidunt illum ab hic optio, voluptas iure impedit laboriosam, est reiciendis. Temporibus facere doloribus fuga voluptates obcaecati praesentium pariatur velit blanditiis neque repellat nesciunt quam sunt voluptas doloremque, dolorum dolores placeat saepe sint nihil, ducimus quae ratione possimus. Unde eius aliquam provident dolore voluptatem. Nesciunt minus,
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	)
}

export default AboutSection
