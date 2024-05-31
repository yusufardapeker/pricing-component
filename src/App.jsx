import { useState, useRef } from "react";

import "./styles/reset.css";
import "./styles/style.scss";

import bgTopSVG from "./images/bg-top.svg";
import PricingCard from "./components/PricingCard";

function App() {
	const [planType, setPlanType] = useState("annual");
	const toggleElement = useRef();

	const toggleChange = (e) => {
		e.target.classList.toggle("toggled");

		if (toggleElement.current.classList.value.includes("toggled")) {
			setPlanType("monthly");
		} else {
			setPlanType("annual");
		}
	};

	return (
		<>
			<img src={bgTopSVG} className="bg-top-svg" />

			<body>
				<div className="container">
					<header>
						<h1>Our Pricing</h1>
						<div className="toggle-wrapper">
							<span>Annualy</span>
							<span className="toggle-btn" onClick={toggleChange} ref={toggleElement}></span>
							<span>Monthly</span>
						</div>
					</header>

					<main>
						<PricingCard planType={planType} />
					</main>
				</div>
			</body>
		</>
	);
}

export default App;
