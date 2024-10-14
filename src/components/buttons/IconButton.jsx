const IconButton = ({ text, action }) => {

	return (
		<button
			className="text-yellow-400 py-0 px-0"
			name="favorite"
			aria-label="Favorite button"
			type={null}
			onClick={action}>
			{text}
		</button>
	);
};

export default IconButton;
