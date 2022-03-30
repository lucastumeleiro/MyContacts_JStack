import { Container } from "./styles";

import logo from "../../assets/images/logo-MyContacts.svg";

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="logo My Contacts" style={{ width: "201px" }} />
        </Container>
    );
}
