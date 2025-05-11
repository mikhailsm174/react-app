import React from 'react'
import { ImStarFull } from "react-icons/im";
import { FaPlusCircle, FaArrowRight } from "react-icons/fa";


function Chair() {
  return (
	<>
		<section className='w-full'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
				<div className='card bg-white pb-5 rounded-xl'>
					<div className='bg-slate-200 flex items-center justify-center'>
						<img className='card_image w-full h-44 object-contain p-1' src="./src/assets/images/products/chair-1.png" alt="card image" />
					</div>
					<div className='pt-3 px-5'>
						<div className='pb-5'>
							<p className='text-slate-400 pb-3'>Chair</p>
							<h4 className='text-xl'>Sakarias Armchair</h4>
							<span className='flex text-primary mt-1'>
								<ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
							</span>
						</div>

						<div className='flex justify-between items-center'>
							<span>$300</span>
							<span><FaPlusCircle className='text-2xl cursor-pointer'/></span>
						</div>
					</div>
				</div>

				<div className='card bg-white pb-5 rounded-xl'>
					<div className='bg-slate-200 flex items-center justify-center'>
						<img className='card_image w-full h-44 object-contain p-1' src="./src/assets/images/products/chair-2.png" alt="card image" />
					</div>
					<div className='pt-3 px-5'>
						<div className='pb-5'>
							<p className='text-slate-400 pb-3'>Chair</p>
							<h4 className='text-xl'>Baltsar Chair</h4>
							<span className='flex text-primary mt-1'>
								<ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
							</span>
						</div>

						<div className='flex justify-between items-center'>
							<span>$300</span>
							<span><FaPlusCircle className='text-2xl cursor-pointer'/></span>
						</div>
					</div>
				</div>

				<div className='card bg-white pb-5 rounded-xl'>
					<div className='bg-slate-200 flex items-center justify-center'>
						<img className='card_image w-full h-44 object-contain p-1' src="./src/assets/images/products/chair-3.png" alt="card image" />
					</div>
					<div className='pt-3 px-5'>
						<div className='pb-5'>
							<p className='text-slate-400 pb-3'>Chair</p>
							<h4 className='text-xl'>Anjay Chair</h4>
							<span className='flex text-primary mt-1'>
								<ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
							</span>
						</div>

						<div className='flex justify-between items-center'>
							<span>$300</span>
							<span><FaPlusCircle className='text-2xl cursor-pointer'/></span>
						</div>
					</div>
				</div>

				<div className='card bg-white pb-5 rounded-xl'>
					<div className='bg-slate-200 flex items-center justify-center'>
						<img className='card_image w-full h-44 object-contain p-1' src="./src/assets/images/products/chair-4.png" alt="card image" />
					</div>
					<div className='pt-3 px-5'>
						<div className='pb-5'>
							<p className='text-slate-400 pb-3'>Chair</p>
							<h4 className='text-xl'>Nyantuy Chair</h4>
							<span className='flex text-primary mt-1'>
								<ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
							</span>
						</div>

						<div className='flex justify-between items-center'>
							<span>$300</span>
							<span><FaPlusCircle className='text-2xl cursor-pointer'/></span>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full text-center mt-10 flex justify-center'>
				<button className='flex justify-center items-center text-primary'>View All <FaArrowRight className='ml-4' /></button>
			</div>
		</section>
	</>
  )
}

export default Chair
