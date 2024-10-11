import { useNavigate } from "react-router-dom";
import CtaButton from "../components/buttons/CtaButton";

export default function HomePage() {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/search");
	};

	return (
		<>
			<div className="w-fit mx-auto text-center">
				<h2 className="text-xl leading-none sm:text-2xl md:text-5xl font-semibold uppercase font-serif px-2">
					maintain <span className="text-white bg-movie-red-600 px-2 rounded-xl">movie</span> continuity and track your{" "}
					<span className="text-yellow-400 bg-black px-2 rounded-xl">favorites</span>
				</h2>
			</div>
			<div className="flex flex-col w-fit gap-4 md:mx-auto py-4 items-center">
				<p className="flex flex-col gap-1 md:text-xl px-4 md:px-0 text-center">
					<span>Continuity lets you search for any movie and retrive information about it.</span>
					<span>You can favorite movies to remember the good ones.</span>
				</p>
				<CtaButton text="go to search" action={handleButtonClick} />
			</div>
		</>
	);
}
