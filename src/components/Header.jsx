import { Link } from "react-router-dom";
import routes from "../routes";

const Header = () => {
	return (
		<header>
			<h1>Continuity</h1>
			<nav>
				<ul>
					{routes.map((route) => {
						return (
							<li key={route.name}>
								<Link to={route.path}>{route.name}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
