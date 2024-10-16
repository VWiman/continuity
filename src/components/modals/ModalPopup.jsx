import Close from "../icons/Close";

const ModalPopup = ({ isOpen, onClose, onAction }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div
			className="fixed inset-0 z-[100] h-screen flex items-center justify-center bg-white md:bg-black md:bg-opacity-50 backdrop-blur-sm mb-auto"
			onClick={onClose}>
			<div
				id="popup-modal"
				tabIndex="-1"
				className="flex overflow-y-auto overflow-x-hidden fixed z-auto justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
				<div className="relative p-4 h-full w-full md:h-fit md:w-fit md:flex md:justify-center overflow-scroll bg-white rounded-xl">
					<button
						type="button"
						className="absolute top-3 end-2.5 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
						data-modal-hide="popup-modal"
						onClick={(e) => onClose(e)}>
						<Close />
					</button>
					<div className="p-4 md:p-5 text-center">
						<svg
							className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
						<h3 className="mb-4 text-md font-medium">Remove this movie from favorites?</h3>
						<button
							data-modal-hide="popup-modal"
							type="button"
							onClick={(e) => onAction(e)}
							className="text-white bg-movie-red-600 hover:bg-movie-red-700 font-semibold rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center shadow-lg outline outline-movie-red-600 hover:outline-none uppercase"
							aria-label="yes">
							yes
						</button>
						<button
							data-modal-hide="popup-modal"
							type="button"
							className="py-2.5 px-5 ms-3 text-sm font-semibold text-white focus:outline-none  bg-gray-800 outline outline-gray-800 hover:bg-black hover:outline-none rounded-lg shadow-lg uppercase"
							aria-label="no">
							no
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalPopup;
