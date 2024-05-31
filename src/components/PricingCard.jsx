import React from "react";

const cardContents = [
	{
		title: "Basic",
		amount: {
			monthly: 19.99,
			annual: 199.99,
		},
		storage: "500 GB Storage",
		usersAllowed: "2 Users Allowed",
		sendLimit: "Send Up to 3 GB",
	},

	{
		title: "Professional",
		amount: {
			monthly: 24.99,
			annual: 249.99,
		},
		storage: "1 TB Storage",
		usersAllowed: "5 Users Allowed",
		sendLimit: "Send Up to 10 GB",
	},

	{
		title: "Master",
		amount: {
			monthly: 39.99,
			annual: 399.99,
		},
		storage: "2 TB Storage",
		usersAllowed: "10 Users Allowed",
		sendLimit: "Send Up to 20 GB",
	},
];

function PricingCard({ planType }) {
	return (
		<>
			{cardContents.map((content, index) => {
				return (
					<div className={index === 1 ? "card suggested" : "card"} key={index}>
						<div className="card-head">
							<h2 className="card-title">{content.title}</h2>
							<span className="card-amount">{content.amount[planType]}</span>
						</div>
						<div className="card-body">
							<ul className="card-features">
								<li className="card-features-item">{content.storage}</li>
								<li className="card-features-item">{content.usersAllowed}</li>
								<li className="card-features-item">{content.sendLimit}</li>
							</ul>
						</div>
						<button className="detail-btn">Learn More</button>
					</div>
				);
			})}
		</>
	);
}

export default PricingCard;
