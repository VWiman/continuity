import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import Close from "./icons/Close";
import Bars from "./icons/Bars";

const Header = () => {
	// State to manage if the menu is open or closed
	const [isOpen, setIsOpen] = useState(false);

	// Function to toggle the menu state
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={`flex flex-col w-full h-fit md:px-[8vw] py-0 md:py-4 uppercase md:flex-row md:items-center md:justify-between leading-none text-lg md:text-xl font-semibold shadow md:shadow-none ${isOpen ? "shadow-none" : "shadow"}`}>
			<div className="flex flex-row justify-between items-center tracking-widest bg-white  md:bg-transparent">
				<h1 className="flex flex-row h-fit justify-center items-center">
					<div className="flex flex-row w-56 h-full bg-white -ml-32 md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
						<img className="flex w-12 h-full bg-white ml-44" src="/logo.svg" alt="logo" />
					</div>
					<span className="p-2 -mr-2 text-movie-red-600 md:bg-gradient-to-r from-white to-transparent">c</span>
					ontinuity
				</h1>
				<button
					className="md:hidden bg-white md:bg-gradient-to-l from-white to-transparent mr-10"
					onClick={() => toggleMenu()}>
					{isOpen ? <Close /> : <Bars />}
				</button>
			</div>

			<nav className={`md:block ${isOpen ? "block" : "hidden"}`}>
				<ul className="flex flex-col w-full gap-1 pt-1 pl-2 md:pl-0 md:flex-row md:gap-4 bg-gradient-to-b md:bg-none from-white to-transparent pr-1.5 min-h-24 justify-center items-center">
					{routes.map((route) => {
						return (
							<li className="hover:text-movie-red-600 tracking-wide mx-auto" key={route.name}>
								<Link to={route.path} className="block">
									{route.name}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
