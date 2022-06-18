import React from 'react'
import google from '../assets/google.png'
import shopify from '../assets/shopify.png'
import slack from '../assets/slack.png'
import atlassian from '../assets/atlassian.png'
import dropbox from '../assets/dropbox.png'
import styled from 'styled-components'

const Brand = () => {
	return (
		<SBrand>
			<img src={google} />

			<img src={shopify} />

			<img src={slack} />

			<img src={atlassian} />

			<img src={dropbox} />
		</SBrand>
	)
}

export default Brand

const SBrand = styled.div`
	padding: 2rem 6rem;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	img{
		max-width: 100px;
	}
`