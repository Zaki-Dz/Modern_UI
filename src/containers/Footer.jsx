import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading";
import logo from "../assets/logo.svg";

const Footer = () => {
	return (
		<SFooter>
			<Heading title="Do you want to step in to the future before others" />

			<button>Request Early Access</button>

			<Content>
				<Logo>
					<img src={logo} />

					<p>
						Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
					</p>
				</Logo>

				<LinksContainer>
					<Links>
						<h3>Links</h3>

						<li>Overons</li>

						<li>Social Media</li>

						<li>Counters</li>

						<li>Contact</li>
					</Links>

					<Links>
						<h3>Company</h3>

						<li>Terms & Conditions</li>

						<li>Privacy Policy</li>

						<li>Contact</li>
					</Links>

					<Links>
						<h3>Get in touch</h3>

						<li>Crechterwoord K12 182 DK Alknjkcb</li>

						<li>085-132567</li>

						<li>info@payme.net</li>
					</Links>
				</LinksContainer>
			</Content>

			<p>@2021 GPT-3. All rights reserved.</p>
		</SFooter>
	);
};

export default Footer;

const SFooter = styled.footer`
	padding: 2rem 6rem;
	display: flex;
	gap: 5rem;
	flex-direction: column;
	align-items: center;
	background-color: var(--color-footer);

	@media (max-width: 768px) {
		gap: 4rem !important;
	}

	@media (max-width: 860px) {
		padding-inline: 2rem !important;
	}

	@media (max-width: 992px) {
		padding-inline: 4rem;
		gap: 2rem;
	}

	button {
		padding: 1rem 2rem;
		background-color: transparent;
		border: 1px solid white;
	}
`;

const Content = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 4rem;
	}
`;

const Logo = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (max-width: 768px) {
		align-items: center;
	}

	img {
		max-width: 150px;
	}
`;

const LinksContainer = styled.div`
	flex: 2;
	display: flex;
	gap: 2rem;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const Links = styled.ul`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h3 {
		@media (max-width: 600px) {
			text-decoration: underline;
		}
	}
`;
