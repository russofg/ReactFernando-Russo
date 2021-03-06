

import {Navbar, Container, Nav} from 'react-bootstrap';
import CarWidget from './CartWidget';
const NavBar = ()=> {


    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Plataforma Virtual</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#speakers">Speakers</Nav.Link>
      <Nav.Link href="#charlas">Charlas</Nav.Link>
      <Nav.Link href="#aboutUs">Acerca de Nosotros</Nav.Link>
      <Nav.Link href="#contacto">Contacto</Nav.Link>
    </Nav>
    <CarWidget/>
    </Container>
  </Navbar>
  <br />
  
</>
    )
}
 export default NavBar