const MainContainer = ({ children }) => {
	// The main as container on each page
	return (
		<main className="flex flex-col min-w-full gap-8 w-fit h-full mx-auto px-0 sm:px-[2vw] md:px-[8vw] mt-4 sm:mt-8 md:mt-12">
			{children}
		</main>
	);
};

export default MainContainer;
