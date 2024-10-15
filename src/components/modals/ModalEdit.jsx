const ModalEdit = ({ isOpen, onClose, children }) => {
	// Return null if modal is not open
	if (!isOpen) return null;

	// Return modal that covers screen
	return (
		<div
			className="fixed inset-0 z-[100] h-screen min-h-full flex items-center justify-center bg-white md:bg-black md:bg-opacity-50 backdrop-blur-sm mb-auto"
			onClick={onClose}>
			<div className="h-full w-full md:flex md:justify-center overflow-scroll">
				<div
					className="relative self-center md:ml-8 flex w-fit md:w-8/12 h-fit"
					onClick={(e) => e.stopPropagation()}>
					<div className="flex flex-col items-center justify-center w-full p-8">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default ModalEdit;
