import BestProducts from "../components/BestProducts";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import UseExperience from '../components/UseExperience'
import Materials from "../components/Materials";
import ClientReviews from "../components/ClientReviews";
export default function Home() {
	return (
		<>
			<Hero />
			<WhyChoose />
			<BestProducts />
			<UseExperience />
			<Materials />
			<ClientReviews />
		</>
	);
}
