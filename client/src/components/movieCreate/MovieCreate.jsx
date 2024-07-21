export default function MovieCreate() {
 return (
 <>
 <main id="create">
    <section id="create-container">
        <div className="create-container-info">
            <h1>Add to the Universe</h1>
            <form method="post" name="create-form">
                <label>Category:</label>
                <select autocomplete="off" id="category" name="category" value="" selected="" >
                    <option value="" hidden="hidden" selected>""</option>
                    <option value="---" hidden="hidden" selected>---</option>
                    <option value="Movie">Movie</option>
                    <option value="Series">Series</option>
                    <option value="Game">Game</option>
                </select>
                <label>Name:</label>
                <input type="text" id="name" name="name" value="name"/>
                <label>Image:</label>
                <input type="text" id="image" name="image" placeholder="http://..." value="image"/>
                <label>Rating:</label>
                <input type="number" id="rating" name="rating"value="rating"/>
                <label>Review:</label>
                <textarea id="review" name="review">review</textarea>
                <label>Description:</label>
                <textarea id="description" name="description">description</textarea>
                <input type="submit" id="btn" value="Add"></input>
            </form>
        </div>
    </section>
</main>
 </>
 );
}