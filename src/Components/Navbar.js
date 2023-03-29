import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar"
import Companylogo from '../Images/audiogeeks recording studios.png'
import '../App.css'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
		<a href="/"><img id='company-logo' alt="Company logo" src={Companylogo}/></a>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Request A Quote</a>
				<a href='/src/Listen.js'>Listen</a>
				<a href="/#">Partners</a>
				<a href="/#">About</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
