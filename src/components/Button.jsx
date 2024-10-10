const Button = ({ type, icon, text, action }) => {
	return (
		<button
			className={`w-fit h-fit uppercase text-sm transition-shadow tracking-widest ${
				icon
					? "text-yellow-400  py-0 px-0"
					: "text-white bg-gradient-to-b from-movie-red-500 via-movie-red-600 to-movie-red-700 hover:from-movie-red-600 hover:via-movie-red-700 hover:to-movie-red-800 shadow-md shadow-movie-red-700/55 hover:shadow-movie-red-950/30 font-black rounded-lg text-center leading-none"
			} ${type === "button" ? "px-6 py-4 text-lg" : "px-3 py-2 text-sm"}`}
			type={type}
			onClick={action}>
			{icon ? icon : text}
		</button>
	);
};

export default Button;
