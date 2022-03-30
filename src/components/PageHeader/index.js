import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import arrow from "../../assets/images/icons/arrow.svg";
import { Container } from "./styles";

export default function PageHeader(props) {
    const { title } = props;
    return (
        <Container>
            <Link to="/">
                <img src={arrow} alt="Voltar a Página Inicial" />
                <span>Voltar</span>
            </Link>
            <h1>{title}</h1>
        </Container>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
};
