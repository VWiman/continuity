# Continuity - Find New Movies and Track What You Have Seen

Continuity is a web application that helps you discover new movies and track the ones you have already watched. This project utilizes modern frontend libraries and state management techniques to provide a seamless user experience.

## Libraries Used

- **@reduxjs/toolkit**
- **react-redux**
- **react-router-dom**
- **tailwindcss**
- **postcss**
- **autoprefixer**

## File Structure

```plaintext
📦continuity
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┗ 📜store.js          # Redux store configuration
 ┃ ┣ 📂components          # Reusable UI components
 ┃ ┃ ┣ 📂icons
 ┃ ┃ ┃ ┣ 📜Star.jsx
 ┃ ┃ ┃ ┗ 📜StarOutline.jsx 
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┣ 📜MovieCard.jsx
 ┃ ┃ ┣ 📜MovieList.jsx
 ┃ ┃ ┗ 📜SearchBar.jsx
 ┃ ┣ 📂features            # Redux slices and related logic
 ┃ ┃ ┣ 📂lists
 ┃ ┃ ┃ ┗ 📜listsSlice.js    # User movie lists
 ┃ ┃ ┣ 📂movies
 ┃ ┃ ┃ ┗ 📜moviesSlice.js   # Movie data fetching
 ┃ ┣ 📂pages               # Route components
 ┃ ┃ ┣ 📜FavoritesPage.jsx
 ┃ ┃ ┣ 📜HomePage.jsx
 ┃ ┃ ┗ 📜SearchPage.jsx
 ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜localStorage.js    # Utility functions for localStorage interactions
 ┃ ┣ 📜App.jsx             # Main app component with routing
 ┃ ┣ 📜Main.jsx            # Application entry point
 ┃ ┣ 📜routes.js
 ┃ ┗ 📜index.css           # Global styles
 ┣ 📜.env                    # Environment variables (e.g., API keys)
```

## Progress

### Day 1 - 7 Oct

> Set up the project and file structure. Realized the scope was too large and adjusted it accordingly. I will now focus on just meeting the requirements. Wrapped the app in Provider and BrowserRouter. Wrote the code for handling loading and saving in utils/localStorage.js and started writing the code for the slices in features. I still need to add better comments to the code.

### Day 2 - 8 Oct

> Completed adding comments for Redux-related code. Implemented search functionality and basic navigation.

### Day 3 - 10 Oct

> Implemented favorites functions and display. Added buttons to add and remove from favorites. Added icons for the buttons. Implemented saving to localHost from store. Created a new styling branch and implemented the first pass of styling.