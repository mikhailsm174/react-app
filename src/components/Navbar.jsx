import { Link } from "react-router-dom";
import '../assets/css/Navbar.css';

export default function Navbar() {
	return (
		<header className="bg-primary">
			<nav className="container flex justify-between py-6  mx-auto">
				<Link to="/" className="text-2xl">Logo</Link>
				<ul className="nav_ul">
					<li className="nav_ul_li">
						<Link to="/" className="nav_ul_li_link">Home</Link>
					</li>
					<li className="nav_ul_li">
						<Link to="/About" className="nav_ul_li_link">About</Link>
					</li>
					<li className="nav_ul_li">
						<Link to="/Shop" className="nav_ul_li_link">Shop</Link>
					</li>
					<li className="nav_ul_li">
						<Link to="/Contact" className="nav_ul_li_link">Contact</Link>
					</li>
				</ul>

				<div>
					<span>cart</span>
				</div>
			</nav>
		</header>
	);
}
