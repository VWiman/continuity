# Continuity - Find New Movies and Track What You Have Seen

Continuity is a web application that helps you discover new movies and favorite the ones you have already watched. This project utilises modern frontend libraries and state management techniques to provide a smooth user experience.

## Pages

### HomePage "/"
> Introduction and call to action button.

### SearchPage "/search"
> Search page for finding new movie, series or games. Add to favorites and view details.

### FavoritesPage "/favorites"
> Page that lets the user view favorites. Add custom movies. Remove favorites and view details.

## Libraries Used

- **[@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)**: A set of tools to simplify Redux development.
- **[react-redux](https://www.npmjs.com/package/react-redux)**: Official React bindings for Redux.
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)**: Declarative routing for React applications.
- **[react-helmet-async](https://www.npmjs.com/package/react-helmet-async)**: A reusable React component for managing `<head>` elements with support for async server rendering.
- **[tailwindcss](https://www.npmjs.com/package/tailwindcss)**: A utility-first CSS framework for rapid UI development.
- **[postcss](https://www.npmjs.com/package/postcss)**: A tool for transforming CSS with JavaScript plugins.
- **[autoprefixer](https://www.npmjs.com/package/autoprefixer)**: A PostCSS plugin to parse CSS and add vendor prefixes.
- **[sitemap](https://www.npmjs.com/package/sitemap)**: A Node.js module for creating XML sitemaps for SEO.
- **[react-gtm-module](https://www.npmjs.com/package/react-gtm-module)**: A simple and customisable Google Tag Manager (GTM) integration for React applications.

## Implementation

### Navigation

I use browserRouter from react-router-dom for site navigation. The user navigates by clicking on one of the options in the nav menu that is placed in the Header component. In the case of the first page there is also navigation via a button that uses useNavigate() from react-router-dom.

### API, Storage and State

I use react-redux and @reduxjs/toolkit to manage actions when fetching movies from the API. For temporary storage and event handling I set up a store and created slices. I also call a utility function to store data in localStorage that needs to remain over sessions.

### UI and SEO

I use Tailwind for styling. For SEO I implemented tags using react-helmet-async and for SEO I used react-gtm-module to connect the site to Google Analytics 4.

### Testing

I implemented Cypress and two end-to-end tests.


## File Structure

``` plaintext
📦continuity
 ┣ 📂public
 ┃ ┣ 📜favicon.svg
 ┃ ┣ 📜sitemap.xml
 ┃ ┣ 📜temp.webp
 ┃ ┗ 📜robots.txt     
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┗ 📜store.js          # Redux store configuration
 ┃ ┣ 📂components          # Reusable UI components
 ┃ ┃ ┣ 📂buttons
 ┃ ┃ ┃ ┣ 📜CtaButton.jsx
 ┃ ┃ ┃ ┣ 📜DetailsButton.jsx
 ┃ ┃ ┃ ┣ 📜IconButton.jsx
 ┃ ┃ ┃ ┗ 📜SubmitButton.jsx
 ┃ ┃ ┣ 📂forms
 ┃ ┃ ┃ ┣ 📜AddMovieForm.jsx
 ┃ ┃ ┃ ┗ 📜SearchBar.jsx
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┣ 📜Bars.jsx
 ┃ ┃ ┃ ┣ 📜Close.jsx
 ┃ ┃ ┃ ┣ 📜Edit.jsx
 ┃ ┃ ┃ ┣ 📜Spinner.jsx
 ┃ ┃ ┃ ┣ 📜Star.jsx
 ┃ ┃ ┃ ┗ 📜StarOutline.jsx
 ┃ ┃ ┣ 📂modals
 ┃ ┃ ┃ ┣ 📜Modal.jsx
 ┃ ┃ ┃ ┣ 📜ModalEdit.jsx
 ┃ ┃ ┃ ┗ 📜ModalPopup.jsx
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┣ 📜MainContainer.jsx
 ┃ ┃ ┣ 📜MovieCard.jsx
 ┃ ┃ ┣ 📜MovieList.jsx
 ┃ ┃ ┗ 📜Toast.jsx
 ┃ ┣ 📂features            # Redux slices and related logic
 ┃ ┃ ┣ 📂lists
 ┃ ┃ ┃ ┗ 📜listsSlice.js    # User movie lists
 ┃ ┃ ┣ 📂movies
 ┃ ┃ ┃ ┣ 📜movieDetailsSlice.js  # Movie details data fetching
 ┃ ┃ ┃ ┗ 📜moviesSlice.js   # Movie data fetching
 ┃ ┣ 📂pages               # Pages components
 ┃ ┃ ┣ 📜FavoritesPage.jsx
 ┃ ┃ ┣ 📜HomePage.jsx
 ┃ ┃ ┗ 📜SearchPage.jsx
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜localStorage.js    # Utility functions for localStorage interactions
 ┃ ┣ 📜App.jsx             # Main app component with routing
 ┃ ┣ 📜Main.jsx            # Application entry point
 ┃ ┣ 📜routes.js
 ┃ ┗ 📜index.css           # Global styles / Tailwind
 ┣ 📜.env                    # Environment variables (e.g., API keys)
 ┣ 📜.generate-sitemap.js
 ┣ 📜.generateRobotsTxt.js
 ┣ 📜.index.html
```

## Progress

### Day 1 - 7 Oct

> Set up the project and file structure. Realised the scope was too large and adjusted it accordingly. I will now focus on just meeting the requirements. Wrapped the app in Provider and BrowserRouter. Wrote the code for handling loading and saving in utils/localStorage.js and started writing the code for the slices in features. I still need to add better comments to the code.

### Day 2 - 8 Oct

> Completed adding comments for Redux-related code. Implemented search functionality and basic navigation.

### Day 3 - 10 Oct

> Implemented favorites functions and display. Added buttons to add and remove from favorites. Added icons for the buttons. Implemented saving to localHost from store. Created a new styling branch and implemented the first pass of styling.

### Day 4 - 11 Oct

> Finished styling. Added a slice to fetch movie details. Added and implemented a modal to view movie details. Reworked buttons into separate components, need to document this.

### Day 5 - 12 Oct

> Added meta tags and scripts to generate sitemap and robots.txt. Added dynamic meta for when the user views a movies details.

### Day 6 - 13 Oct

> Implemented GA4, GTM and Cypress. Left to do is additional test, WCAG and commenting.

### Day 7 - 14 Oct

> Added and cleaned up comments. Added another test. Updated documentation.

### Day 8 - 15 Oct

> Implemented full CRUD, some commenting and fine tuning suffered. Left to do is commenting, fine tuning and planning presentation.

### Day 9 - 16 Oct

> Fine tuned some parts, implemented filtering for movies, games and shows in search.