import { Container, Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="md" bg="primary">
      <Container>
        <NavbarBrand className="text-light">Corner Helicopter 2x2 Scrambler</NavbarBrand>

        <NavbarCollapse className="justify-content-end">
          <Nav>
            <NavLink className="text-light">Foo</NavLink>
            <NavLink className="text-light">Bar</NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}