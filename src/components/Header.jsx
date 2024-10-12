import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import Close from "./icons/Close";
import Bars from "./icons/Bars";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="flex flex-col w-full h-fit px-[2vw] sm:px-[4vw] md:px-[8vw] py-4 md:py-8 uppercase md:flex-row md:items-center md:justify-between leading-none text-lg md:text-xl font-semibold">
			<div className="flex flex-row justify-between items-center tracking-widest bg-white md:bg-transparent">
				<h1>
					<span className="p-2 -mr-2 text-movie-red-600 md:bg-gradient-to-r from-white to-transparent">c</span>
					ontinuity
				</h1>
				<button
					className="md:hidden bg-white md:bg-gradient-to-l from-white to-transparent"
					onClick={() => toggleMenu()}>
					{isOpen ? Close : Bars}
				</button>
			</div>

			<nav className={`md:block ${isOpen ? "block" : "hidden"}`}>
				<ul className="flex flex-col w-full pl-2 md:pl-0 md:flex-row md:gap-4 bg-gradient-to-b md:bg-none from-white to-transparent pr-1.5">
					{routes.map((route) => {
						return (
							<li className="hover:text-movie-red-600 tracking-wide" key={route.name}>
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
