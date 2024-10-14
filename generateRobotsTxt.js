import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine the environment
const environment = process.env.NODE_ENV;

let robotsContent;

// I allow robots for both dev and production
if (environment === "production") {
	robotsContent = `User-agent: *
Disallow:

Sitemap: http://localhost:5173/sitemap.xml`;
} else {
	robotsContent = `User-agent: *
Disallow:
Sitemap: http://localhost:5173/sitemap.xml`;
}

// Path to write the robots.txt file
const robotsPath = path.join(__dirname, "public", "robots.txt");

// Write the robots.txt file
try {
	await fs.writeFile(robotsPath, robotsContent);
	console.log(`robots.txt generated for ${environment} environment`);
} catch (err) {
	console.error("Error writing robots.txt:", err);
}
