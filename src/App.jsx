import { BrowserRouter, Routes, Route } from "react-router-dom";
import about from "./pages/About";
import Home from "./pages/Home";
import contact from "./pages/contact";
import shop from "./pages/Shop";
import Navbar from "./components/Navbar";

import './app.css';

export default function App() {
	return (

			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" Component={Home} />
					<Route exact path="/about" Component={about} />
					<Route exact path="/contact" Component={contact} />
					<Route exact path="/shop" Component={shop} />
				</Routes>
			</BrowserRouter>
	);
}
