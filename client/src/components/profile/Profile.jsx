export default function Profile() {
 return (
 <>
 <section className="profile-page">
    <div className="profile-card">
        <div className="top-section">
            <i className="message fas fa-envelope"></i>
            <i className="notif fas fa-bell"></i>
            <div className="pic">
                <img src="https://i.ebayimg.com/images/g/yOwAAOSwImRYDWHF/s-l1200.webp"/>
            </div>
            <div className="email">"email"</div>
        </div>

        <div className="bottom-section">
            <div className="social-media">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fas fa-link"></i>
            </div>
            <h2>My Star wars collection</h2>
        </div>
    </div>
    <div className="added-movies">
         {/* show each movie/game */}
     {/* show if no movies */}
        <h2 className="no-record-in-profile">You have not added any star wars movies/games to your collection yet...</h2>
    </div>
    
</section>
 </>
 );
}