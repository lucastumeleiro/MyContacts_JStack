import { Link } from "react-router-dom";

import {
    Container,
    InputSearchContainer,
    Header,
    ListContainer,
    Card,
} from "./styles";

import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";

export default function Home() {
    return (
        <Container>
            <InputSearchContainer>
                <input type="text" placeholder="Pesquise pelo nome" />
            </InputSearchContainer>

            <Header>
                <strong>3 Contatos</strong>
                <Link to="/new">Novo Contato </Link>
            </Header>

            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <img src={arrow} alt="Ordenação" />
                    </button>
                </header>
            </ListContainer>

            <Card>
                <div className="info">
                    <div className="contact-name">
                        <strong>Nome</strong>
                        <small>instagram</small>
                    </div>
                    <span>teste@teste.com</span>
                    <span>(99)99999-9999</span>
                </div>

                <div className="actions">
                    <Link to="/edit/1">
                        <img src={edit} alt="Editar contato" />
                    </Link>
                    <button type="button">
                        <img src={trash} alt="Deletar Contato" />
                    </button>
                </div>
            </Card>
        </Container>
    );
}
