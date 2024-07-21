export default function MovieEdit() {
 return (
 <>
 <main id="edit">
    <section id="edit-container">
        <div className="edit-container-info">
            <h1>Edit Movie</h1>
            <form method="post" name="edit-form">
                <label>Category:</label>
                <select autocomplete="off" id="category" name="category" value='category' selected='category'>
                    <option value='category' hidden="hidden" selected>category</option>
                    <option value="---" hidden="hidden">---</option>
                    <option value="Movie">Movie</option>
                    <option value="Series">Series</option>
                    <option value="Game">Game</option>
                </select>
                <label>Name:</label>
                <input type="text" id="name" name="name" value="name"/>
                <label>Image:</label>
                <input type="text" id="image" name="image" placeholder="" value="image"/>
                <label>Rating:</label>
                <input type="number" id="rating" name="rating" value="rating"/>
                <label>Review:</label>
                <textarea id="review" name="review">review</textarea>
                <label>Description:</label>
                <textarea id="description" name="description">description</textarea>
                <input type="submit" id="btn" value="Edit"></input>
            </form>
        </div>
    </section>
</main>
 </>
 );
}