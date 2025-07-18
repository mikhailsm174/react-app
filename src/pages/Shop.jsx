// import ShopAllProducts from "../components/ShopAllProducts";
// import ShopHeroSection from "../components/ShopHeroSection";

// export default function Shop() {
// 	return (
// 		<>
// 			<ShopHeroSection />
// 			<ShopAllProducts />
// 		</>
// 	);
// }


import { useState } from "react";
import ShopAllProducts from "../components/ShopAllProducts";
import ShopHeroSection from "../components/ShopHeroSection";
import "../assets/css/Shop.css"

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <ShopHeroSection />

      {selectedProduct && (
        <section className="products_details_container">
			<div className="container flex mx-auto product_details_section">
          <div className="product_details_img_section">
				<img className="product_details_img" src={selectedProduct.image} alt={selectedProduct.title} />
		  </div>
		  <div className="product_details_content">
		  	<h2 className="text-2xl">{selectedProduct.name}</h2>
			<p className="font-mono">{selectedProduct.price}</p>
			  <select className="color_select" name="color" id="color" required>
				<option value="" disabled selected>Select Color</option>
				<option value="red">Red</option>
				<option value="blue">Blue</option>
				<option value="green">Green</option>
				<option value="yellow">Yellow</option>
				<option value="black">Black</option>
				<option value="white">White</option>
				<option value="purple">Purple</option>
				<option value="orange">Orange</option>
				<option value="gray">Gray</option>
				<option value="brown">Brown</option>
				</select>
			<p className="font-serif">{selectedProduct.description}</p>
			<button className="order_btn">Order Now</button>

		  </div>
        </div>
		</section>
      )}

      <ShopAllProducts onProductClick={handleProductClick} />
    </>
  );
}
