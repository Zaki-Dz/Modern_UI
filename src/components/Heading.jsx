import React from "react";
import styled from "styled-components";

const Heading = ({ title, text, column, align, children }) => {
	return (
		<SHeading column={column} align={align}>
			<h1 className="gradient__text">{title}</h1>
			{children}
			{text && <p className="gradient__text">{text}</p>}
		</SHeading>
	);
};

export default Heading;

const SHeading = styled.div`
	display: flex;
	gap: 2rem;
	align-items: ${(props) => (props.align ? props.align : "")};
	flex-direction: ${(props) => (props.column ? "column" : "row")};

	@media (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		align-items: center;
	}

	h1 {
		flex: 1;
	}

	p {
		flex: 1;
		display: flex;
		justify-content: end;
		font-weight: bold;
	}
`;
