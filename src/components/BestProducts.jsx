import { FaArrowRight } from "react-icons/fa";
import React, { useState } from 'react';
import "../assets/css/BestProducts.css";
import Chair from "./Chair";
import Beds from "./Beds";
import Sofa from "./Sofa";
import Lamp from "./Lamp";

const BestProductsItems = [
	{ key: "chair", label: "Chair" },
	{ key: "beds", label: "Beds" },
	{ key: "sofa", label: "Sofa" },
	{ key: "lamp", label: "Lamp" },
];

const BestProductsList = ({ activeTab, setActiveTab }) => (
	<ul className='best_products_list mb-6'>
		{BestProductsItems.map((item) => (
			<li key={item.key}>
				<button
					onClick={() => setActiveTab(item.key)}
					className={`lg:px-3 px-2 py-1 rounded-full transition ${activeTab === item.key ? 'bg-white' : 'hover:bg-white'
						}`}>
					{item.label}
				</button>
			</li>
		))}
	</ul>
);

function BestProducts() {
	const [activeTab, setActiveTab] = useState('chair');
	const renderActiveComponent = () => {
		switch (activeTab) {
			case 'chair':
				return <Chair />;
			case 'beds':
				return <Beds />;
			case 'sofa':
				return <Sofa />;
			case 'lamp':
				return <Lamp />;
			default:
				return null;
		}
	};

	return (
		<section className='bg-slate-200 py-10'>
			<div className='section_conatiner'>
				<div className='w-full text-center'>
					<h2 className='text-3xl lg:text-4xl pb-6'>Best Selling Product</h2>
					<BestProductsList activeTab={activeTab} setActiveTab={setActiveTab} />
				</div>
			</div>
			<div className='section_conatiner flex justify-center'>
				{renderActiveComponent()}
			</div>

			<div className='w-full text-center mt-10 flex justify-center'>
				<button className='flex justify-center items-center text-primary'>View All <FaArrowRight className='ml-4' /></button>
			</div>
		</section>
	);
}

export default BestProducts;
