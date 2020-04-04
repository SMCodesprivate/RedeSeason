import React from 'react';
import { FiFolder } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, TitleError, ReturnButton, ConfigsResetLink } from "../styles";

import ContainerAnimate from '../../components/ContainerAnimate';

export default function NotFound() {
	return (
		<>
			<ContainerAnimate />
			<Container>
				<TitleError><strong>Erro: </strong>essa página não existe</TitleError>
					<FiFolder size={256} color="#e94040" />
					<ConfigsResetLink><Link to="/"><ReturnButton>Voltar para página inicial</ReturnButton></Link></ConfigsResetLink>
			</Container>
		</>
	);
}