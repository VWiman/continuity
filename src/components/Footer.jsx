const Footer = () => {
    const date = new Date

    return <footer className="mx-auto px-[2vw] sm:px-[4vw] md:px-[8vw] bg-gradient-to-r from-transparent via-white to-transparent text-black/50 mt-auto">Viktor Wiman {date.getFullYear()}</footer>;
};

export default Footer;
