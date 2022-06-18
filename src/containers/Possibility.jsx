import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import img from "../assets/possibility.png";

const Possibility = () => {
	return (
		<SPossibility>
			<Image>
				<img src={img} />
			</Image>

			<Heading
				title="The possibilities are beyond your imagination."
				text="Request Early Access to Get Started"
				column
				align="start"
			>
				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not
					thoughts all exercise blessing. Indulgence way everything joy
					alteration boisterous the attachment. Party we years to order allow
					asked of.
				</p>
			</Heading>
		</SPossibility>
	);
};

export default Possibility;

const SPossibility = styled.div`
	padding: 2rem 6rem;
	display: flex;
	gap: 4rem;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	@media (max-width: 860px) {
		padding-inline: 2rem !important;
	}

	@media (max-width: 992px) {
		padding-inline: 4rem;
		gap: 2rem;
	}

	p:first-of-type {
		color: var(--color-text);
		font-weight: normal;
	}
`;

const Image = styled.div`
	max-width: 400px;
`;
