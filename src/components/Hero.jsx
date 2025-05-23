import React from 'react'
import { FaSearch } from "react-icons/fa";
import "../assets/css/Hero.css"

const hero = () => {
	return (
		<>
			<section className='heroSection text-center'>
				<div className='md:pt-56 pt-28 text-white md:w-2/3 w-80 m-auto px-5'>
					<div className='hero_search_section pb-10'>
						<div className='input_wrapper'>
							<input className='hero_input text-primary rounded-3xl' type="text" placeholder='Search furniture' />
							<div className='search_icon_section bg-primary'><FaSearch /></div>
						</div>
					</div>
					<h2 className='text-4xl lg:text-6xl'>Make your interior moreminimalistic & modern</h2>
					<p className='pt-8 text-xl'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
				</div>
				<div className='herro_bottom_shadow'></div>
			</section>
		</>
	)
}

export default hero
