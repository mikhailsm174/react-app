
import React, { useState } from "react";
import "../assets/css/ShopAllProducts.css";
import { FaSearch } from "react-icons/fa";

// Import all product images
import beds1 from "../assets/images/products/beds-1.png";
import beds2 from "../assets/images/products/beds-2.png";
import beds3 from "../assets/images/products/beds-3.png";
import beds4 from "../assets/images/products/beds-4.png";
import chair1 from "../assets/images/products/chair-1.png";
import chair2 from "../assets/images/products/chair-2.png";
import chair3 from "../assets/images/products/chair-3.png";
import chair4 from "../assets/images/products/chair-4.png";
import lamp1 from "../assets/images/products/lamp-1.png";
import lamp2 from "../assets/images/products/lamp-2.png";
import lamp3 from "../assets/images/products/lamp-3.png";
import lamp4 from "../assets/images/products/lamp-4.png";
import sofa1 from "../assets/images/products/sofa-1.png";
import sofa2 from "../assets/images/products/sofa-2.png";
import sofa3 from "../assets/images/products/sofa-3.png";
import sofa4 from "../assets/images/products/sofa-4.png";

const products = [
	{ id: 1, name: "Headphones", price: "$99.00", image: beds1 },
	{ id: 2, name: "Wireless Earbuds", price: "$199.00", image: beds2 },
	{ id: 3, name: "Speaker", price: "$79.00", image: beds3 },
	{ id: 4, name: "Headphone", price: "$299.00", image: beds4 },
	{ id: 5, name: "Smartwatch", price: "$149.00", image: chair1 },
	{ id: 6, name: "Smartphone", price: "$299.00", image: chair2 },
	{ id: 7, name: "Smartphone", price: "$299.00", image: chair3 },
	{ id: 8, name: "Camera", price: "$899.00", image: chair4 },
	{ id: 9, name: "Camera", price: "$899.00", image: lamp1 },
	{ id: 10, name: "Camera", price: "$899.00", image: lamp2 },
	{ id: 11, name: "Camera", price: "$899.00", image: lamp3 },
	{ id: 12, name: "Camera", price: "$899.00", image: lamp4 },
	{ id: 13, name: "Camera", price: "$899.00", image: sofa1 },
	{ id: 14, name: "Camera", price: "$899.00", image: sofa2 },
	{ id: 15, name: "Camera", price: "$899.00", image: sofa3 },
	{ id: 16, name: "Camera", price: "$899.00", image: sofa4 },
	{ id: 17, name: "Headphones", price: "$99.00", image: beds1 },
	{ id: 18, name: "Wireless Earbuds", price: "$199.00", image: beds2 },
	{ id: 19, name: "Speaker", price: "$79.00", image: beds3 },
	{ id: 20, name: "Headphone", price: "$299.00", image: beds4 },
	{ id: 5, name: "Smartwatch", price: "$149.00", image: chair1 },
	{ id: 10, name: "Camera", price: "$899.00", image: lamp2 },
	{ id: 8, name: "Camera", price: "$899.00", image: chair4 },
	{ id: 14, name: "Camera", price: "$899.00", image: sofa2 },
	{ id: 12, name: "Camera", price: "$899.00", image: lamp4 },
	{ id: 16, name: "Camera", price: "$899.00", image: sofa4 },
	{ id: 4, name: "Headphone", price: "$299.00", image: beds4 },
	{ id: 10, name: "Camera", price: "$899.00", image: lamp2 },
	{ id: 8, name: "Camera", price: "$899.00", image: chair4 },
	{ id: 15, name: "Camera", price: "$899.00", image: sofa3 },
	{ id: 13, name: "Camera", price: "$899.00", image: sofa1 },
];

const Shop = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 12;

	// Pagination logic
	const totalPages = Math.ceil(products.length / itemsPerPage);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
	const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
	const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

	return (
		<section className="shop_all_products w-full py-10">
			<div className="section_conatiner">
				<div className="shop-container">
					<main className="products-area">
						<div className="sort-bar">
							<div className="search-wrapper">
								<input type="text" placeholder="Search products..." className="search-box" />
								<span className="search-icon"><FaSearch /></span>
							</div>
						</div>

						<div className="products-grid">
							{currentItems.map((item) => (
								<div key={item.id} className="product-card">
									<img src={item.image} alt={item.name} />
									<h3>{item.name}</h3>
									<p>{item.price}</p>
									<button>Add to Cart</button>
								</div>
							))}
						</div>

						{/* Pagination Controls */}
						<div className="pagination">
							<button onClick={handlePrev} disabled={currentPage === 1}>
								Previous
							</button>
							{[...Array(totalPages)].map((_, index) => (
								<button
									key={index + 1}
									onClick={() => handlePageChange(index + 1)}
									className={currentPage === index + 1 ? "active" : ""}
								>
									{index + 1}
								</button>
							))}
							<button onClick={handleNext} disabled={currentPage === totalPages}>
								Next
							</button>
						</div>
					</main>
				</div>
			</div>
		</section>
	);
};

export default Shop;
