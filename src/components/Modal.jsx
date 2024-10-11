import Close from "./icons/Close";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-[100] h-screen flex items-center justify-center bg-white md:bg-black md:bg-opacity-50 backdrop-blur-sm mb-auto"
			onClick={onClose}>
			<div
				className="relative self-center md:ml-8 flex w-fit md:w-8/12 h-fit bg-white rounded-lg md:shadow-lg"
				onClick={(e) => e.stopPropagation()}>
				<button className="absolute top-3 right-3 text-black text-2xl" onClick={onClose}>
					{Close}
				</button>
				<div className="px-6">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
