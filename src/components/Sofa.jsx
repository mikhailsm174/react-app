import React from 'react'
import { ImStarFull } from "react-icons/im";
import { FaPlusCircle } from "react-icons/fa";
import Sofa1 from "../assets/images/products/sofa-1.png";
import Sofa2 from "../assets/images/products/sofa-2.png";
import Sofa3 from "../assets/images/products/sofa-3.png";
import Sofa4 from "../assets/images/products/sofa-4.png";


function Sofa() {
	return (
		<>
			<section className='w-full'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
					<div className='card bg-white pb-5 rounded-xl'>
						<div className='bg-slate-200 flex items-center justify-center'>
							<img className='card_image w-full h-44 object-contain p-1' src={Sofa1} alt="" />
						</div>
						<div className='pt-3 px-5'>
							<div className='pb-5'>
								<p className='text-slate-400 pb-3'>Sofa</p>
								<h4 className='text-xl'>Victoria Chesterfield</h4>
								<span className='flex text-primary mt-1'>
									<ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
								</span>
							</div>

							<div className='flex justify-between items-center'>
								<span>$550</span>
								<span><FaPlusCircle className='text-2xl cursor-pointer' /></span>
							</div>
						</div>
					</div>

					<div className='card bg-white pb-5 rounded-xl'>
						<div className='bg-slate-200 flex items-center justify-center'>
							<img className='card_image w-full h-44 object-contain p-1' src={Sofa2} alt="" />
						</div>
						<div className='pt-3 px-5'>
							<div className='pb-5'>
								<p className='text-slate-400 pb-3'>Sofa</p>
								<h4 className='text-xl'>Crimson Duo</h4>
								<span className='flex text-primary mt-1'>
									<ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
								</span>
							</div>

							<div className='flex justify-between items-center'>
								<span>$550</span>
								<span><FaPlusCircle className='text-2xl cursor-pointer' /></span>
							</div>
						</div>
					</div>

					<div className='card bg-white pb-5 rounded-xl'>
						<div className='bg-slate-200 flex items-center justify-center'>
							<img className='card_image w-full h-44 object-contain p-1' src={Sofa3} alt="" />
						</div>
						<div className='pt-3 px-5'>
							<div className='pb-5'>
								<p className='text-slate-400 pb-3'>Sofa</p>
								<h4 className='text-xl'>Nordic Bloom</h4>
								<span className='flex text-primary mt-1'>
									<ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
								</span>
							</div>

							<div className='flex justify-between items-center'>
								<span>$550</span>
								<span><FaPlusCircle className='text-2xl cursor-pointer' /></span>
							</div>
						</div>
					</div>

					<div className='card bg-white pb-5 rounded-xl'>
						<div className='bg-slate-200 flex items-center justify-center'>
							<img className='card_image w-full h-44 object-contain p-1' src={Sofa4} alt="" />
						</div>
						<div className='pt-3 px-5'>
							<div className='pb-5'>
								<p className='text-slate-400 pb-3'>Sofa</p>
								<h4 className='text-xl'>Royal Luxe</h4>
								<span className='flex text-primary mt-1'>
									<ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
								</span>
							</div>

							<div className='flex justify-between items-center'>
								<span>$550</span>
								<span><FaPlusCircle className='text-2xl cursor-pointer' /></span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Sofa
