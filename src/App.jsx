import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import about from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import contact from "./pages/contact";
import shop from "./pages/Shop";
import './app.css';

export default function App() {
	return (

			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" Component={Home} />
					<Route exact path="/about" Component={about} />
					<Route exact path="/contact" Component={contact} />
					<Route exact path="/shop" Component={shop} />
				</Routes>
			</Router>
	);
}
