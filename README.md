# Cuntinuity - Find new movies and track what you have seen

### Libraries

@reduxjs/toolkit react-redux react-router-dom tailwindcss postcss autoprefixer

### File structure

.env (Environment variables, e.g., API keys)
src/
    app/
        store.js (Redux store configuration)
    components/ (Reusable UI components)
        Footer.jsx
        Header.jsx
        Layout.jsx
        MovieCard.jsx
        MovieList.jsx
        SearchBar.jsx
    features/ (Redux slices and related logic)
        auth/
            authSlice.js (Authentication state)
        lists/
            listsSlice.js (User movie lists)
        movies/
            moviesSlice.js (Movie data fetching)
    pages/ (Route components)
        HomePage.jsx
        LoginPage.jsx
        MovieListsPage.jsx
        Profile.jsx
        RegisterPage.jsx
        SearchPage.jsx
    utils/
        localStorage.js (Utility functions for localStorage interactions)
    App.jsx (Main app component with routing)
    main.jsx (Application entry point)
    index.css (Global styles)