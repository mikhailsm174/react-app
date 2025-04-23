import { Link, NavLink } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import '../assets/css/Navbar.css';

const NavItems = [
	{ path: "/", label: "Home" },
	{ path: "/About", label: "About" },
	{ path: "/Shop", label: "Shop" },
	{ path: "/Contact", label: "Contact" },
];

const NavbarItems = () => {
	return (
		<ul className="nav_ul flex flex-col md:flex-row md:space-x-8 gap-8">
			{
				NavItems.map((item, index) =>(
					<li key={index} className="nav_ul_li">
						<NavLink to={item.path}
							className={({isActive})=>
								isActive
								? "text-primary"
								: "hover:text-primary transition-colors duration-200"
							}>
						{item.label}</NavLink>
					</li>
				))
			}
		</ul>
	);
}

export default function Navbar() {
	return (
		<header className="nav_header px-6">
			<nav className="container flex justify-between py-6  mx-auto">
				<Link to="/" className="text-2xl">
					<img className="site_logo" src="./src/assets/images/logo.png" alt="logo" />
				</Link>

				<div className="hidden md:block">
					<NavbarItems/>
				</div>

				<div className="cart_section hidden md:flex justify-center items-center">
					<span className="cursor-pointer relative">
						<IoCartSharp className="text-2xl"/>
						<sup className="bg-primary text-white text-xs flex justify-center items-center h-5 w-5 rounded-full absolute -right-3 -top-2">0</sup>
					</span>
				</div>
			</nav>
		</header>
	);
}
