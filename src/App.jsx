import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import Layout from "./components/Layout";

function App() {
	return (
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/favorites" element={<FavoritesPage />} />
				</Route>
			</Routes>
	);
}

export default App;
