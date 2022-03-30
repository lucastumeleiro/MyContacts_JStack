import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import { Overlay, Container, Footer } from "./styles";

import Button from "../Button";

export default function Modal(props) {
    const { danger } = props;

    return ReactDOM.createPortal(
        <Overlay>
            <Container danger={danger}>
                <h1>Title</h1>
                <p>Corpo</p>
                <Footer>
                    <button type="button" className="cancel-button">
                        Cancelar
                    </button>
                    <Button type="button" danger={danger}>
                        Deletar
                    </Button>
                </Footer>
            </Container>
        </Overlay>,
        document.getElementById("modal-root")
    );
}

Modal.defaultProps = {
    danger: false,
};

Modal.propTypes = {
    danger: PropTypes.bool,
};
