import React from 'react'
import styled from 'styled-components'

const CTA = () => {
	return (
		<SCTA>
			<div className="text">
				<p>Request Early Access to Get Started</p>

				<h2>Register today & start exploring the endless possibilities.</h2>
			</div>

			<button>Get Started</button>
		</SCTA>
	)
}

export default CTA

const SCTA = styled.div`
	padding: 2rem 6rem;
	margin: 2rem 6rem;
	border-radius: .5rem;
	display: flex;
	gap: 4rem;
	align-items: center;
	justify-content: space-between;
	background-image: var(--gradient-bar);
	color: black;

	@media (max-width: 768px) {
		flex-direction: column;
		padding-inline: 2rem !important;
		text-align: center;
	}

	@media (max-width: 860px) {
		padding-inline: 2rem !important;
		margin: 2rem !important;
	}

	@media (max-width: 992px) {
		padding-inline: 4rem;
		margin: 4rem;
		gap: 2rem;
	}

	button{
		background-color: black;
		color: white;
		padding: 1rem 2rem;
		border: none;
		border-radius: 2rem;
	}
`