import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, TitleError, ReturnButton, ConfigsResetLink } from "../styles";

import ContainerAnimate from '../../components/ContainerAnimate';

export default function Authenticated() {
	return (
		<>
			<ContainerAnimate />
			<Container>
				<TitleError><strong>Erro: </strong>você não está autenticado</TitleError>
					<FiLogIn size={256} color="#e94040" />
					<ConfigsResetLink><Link to="/login"><ReturnButton>Logar em uma conta</ReturnButton></Link></ConfigsResetLink>
			</Container>
		</>
	);
}
