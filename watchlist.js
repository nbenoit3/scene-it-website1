
function renderWatchlist(movies) {
    var watchlistHTML = movies.map(function(currentMovie) {
        var movieHTML = `
        <div class="movie card m-3" style="width: 20rem;">
        <img class="card-img-top" src="${currentMovie.Poster}" alt="#">
        <div class="card-body">
                <h5 class="card-title">${currentMovie.Title}</h5>
                <p class="date card-text">${currentMovie.Year}</p>
            <button class="add-button btn btn-danger" onclick="removeFromWatchlist('${currentMovie.imdbID}')">Remove Movie</button>
        </div>
    </div>
        `
        return movieHTML;
    });
    return watchlistHTML.join("");
};




document.addEventListener("DOMContentLoaded", function() {

    var movieContainer = document.getElementById("movie-container");

    var watchlistMoviesJSON = localStorage.getItem("watchlist");

    var watchlistMovies = JSON.parse(watchlistMoviesJSON);

    movieContainer.innerHTML = renderWatchlist(watchlistMovies);


});


function removeFromWatchlist() {

};