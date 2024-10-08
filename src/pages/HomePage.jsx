import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate("/search")
    }

	return (
			<div>
				<h2>keep your movie continuity and track your favorites!</h2>
				<p>continuity lets you search for any movie and retrive information about them. You can also favorite movies to remember the good ones.</p>
				<button onClick={() => handleButtonClick()}>search now</button>
			</div>
	);
}
