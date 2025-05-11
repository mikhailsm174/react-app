import React from 'react'
import "../assets/css/UseExperience.css"
import { FaArrowRight } from "react-icons/fa";

function UseExperience() {
  return (
	<>
		<section className='w-full py-10'>
			<div className='experience_section_conatiner section_conatiner items-center gap-10'>
				<div>
					<img src="./src/assets/images/experiences.png" alt="" />
				</div>

				<div>
					<h6 className='text-primary'>EXPERIENCE</h6>
					<div className='py-5'>
						<h3 className='mb-3 text-3xl'>we provide you the best experience</h3>
						<p>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
					</div>
					<button className='flex justify-center items-center text-primary'>More Info <FaArrowRight className='ml-4' /></button>
				</div>
			</div>
		</section>
	</>
  )
}

export default UseExperience
