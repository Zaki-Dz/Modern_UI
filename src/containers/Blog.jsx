import React from 'react'
import styled from 'styled-components'
import Heading from '../components/Heading'
import Article from '../components/Article'

import imageOne from '../assets/blog01.png'
import imageTwo from '../assets/blog02.png'
import imageThree from '../assets/blog03.png'
import imageFour from '../assets/blog04.png'
import imageFive from '../assets/blog05.png'

const Blog = () => {
	return (
		<SBlog>
			<Heading
				title={<>A lot is happening,<br /> we are blogging about it.</>}
			/>

			<div className="articles">
				<div className='new'>
					<Article
						image={imageOne}
						date='Sep 26, 2021'
						title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
					/>
				</div>

				<div className="old">
					<Article
						image={imageTwo}
						date='Sep 26, 2021'
						title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
					/>

					<Article
						image={imageThree}
						date='Sep 26, 2021'
						title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
					/>

					<Article
						image={imageFour}
						date='Sep 26, 2021'
						title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
					/>

					<Article
						image={imageFive}
						date='Sep 26, 2021'
						title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
					/>
				</div>
			</div>
		</SBlog>
	)
}

export default Blog

const SBlog = styled.div`
	padding: 2rem 6rem;
	display: flex;
	gap: 4rem;
	flex-direction: column;

	@media (max-width: 860px) {
		padding-inline: 2rem !important;
	}

	@media (max-width: 992px) {
		padding-inline: 4rem;
		gap: 2rem;
	}

	.articles{
		display: flex;
		gap: 1rem;

		@media (max-width: 768px) {
			flex-direction: column;
		}

		@media (max-width: 860px) {
			flex-direction: column;
		}

		.new{
			min-height: 100% !important;
			flex: 1;

			>div{
				height: 100%;
			}
		}

		.old{
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
			flex: 2;

			@media (max-width: 768px) {
				grid-template-columns: 1fr;
			}

			>div{
				flex: 1;
			}
		}
	}
`