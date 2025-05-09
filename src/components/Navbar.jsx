import { Link, NavLink } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import '../assets/css/Navbar.css';
import { useEffect, useState } from "react";
// import logo from '../assets/images/logo.png'; // যদি import করতে চাও

const NavItems = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About" },
    { path: "/Shop", label: "Shop" },
    { path: "/Contact", label: "Contact" },
];

const NavbarItems = () => {
    return (
        <ul className="nav_ul for_small_device absolute left-0 md:relative w-full flex flex-col md:flex-row md:space-x-8 gap-8">
            {
                NavItems.map((item, index) => (
                    <li key={index} className="nav_ul_li">
                        <NavLink to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-primary"
                                    : "hover:text-primary transition-colors duration-200"
                            }>
                            {item.label}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    );
}

export default function Navbar() {

	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
				} else {
					setIsScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }

    return (
        <header className={`fixed nav_header w-full top-0 z-50 px-6 ${
			isScrolled ? 'bg-white text-slate-950 shadow-md' : 'bg-transparent text-white'
		} transition-all duration-500 ease-in-out`}>
            <nav className="container flex justify-between py-3 mx-auto">
                <Link to="/" className="text-2xl">
                    <img className="site_logo for_small_device bg-white rounded-sm" src="./src/assets/images/logo.png" alt="logo" />
                    {/* <img className="site_logo" src={logo} alt="logo" /> */}
                </Link>
                <div className="flex flex-col gap-y-1 justify-center items-center md:hidden text-2xl">
                    <button className="for_small_device" onClick={toggleMenu}>
                        {
                            isOpen ? <IoMdClose className="text-4xl" /> : <IoMenu className="text-4xl" />
                        }
                    </button>
                </div>
                <div className="hidden md:flex">
                    <NavbarItems />
                </div>

                <div className="cart_section hidden md:flex justify-center items-center">
                    <span className="cursor-pointer relative">
                        <IoCartSharp className="text-2xl" />
                        <sup className="bg-primary text-white text-xs flex justify-center items-center h-5 w-5 rounded-full absolute -right-3 -top-2">0</sup>
                    </span>
                </div>
            </nav>

            {/* Mobile NavItems */}
            {isOpen && (
                <div className="md:hidden mt-4 bg-white">
                    <NavbarItems />
                </div>
            )}
        </header>
    );
}
