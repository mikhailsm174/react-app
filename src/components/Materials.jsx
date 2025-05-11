import { FaArrowRight } from "react-icons/fa";
import "../assets/css/Materials.css"
import React from 'react'

function Materials() {
  return (
	<>
		<section className="w-full py-10">
			<div className="section_conatiner materials_section_conatiner items-center gap-10">
				<div>
					<h6 className='text-primary'>MATERIALS</h6>
					<div className='py-5'>
						<h3 className='mb-3 text-3xl'>Very serious materials for making furniture</h3>
						<p>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
					</div>
					<button className='flex justify-center items-center text-primary'>More Info <FaArrowRight className='ml-4' /></button>
				</div>

				<div>
					<img src="./src/assets/images/material3.png" alt="" />
				</div>
			</div>
		</section>
	</>
  )
}

export default Materials
