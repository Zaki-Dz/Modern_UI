import React from 'react'
import styled from 'styled-components'
import people from '../assets/people.png'
import ai from '../assets/ai.png'

const Header = () => {
	return (
		<SHeader>
			<Content>
				<h1 className='gradient__text'>
					Let's Build Something amazing with GPT-3 OpenAI
				</h1>

				<p>
					Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
				</p>


				<form>
					<input type="text" placeholder='Your Email Address' />

					<button>Get Started</button>
				</form>

				<People>
					<img src={people} />

					<p>1,600 people requested access a visit in last 24 hours</p>
				</People>
			</Content>

			<Image>
				<img src={ai} />
			</Image>
		</SHeader>
	)
}

export default Header

const SHeader = styled.div`
	display: flex;
	padding: 2rem 6rem;
	gap: 2rem;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 4rem;
	}

	@media (max-width: 860px) {
		padding-inline: 2rem !important;
	}

	@media (max-width: 992px) {
		padding-inline: 4rem;
	}
`

const Content = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (max-width: 768px) {
		order: 2;
		text-align: center;
		align-items: center;
	}

	p{
		color: var(--color-text);
	}

	form{
		display: flex;
		width: 100%;
		border-radius: .5rem;
		overflow: hidden;

		input{
			padding: 1rem;
			flex: 1;
			background-color: var(--color-footer);
			border: none;
		}

		button{
			background-color: #ff4820;
			color: white;
			padding-inline: 1rem;
			border: none;
		}
	}
`

const People = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	img{
		max-width: 150px;
	}

	p{
		font-size: 14px;
		color: white;
	}
`

const Image = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;

	img{
		max-width: 400px;
	}
`