import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const Menu = () => {
	return (
		<>
			<li>
				<a href="#">Home</a>
			</li>

			<li>
				<a href="#">What is GPT3?</a>
			</li>

			<li>
				<a href="#">Open AI</a>
			</li>

			<li>
				<a href="#">Case Studies</a>
			</li>

			<li>
				<a href="#">Library</a>
			</li>
		</>
	)
}

const Navbar = () => {
	const [isToggled, setIsToggled] = useState(false)

	const handleNavMenu = () => {
		setIsToggled(prev => !prev)
	}

	return (
		<Nav>
			<Logo>
				<img src={logo} />
			</Logo>

			<Links>
				<Menu />
			</Links>

			<Sign>
				<span>Sign in</span>

				<button>Sign up</button>
			</Sign>

			<NavMenu>
				{isToggled
					? <RiCloseLine onClick={handleNavMenu} />
					: <RiMenu3Line onClick={handleNavMenu} />
				}

				{isToggled && (
					<ul className='scale-up-center'>
						<Menu />
					</ul>
				)}
			</NavMenu>
		</Nav>
	)
}

export default Navbar

const Nav = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	padding: 2rem 6rem;
	color: white;
	font-weight: 500;
	font-size: 18px;

	@media (max-width: 860px) {
		font-size: 14px !important;
		padding-inline: 2rem !important;
	}

	@media (max-width: 992px) {
		font-size: 16px;
		padding-inline: 4rem;
	}
`

const Logo = styled.div`
	width: 62px;
	display: flex;
`

const Links = styled.ul`
	display: flex;
	flex: 1;
	align-items: center;
	gap: 1rem;
	text-transform: uppercase;

	@media (max-width: 768px) {
		display: none;
	}
`

const Sign = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	@media (max-width: 768px) {
		flex: 1;
		justify-content: end;
	}

	button{
		background-color: #ff4820;
		border-radius: .5rem;
		padding: .5rem 1rem;
		border: none;
	}
`

const NavMenu = styled.div`
	position: relative;
	display: none;

	@media (max-width: 768px) {
		display: flex;
	}

	svg{
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}

	ul{
		position: absolute;
		min-width: 200px;
		top: 3rem;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: end;
		background-color: var(--color-footer);
		padding: 2rem;
		border-radius: .5rem;
		box-shadow: 0 0 1rem black;

		li{
			padding-block: .5rem;
		}
	}
`