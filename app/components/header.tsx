import { Container, Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse } from "react-bootstrap";
import Image from "next/image";
import cubicle from "../../public/cubicle-wireframe.svg"

export default function Header() {
  return (
    <Navbar expand="md" bg="primary">
      <Container>
        <NavbarBrand
          className="text-light h1"
          style={{ fontSize: "32px" }}
        >Corner Helicopter 2x2 Scrambler</NavbarBrand>

        <NavbarCollapse className="justify-content-end">
          <Nav>
            <NavLink href="https://www.thecubicle.com/products/yuxin-corner-helicopter-2x2?_pos=1&_psq=corner%20hel&_ss=e&_v=1.0" target="_blank">
              <Image
                src={cubicle}
                alt="Purchase link for TheCubicle"
                title="Purchase link for TheCubicle"
                width={50}
                height={50}
              />
            </NavLink>
            <NavLink className="text-light">Bar</NavLink>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}