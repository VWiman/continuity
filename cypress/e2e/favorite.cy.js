describe("Favorite test", () => {
	it("Visits local host and performs a search", () => {
		// Step 1: Visit the homepage
		cy.log("Visiting the homepage");
		cy.visit("http://localhost:5173/");

		// Step 2: Click on the search link in nav
		cy.log("Clicking on the search link");
		cy.get('a[href="/search"]').click();
		cy.url().should("include", "/search");

		// Step 3: Enter the search term "Inception"
		cy.log("Entering search term: Inception");
		cy.fixture("example").then((data) => {
			cy.get("#searchInput").type(data.search);
			cy.get("#submit").click();

			// Step 4: Wait for search results and ensure the movie list is visible
			cy.log("Waiting for search results to load");
			cy.get("#movieList", { timeout: 10000 }).should("be.visible").find("li").should("have.length.at.least", 1);
			cy.get("#movieList li").first().should("contain.text", "Inception");

			// Step 5: Click the first favorites button
			cy.log("Clicking on the first favorites button");
			cy.get('button[name="favorite"]').first().click();

			// Step 6: Navigate to favorites and make sure that movie was added
			cy.get('a[href="/favorites"]').click();
            cy.url().should("include", "/favorites");
            cy.get("#movieList li").should("contain.text", "Inception");
		});
	});
});
