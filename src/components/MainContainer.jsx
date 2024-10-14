const MainContainer = ({ children }) => {
	// The main as container on each page
	return (
		<main className="flex flex-col min-w-full gap-8 w-fit h-full mx-auto px-[0vw] sm:px-[4vw] md:px-[16vw] mt-8 sm:mt-12 md:mt-24">
			{children}
		</main>
	);
};

export default MainContainer;
