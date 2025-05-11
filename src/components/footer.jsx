import { Link } from "react-router-dom";

export default function footer() {
	return(
		<>
			<section className="w-100 py-10 bg-slate-200">
				<div className="section_conatiner">
					<div className="footer_section_conatiner grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 text-gray-800">
						<div>
							<h3 className="font-bold text-2xl">Panto</h3>
							<p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
						</div>

						<div className="flex flex-col gap-y-3">
							<h6 className="text-primary text-xl font-bold">Services</h6>
							<span>Email Marketing</span>
							<span>Campaigns</span>
							<span>Branding</span>
						</div>

						<div className="flex flex-col gap-y-3">
							<h6 className="text-primary text-xl font-bold">Furniture</h6>
							<span>Beds</span>
							<span>Chair</span>
							<span>All</span>
						</div>

						<div className="flex flex-col gap-y-3">
							<h6 className="text-primary text-xl font-bold">Follow Us</h6>
							<a href="https://www.facebook.com/Brokendream.net" target="_blank">Facebook</a>
							<a href="https://x.com/selim_sh2027790" target="_blank">Twitter</a>
							<a href="https://www.linkedin.com/in/selim-reza-718712218/" target="_blank">LinkedIn</a>
						</div>
					</div>

				</div>
				<div className="section_conatiner flex justify-between">
					<div className="text-xs text-slate-500">
						<p>Copyright © 2025</p>
					</div>
					<div className="flex gap-7 text-xs text-slate-500">
						<p>Terms & Conditions</p>
						<p>Privacy Policy</p>
					</div>
				</div>
			</section>
		</>
	)
}
