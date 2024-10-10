import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function HomePage() {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/search");
	};

	return (
		<>
			<div className="w-fit mx-auto text-center">
				<h2 className="text-2xl md:text-4xl font-semibold uppercase">maintain movie continuity and track your favorites</h2>
			</div>
			<div className="flex flex-col w-fit gap-4 md:mx-auto py-4 items-center">
				<p className="flex flex-col gap-2 md:text-xl px-4 md:px-0 text-center">
					<span>Continuity lets you search for any movie and retrive information about it.</span>
					<span>You can favorite movies to remember the good ones.</span>
				</p>
				<Button type="button" icon={null} text="go to search" action={handleButtonClick} />
			</div>
		</>
	);
}
