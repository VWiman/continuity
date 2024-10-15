import Close from "./icons/Close";
import StarOutline from "./icons/StarOutline";

export default function Toast({ message, onClose }) {
	return (
		<div className="fixed flex min-w-full top-3 left-0 items-center justify-center pointer-events-none h-fit z-[200]">
			<div
				id="toast-default"
				className="relative flex w-full h-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow"
				role="alert">
				<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8">
					<StarOutline />
				</div>
				<div className="flex ms-5 min-w-32 md:min-w-48 px-2 text-sm font-normal">{message}</div>
				<div
					className="relative flex md:ml-8 w-fit md:w-8/12 h-fit bg-white rounded-lg md:shadow-lg"
					onClick={(e) => e.stopPropagation()}>
					<button
						type="button"
						className="absolute right-1 text-black text-2xl pointer-events-auto"
						aria-label="Close"
						onClick={onClose}>
						<Close />
					</button>
				</div>
			</div>
		</div>
	);
}
