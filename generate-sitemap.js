import { createWriteStream } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import routes from "./src/routes.js";

const generateSitemap = async () => {
	// Use domain
	const sitemap = new SitemapStream({ hostname: "http://localhost:5173" });

	// Create a write stream
	const writeStream = createWriteStream("./public/sitemap.xml");
	sitemap.pipe(writeStream);

	// Static routes from routes.js with higher priority for homepage
	routes.forEach((route) => {
		sitemap.write({
			url: route.path,
			changefreq: "daily",
			priority: route.path === "/" ? 1.0 : 0.7,
		});
	});

	// End the sitemap stream
	sitemap.end();

	// Wait for the sitemap to be fully written
	await streamToPromise(sitemap);
	console.log("Sitemap generated successfully!");
};

// Execute the sitemap generation
generateSitemap().catch((err) => {
	console.error("Error generating sitemap:", err);
});
