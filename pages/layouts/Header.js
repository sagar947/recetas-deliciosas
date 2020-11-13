import { useEffect, useState } from 'react';
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';

const Header = ({ auth }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setCurrentUser(user);
      }
    });
  }, []);

  const handleLogout = (event) => {
    event.preventDefault();
    auth.signOut().then((res) => {
      setCurrentUser(null);
      router.push('/');
    })
  }

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand>
        <Image src="/images/logo.png" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {
            !!currentUser ? <NavDropdown title={currentUser.displayName} id="user-dropdown">
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown> : <Nav.Link href="/signin">Sign In</Nav.Link>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;