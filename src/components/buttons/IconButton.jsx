const IconButton = ({ text, action }) => {

	return (
		<button
			className="text-yellow-400 py-0 px-0"
			type={null}
			onClick={action}>
			{text}
		</button>
	);
};

export default IconButton;
