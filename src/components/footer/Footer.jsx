import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./footer.css"

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className='navbar2'>
      <Container fluid className="navbar3">
        <Navbar.Brand href="/"><h2>Fübar Eats</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="navbar3"/>
        <Navbar.Collapse id="navbarScroll" className="navbar3">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100vh' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">
              About
            </Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/bbq">BBQ</NavDropdown.Item>
              <NavDropdown.Item href="/Pizzas">Pizzas</NavDropdown.Item>
              <NavDropdown.Item href="/Sandwiches">Sandwiches</NavDropdown.Item>
              <NavDropdown.Item href="/Burgers">Burgers</NavDropdown.Item>
              <NavDropdown.Item href="/Desserts">Desserts</NavDropdown.Item>
              <NavDropdown.Item href="/Drinks">
                Drinks
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
          <Form className="d-flex navbar4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success ml-2 search-btn-footer">Search</Button>
            <Nav.Link href="/LoginRegister" className="ml-5 linkss footer-log-link">
              Login
            </Nav.Link>
            <Nav.Link href="/LoginRegister" className='linkss'>
              Register
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;