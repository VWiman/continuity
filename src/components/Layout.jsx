import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Layout = () => {
	return (
		// Layout for each page
		<>
			<Header />
			<MainContainer>
				<Outlet />
			</MainContainer>
			<Footer />
		</>
	);
};

export default Layout;
