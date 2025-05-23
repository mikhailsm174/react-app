import React, { useState, useEffect, useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { ImStarFull } from 'react-icons/im';
import "../assets/css/ClientReviews.css";

import reviewer1 from '../assets/images/reviewer1.png';
import reviewer2 from '../assets/images/reviewer2.png';
import reviewer3 from '../assets/images/reviewer3.png';
import reviewer4 from '../assets/images/reviewer4.png';
import reviewer5 from '../assets/images/reviewer5.png';
import reviewer6 from '../assets/images/reviewer6.png';
import reviewer7 from '../assets/images/reviewer7.png';
import reviewer8 from '../assets/images/reviewer8.png';
import reviewer9 from '../assets/images/reviewer9.png';
import reviewer10 from '../assets/images/reviewer10.png';

const reviews = [
	{
		id: 1,
		image: reviewer1,
		name: 'Bang Upin',
		text: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“'
	},

	{
		id: 2,
		image: reviewer2,
		name: 'Ibuk Sukijan',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, deserunt.'
	},

	{
		id: 3,
		image: reviewer3,
		name: 'Mpok Ina',
		text: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“'
	},

	{
		id: 4,
		image: reviewer4,
		name: 'Ibuk Sukijan',
		text: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, deserunt.“'
	},

	{
		id: 5,
		image: reviewer5,
		name: 'Bang Upin',
		text: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“'
	},

	{
		id: 6,
		image: reviewer6,
		name: 'Mpok Ina',
		text: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, deserunt.“'
	},

	{
		id: 7,
		image: reviewer7,
		name: 'Bang Upin',
		text: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“'
	},

	{
		id: 8,
		image: reviewer8,
		name: 'Ibuk Sukijan',
		text: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, deserunt.“'
	},

	{
		id: 9,
		image: reviewer9,
		name: 'Mpok Ina',
		text: '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, deserunt.“'
	},

	{
		id: 10,
		image: reviewer10,
		name: 'Bang Upin',
		text: '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“'
	},
];

function ClientReviews() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const containerRef = useRef();

	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [endX, setEndX] = useState(0);

	const visibleCards = () => {
		if (window.innerWidth <= 600) return 1;
		if (window.innerWidth <= 768) return 2;
		if (window.innerWidth <= 1200) return 3;
		return 4;
	};

	const totalCards = reviews.length;

	const handleNext = () => {
		const visible = visibleCards();
		if (currentIndex + visible < totalCards) {
			setCurrentIndex((prev) => prev + 1);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prev) => prev - 1);
		}
	};

	useEffect(() => {
		const handleResize = () => setCurrentIndex(0);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleTouchStart = (e) => {
		setIsDragging(true);
		setStartX(e.touches[0].clientX);
	};

	const handleTouchMove = (e) => {
		if (!isDragging) return;
		setEndX(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!isDragging) return;
		const delta = startX - endX;
		const swipeThreshold = 50;

		if (delta > swipeThreshold) {
			handleNext();
		} else if (delta < -swipeThreshold) {
			handlePrev();
		}

		setIsDragging(false);
		setStartX(0);
		setEndX(0);
	};

	return (
		<section className='w-full py-10'>
			<div className='section_conatiner'>
				<div className="carousel-wrapper">
					<div className="carousel-header">
						<h6 className="carousel-subtitle text-primary pb-5">TESTIMONIALS</h6>
						<h3 className="carousel-title text-3xl">Our Client Reviews</h3>
					</div>
					<div className="carousel-container">
						<button className="carousel-btn left" onClick={handlePrev}>
							<FaChevronLeft />
						</button>
						<div
							className="carousel-track-wrapper"
							onTouchStart={handleTouchStart}
							onTouchMove={handleTouchMove}
							onTouchEnd={handleTouchEnd}
						>
							<div
								className="carousel-track"
								style={{ transform: `translateX(-${currentIndex * (100 / visibleCards())}%)` }}
								ref={containerRef}
							>
								{reviews.map((review) => (
									<div className="carousel-card" key={review.id}>
										<div className="card-content flex flex-col items-center justify-center text-center bg-slate-200">
											<div className='bg-white p-2 rounded-full -mb-3 z-10'>
												<img src={review.image} alt="card" />
											</div>
											<div className='clint_info bg-white rounded-md'>
												<h4 className='text-xl font-bold pt-2'>{review.name}</h4>
												<p className="text">{review.text}</p>
												<span className="stars flex justify-center pb-3">
													<ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull />
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<button className="carousel-btn right" onClick={handleNext}>
							<FaChevronRight />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ClientReviews;
