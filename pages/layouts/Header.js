import { Navbar, Nav, Image } from 'react-bootstrap';

const Header = () => (
  <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
    <Navbar.Brand>
      <Image src="/images/logo.png" />
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header;