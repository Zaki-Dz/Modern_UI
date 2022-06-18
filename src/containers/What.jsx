import React from "react";
import styled from "styled-components";
import Feature from "../components/Feature";
import Heading from "../components/Heading";

const What = () => {
	return (
		<SWhat className="gpt3__whatgpt3">
			<Feature
				title="What is GPT-3"
				text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa blanditiis adipisci dolores rem doloribus, dolorum sapiente veniam nam reiciendis necessitatibus quae voluptatum deleniti similique minima nihil, sunt! Ex, fugiat, natus."
				gap={5}
			/>

			<Heading
				title="The possibilities are beyond your imagination"
				text="Explore The Library"
				align="center"
			/>

			<div className="features">
				<Feature
					title="What is GPT-3"
					text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa blanditiis adipisci dolores rem doloribus."
				/>

				<Feature
					title="What is GPT-3"
					text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa blanditiis adipisci dolores rem doloribus."
				/>

				<Feature
					title="What is GPT-3"
					text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa blanditiis adipisci dolores rem doloribus."
				/>
			</div>
		</SWhat>
	);
};

export default What;

const SWhat = styled.div`
	padding: 2rem 6rem;
	margin: 2rem 6rem;
	display: flex;
	flex-direction: column;
	gap: 4rem;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 2rem;
	}

	@media (max-width: 860px) {
		padding-inline: 2rem !important;
		margin-inline: 2rem !important;
	}

	@media (max-width: 992px) {
		padding-inline: 4rem;
		margin-inline: 4rem;
	}

	.features {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;

		@media (max-width: 768px) {
			flex-direction: column;
		}

		& > div {
			flex-direction: column;
			gap: 2rem;
			min-width: 200px;
			flex: 1;
		}
	}
`;
