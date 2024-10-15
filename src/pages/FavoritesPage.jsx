import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Modal from "../components/Modal";
import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm";

export default function FavoritesPage() {
	const movies = useSelector((state) => state.lists.favorites);
	const error = null;
	const location = useLocation();

	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	const handleOpenAddModal = () => {
		setIsAddModalOpen(true);
	};

	const handleCloseAddModal = () => {
		setIsAddModalOpen(false);
	};

	return (
		<>
			<Helmet>
				{/* Basic meta */}
				<title>Your Favorite Movies - Track and View Your Favorites</title>
				<meta
					name="description"
					content="View all your favorite movies in one place. Easily manage and keep track of your top picks."
				/>
				{/* Open Graph / Facebook */}
				<meta property="og:title" content="Your Favorite Movies - Track and View Your Favorites" />
				<meta
					property="og:description"
					content="Access your list of favorite movies. Keep track of all the movies you love in one convenient place."
				/>
				<meta property="og:url" content={location.pathname} />
				<meta property="og:type" content="website" />

				{/* Twitter / X */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Your Favorite Movies - Track and View Your Favorites" />
				<meta
					name="twitter:description"
					content="View and manage your list of favorite movies. Keep track of your favorites in one place."
				/>
				<meta name="twitter:url" content={location.pathname} />
			</Helmet>

			<div className="w-fit mx-auto text-center">
				<h2 className="text-xl sm:text-2xl md:text-5xl font-semibold font-serif uppercase px-2">favorites</h2>
			</div>
			<div className="flex flex-col gap-2 md:text-xl px-1 md:px-0 items-center">
				<MovieList movies={movies} error={error} />
			</div>
			<button onClick={handleOpenAddModal}>Add Movie</button>
			{/* Add Movie Modal */}
			<Modal isOpen={isAddModalOpen} onClose={handleCloseAddModal}>
				<AddMovieForm onClose={handleCloseAddModal} />
			</Modal>
		</>
	);
}
