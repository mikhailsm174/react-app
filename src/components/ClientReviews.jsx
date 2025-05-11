import React from 'react'
import { ImStarFull } from "react-icons/im";

function ClientReviews() {
  return (
	<>
		<section className='w-full py-10'>
			<div className='section_conatiner'>
				<div className='clientreviews_section_conatiner'>
					<div className='clientreviews_card'>
						<div>
							<img src="" alt="card image" />
							<div>
								<h3 className='text-xl'>Bang Upin</h3>
								<p className='text-slate-400'>Pedagang Asongan</p>
							</div>
							<div>
								<p>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
								<span className='flex text-primary mt-1'>
									<ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
  )
}

export default ClientReviews
