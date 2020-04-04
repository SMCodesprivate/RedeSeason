import React from 'react';
import Particles from "react-particles-js";

import configs from "../../assets/config.js";
// import { Container } from './styles';

export default function ContainerAnimate() {
	return (
		<>
			<Particles
				params={configs}
				style={{
					width: "100%",
					height: "90vh",
					backgroundImage: "linear-gradient(to bottom, #7159c1, #6449bd)",
				}}
			/>
		</>
	);
}
