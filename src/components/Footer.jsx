const Footer = () => {
    const date = new Date

    return <footer className="mx-auto px-[2vw] sm:px-[4vw] md:px-[8vw] bg-gradient-to-r from-stone-200 via-white to-stone-200 text-black/50 mt-auto">Viktor Wiman {date.getFullYear()}</footer>;
};

export default Footer;
