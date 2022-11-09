import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartIcon from "./cartIcon.jsx"
import "./navbar.css"

function NavScrollExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><h2>Fübar Eats</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success ml-2">Search</Button>
            <Nav.Link href="/LoginRegister" className="ml-5 linkss">
              Login
            </Nav.Link>
            <Nav.Link href="/LoginRegister" className='linkss'>
              Register
            </Nav.Link>
            <CartIcon className="cart-icon"/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;