import React from 'react'
import styled from 'styled-components'

const Feature = ({title, text, gap}) => {
	return (
		<SFeature gap={gap}>
			<h2>{title}</h2>

			<p>{text}</p>
		</SFeature>
	)
}

export default Feature

const SFeature = styled.div`
	position: relative;
	padding-block: 1rem;
	display: flex;
	gap: ${props => props.gap ? props.gap : '0'}rem;

	&::before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 5px;
		width: 50px;
		background-image: var(--gradient-bar);
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		text-align: center;

		&::before{
			left: 50%;
			transform: translateX(-50%);
		}
	}

	h1{
		flex: 1;

		@media (max-width: 860px) {
			font-size: 1.3rem !important;
		}

		@media (max-width: 992px) {
			font-size: 1.5rem;
		}
	}

	p{
		flex: 2;
		color: var(--color-text);
	}
`