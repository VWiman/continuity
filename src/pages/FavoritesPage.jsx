import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Modal from "../components/modals/Modal";
import { useState } from "react";
import AddMovieForm from "../components/forms/AddMovieForm";
import CtaButton from "../components/buttons/CtaButton";

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
				<h2 className="text-2xl sm:text-3xl md:text-5xl leading-none font-semibold font-serif uppercase px-2">
					favorites
				</h2>
			</div>
			<div className="flex flex-col gap-1 md:text-xl px-1 md:px-0 items-center mb-10">
				<MovieList movies={movies} error={error} />
				{/* Open modal button */}
				<CtaButton text={"Add Custom Movie"} action={handleOpenAddModal} />
			</div>
			{/* Custom movie modal */}
			<Modal isOpen={isAddModalOpen} onClose={handleCloseAddModal}>
				<AddMovieForm onClose={handleCloseAddModal} />
			</Modal>
		</>
	);
}
