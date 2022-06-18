import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import Feature from "../components/Feature";

const Features = () => {
	const featuresData = [
		{
			title: "Improving end distrusts instantly",
			text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
		},
		{
			title: "Become the tended active",
			text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
		},
		{
			title: "Message or am nothing",
			text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
		},
		{
			title: "Really boy law county",
			text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
		},
	];

	return (
		<SFeatures>
			<Heading
				title="The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen."
				text="Request Early Access to Get Started"
				column
				align="start"
			/>

			<div className="foo">
				{featuresData.map((feature, i) => {
					return (
						<Feature
							key={i}
							title={feature.title}
							text={feature.text}
							gap={3}
						/>
					);
				})}
			</div>
		</SFeatures>
	);
};

export default Features;

const SFeatures = styled.div`
	padding: 2rem 6rem;
	display: flex;
	gap: 4rem;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	@media (max-width: 860px) {
		padding-inline: 2rem !important;
	}

	@media (max-width: 992px) {
		padding-inline: 4rem;
		flex-direction: column;
	}

	> div:first-child {
		flex: 1;
	}

	.foo {
		flex: 2;
		display: flex;
		flex-direction: column;
		gap: 2rem;

		h2 {
			flex: 1;
			font-size: 1.3rem;
		}
	}
`;
