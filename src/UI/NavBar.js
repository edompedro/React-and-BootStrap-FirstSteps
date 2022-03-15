import { Navbar, Container } from "react-bootstrap";
import './Navbar.css';
const NavBar = (props) => {

    
    return(
        <div className="navbar">
        <Container>
            <Navbar bg="dark" fixed="top" className="mb-3" variant="dark">
                <Container>
                <Navbar.Brand>
                    {props.UserName}
                </Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
        </div>
    )

}
export default NavBar;