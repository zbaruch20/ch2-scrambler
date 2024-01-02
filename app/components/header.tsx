import { Container, Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse } from "react-bootstrap";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface NavLinkItem {
  href: string;
  alt: string;
  src: StaticImport;
}

const navLinkItems: NavLinkItem[] = [
  {
    href: "https://www.thecubicle.com/products/yuxin-corner-helicopter-2x2?_pos=1&_psq=corner%20hel&_ss=e&_v=1.0",
    alt: "Purchase link for TheCubicle",
    src: require("../../public/cubicle-wireframe.svg"),
  },
  {
    href: "https://speedcubeshop.com/products/yuxin-corner-helicopter-2x2?_pos=1&_sid=0e52b32bc&_ss=r&variant=40155467546737",
    alt: "Purchase link for SpeedCubeShop",
    src: require("../../public/scs-logo.png"),
  },
  {
    href: "https://cubezz.com/Buy-7168-YuXin+Little+Magic+Corner+Helicopter+2x2+Magic+Cube+Stickerless.html",
    alt: "Purchase link for CubeZZ",
    src: require("../../public/cubezz-logo.svg"),
  },
  {
    href: "https://docs.google.com/spreadsheets/d/1PCq1OsSJKlTzafnXAaehzSUQ0LElYJhPv-ZbOfNC3Xg/edit?usp=sharing",
    alt: "Rankings spreadsheet",
    src: require("../../public/ranking-icon.png"),
  },
  {
    href: "https://discord.gg/zu2BsH48mK",
    alt: "CH2 Discord server",
    src: require("../../public/discord-icon.svg"),
  },
  {
    href: "https://www.youtube.com/playlist?list=PLeDThDktlVz37DTp5PO1WVEq-cNib3ILC",
    alt: "YouTube resource videos",
    src: require("../../public/youtube-play-button.svg"),
  },
  {
    href: "https://github.com/zbaruch20/ch2-scrambler",
    alt: "GitHub repository",
    src: require("../../public/github-mark-white.svg"),
  },
];

export default function Header() {  
  return (
    <header>
      <Navbar expand="md" bg="primary">
        <Container>
          <NavbarBrand
            className="text-light h1"
            style={{ fontSize: "32px" }}
          >Corner Helicopter 2x2 Scrambler</NavbarBrand>

          <NavbarCollapse className="justify-content-end">
            <Nav>
              {navLinkItems.map((item, i) => (
                <NavLink key={i} href={item.href} target="_blank">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    title={item.alt}
                    width={40}
                    height={40}
                  />
                </NavLink>
              ))}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
}