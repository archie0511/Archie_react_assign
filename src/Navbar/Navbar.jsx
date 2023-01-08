import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import "./Navbar.css"
import logo from './logo.svg';
import {
	Brand,
	BrandImage,
	Container,
	NavLink,
	Menu,
	MenuItems,
	Nav,
	MobileMenu,
	MobileMenuContainer,
	MobileMenuHover,
} from './NavbarStyle';
import { NavbarData } from './NavbarData';

export default function Navbar() {
	const screenSize = 580;
	const [menu, setMenu] = useState(false);
	const [toggleMenu, setToggleMenu] = useState(false);

	window.addEventListener('resize', (e) => {
		if (e.target.innerWidth < screenSize) {
			setMenu(true);
		} else {
			setMenu(false);
		}
	});

	useEffect(() => {
		if (window.innerWidth < screenSize) setMenu(true);
	}, []);

	return (
		<div>
			<Nav>
				<Container ss={screenSize}>
					<Brand>
						<BrandImage src={logo} alt="logo" />
					</Brand>
					<MobileMenuContainer
						menu={menu}
						onClick={() => setToggleMenu(!toggleMenu)}
					>
						<MobileMenu />
						<MobileMenuHover />
					</MobileMenuContainer>
					<Menu toggleMenu={toggleMenu} ss={screenSize}>
						{NavbarData.map((item, index) => (
							<MenuItems key={index} toggleMenu={toggleMenu} ss={screenSize}>
								<NavLink to={item.link}>{item.title}</NavLink>
							</MenuItems>
						))}
					</Menu>
				</Container>
			</Nav>
			{/* <h1 style="font-size:60px;">Heading 1</h1> */}
			<h >Book from San Fransisco</h>
            <br/>
			<div class="row" margin="10px">
  <div class="column">
    <div class="card">
      <h3>Card 1</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <h3>Card 2</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 3</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <h3>Card 4</h3>
      <p>Some text</p>
      <p>Some text</p>
    </div>
  </div>
</div>

{/* <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com"></img> */}



		</div>
	);
}
