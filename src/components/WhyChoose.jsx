import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "../assets/css/whychoose.css"

function WhyChoose() {
  return (
	<>
		<section className='section_conatiner'>
			<div className='flex flex-col sm:flex-row py-10'>
				<div className='flex-1 py-5'>
					<h1 className=' text-3xl lg:text-4xl'> Why <span className='lg:mt-3 block'>Choosing Us</span> </h1>
				</div>

				<div className='flex-1 py-5 px-1'>
					<h3 className='text-2xl'>Luxury facilities</h3>
					<p className='py-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
					<button className='text-primary flex items-center justify-center gap-3'>More Info <span> <FaArrowRight /> </span> </button>
				</div>

				<div className='flex-1 py-5 px-1'>
					<h3 className='text-2xl'>Affordable Price</h3>
					<p className='py-2'>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
					<button className='text-primary flex items-center justify-center gap-3'>More Info <span> <FaArrowRight /> </span> </button>
				</div>

				<div className='flex-1 py-5 px-1'>
					<h3 className='text-2xl'>Many Choices</h3>
					<p className='py-2'>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
					<button className='text-primary flex items-center justify-center gap-3'>More Info <span> <FaArrowRight /> </span> </button>
				</div>
			</div>
		</section>
	</>
  )
}

export default WhyChoose
