Star-Wars-Fan-Club

Softuni ReactJS Final Project
Overview

The application is front-end app (SPA) for a Star Wars movie/games/series library.

The main "unit" in this platform is the catalog page which can be viewed, loved, created, edited and deleted depending on certain user roles.

Guests can view pages: Home, Catalog, Search . They can login with an email and password or register with an email,password and username for more functionality.

Users may view and create, like movies as well games/series , which saves the created movies/games/series to their profile. 

Creators can create, edit and delete movies/series/games, they've created. They don't have access to the like functionality as this is a job for other user which have not created that specific movie.

This project was created by Daniel Danov for the purposes of React.JS Softuni Course, May-August 2024.

Public part

This part of the application is designed for non-registered users. These users have access to the following:

    Home Page -> You can find basic information about added movies to the catalog.
    Catalog Page -> Offers a list of all added movies by different users. Guests have access to the details of the movie, however they do not have access to any CRUD.
    Details Sub-Page -> Lists additional information in regards to the chosen movie/game/series.  When you click over the details button, you can to go to movie/game/series details page. 
    Search(Search the universe) -> Offers a search functionality to the application to sort through and chose to display specific movies base on the guests preferences(name and category).
    Login/Register -> These two pages offer a new guest to register himself or an existing user to sign in and gain access to a variety of functionality.

Private part
Users

    Home Page(Home Base) -> You can find basic information about added movies to the catalog.
    Catalog Page(Star Map) -> Offers a list of all added movies by different users. Guests have access to the details of the movie, however they do not have access to any CRUD.
    Details Sub-Page -> Lists additional information in regards to the chosen movie/game/series.  When you click over the details button, you can to go to movie/game/series details page. 
    Create page(Add to the universe) -> Offers the opportunity to create your own movie/game/series and add it to the Star map(Catalog).
    Search(Search the universe) -> Offers a search functionality to the application to sort through and chose to display specific movies base on the guests preferences(name and category).
    Profile page(Your place in the galaxy) -> Offers access to the a collection of the user's added movies/games/series in a neat place, which have access to the details page of that specific movie as well as access to update the information or delete the movie/game if necessary.
    Logout -> Clears the user token.



Users are (initialized on server):

    daniel@abv.bg - 1234
    michael@abv.bg- 1234

Technical Details

The client application is build with:

    HTML + CSS 
    ReactJS
    react-router-dom

The server side is build with:

    Express
    MongoDb/Mongoose
    JSwebToken
    bcrypt
    cookie-parser
    express-validator
    

If you want to run the project, you have to navigate to the client folder and run:

### npm run dev

The server used is build with Express and MongoDb which also needs to be run by navigating to the server folder in the terminal and run:

### npm run start

Once the above has been done, in your browser of choice, you can view and interact with the app on http://localhost:5173.

