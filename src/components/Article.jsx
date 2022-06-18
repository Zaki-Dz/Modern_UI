import React from 'react'
import styled from 'styled-components'

const Article = ({date, title, image}) => {
	return (
		<SArticle>
			<img src={image} />

			<Content>
				<div className="text">
					<p>{date}</p>

					<h3>{title}</h3>
				</div>

				<button>Read full article</button>
			</Content>
		</SArticle>
	)
}

export default Article

const SArticle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: var(--color-blog);
	border-radius: .5rem;
	overflow: hidden;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	flex: 1;
	gap: 2rem;
	padding: 1rem;

	.text{
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	button{
		background-color: transparent;
		border: none;
	}
`