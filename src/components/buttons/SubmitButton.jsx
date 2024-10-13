const SubmitButton = ({ text, action }) => {
	return (
		<button
			className="w-fit h-fit uppercase transition-shadow tracking-widest text-md font-black text-white bg-gradient-to-b from-movie-red-500 via-movie-red-600 to-movie-red-700 hover:from-movie-red-600 hover:via-movie-red-700 hover:to-movie-red-800 shadow-md shadow-movie-red-700/55 hover:shadow-movie-red-950/30 rounded-md leading-none px-3 py-2 self-center"
			id="submit"
			name="submit"
			aria-label="Submit"
			type="submit"
			onClick={action}>
			{text}
		</button>
	);
};

export default SubmitButton;
