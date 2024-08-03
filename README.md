Star-Wars-Fan-Club

Softuni ReactJS Final Project

Overview

The application is front-end app (SPA) for a Star Wars movie/games/series library.

The main "unit" in this platform is the catalog page where you can view, like, create, edit and delete depending on certain user roles.

Guests can view pages: Home, Catalog, Search. They can login with an email and password or register with an email ,password and username to access other functionalities.

Logged-in users can view, create and like movies, as well as games/series, which saves the created movies/games/series to their profile. 

Creators can edit and delete movies/series/games, they've created. They don't have access to the like functionality as this is a job for other users, which have not created that specific movie.

This project was created by Daniel Danov for the purposes of React.JS Softuni Course, May-August 2024.

Public part - available for guests and logged-in users.

    Home Page(Home Base) -> You can find introductory information about the application.
    Catalog Page(Star Map) -> Offers a list of all added movie/game/series by different users. Guests have access to the details of the movie, however they do not have access to any CRUD operations.
    Details Sub-Page -> Lists additional information in regards to the chosen movie/game/series. When you click over the details button, you can to go to movie/game/series details page. 
    Search(Search the universe) -> Offers a search functionality to search for a specific movie/game/series based on one's preferences(name and/or category).
    Login/Register -> These two pages offer a new guest to register himself or an existing user to sign in and gain access to a variety of functionality.

Private part - available for logged-in users.

    Create page(Add to the universe) -> Offers the opportunity to create your own movie/game/series and add it to the Star map(Catalog).
    Edit/Delete functionality - available for creators of a specific movie/game/series.
    Like functionality - available for non-creators.
    Profile page(Your place in the galaxy) -> Offers access to a collection of the user's created movies/games/series in a neat place, which has access to the details page of those specific movies as well as access to update the information or delete the movie/game/series if necessary.
    Logout -> Clears the user's token.



Users are (initialized on server):

    daniel@abv.bg - 1234
    michael@abv.bg- 1234

Technical Details

The client application is build with:

    HTML + CSS 
    ReactJS

The server side is built with:

    Express
    MongoDb/Mongoose

If you want to run the project, you have to navigate to the client folder and run:

### npm run dev

The server used is built with Express and MongoDb, which also needs to be run by navigating to the server folder in the terminal and running:

### npm run start

Once the above have been done, in your browser of choice, you can view and interact with the app on http://localhost:5173.

