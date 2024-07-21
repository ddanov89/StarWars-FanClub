export default function Search() {
 return (
 <>
 <main id="search">
    <section class="movie-search">
        <h1>Search the Universe</h1>

        <form class="search-form" name="search-form" method="get">
            <input type="text" class="search-movie" name="name" placeholder="Search here..." value=""/>
            <select autocomplete="off" id="category" name="category" value="" selected="">
                <option value="" hidden="hidden" selected>""</option>
                <option value="---">---</option>
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
                <option value="Game">Game</option>
            </select>
            <button type="submit" class="btn-search">Search</button>
        </form>

        
        <div class="search-result">
            <div class="search-list">
                {/* show search results */}
            </div>
        </div>

        <div class="no-match">
            <p>There are no movies/games found!</p>
        </div>
    </section>
</main>
 </>
 );
}