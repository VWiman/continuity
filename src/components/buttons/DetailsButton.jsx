const DetailsButton = ({ text, action, type = "button" }) => {
	return (
		<button
			className="w-fit h-fit uppercase transition-shadow tracking-widest text-xs md:text-sm text-center font-black text-white bg-gradient-to-b from-movie-red-500 via-movie-red-600 to-movie-red-700 hover:from-movie-red-600 hover:via-movie-red-700 hover:to-movie-red-800 shadow-md shadow-movie-red-700/55 hover:shadow-movie-red-950/30  rounded md:rounded-lg leading-none px-2 py-1 md:px-3 md:py-2 self-start md:self-center"
			name="details"
			aria-label="Details button"
			type={type}
			onClick={action}>
			{text}
		</button>
	);
};

export default DetailsButton;
