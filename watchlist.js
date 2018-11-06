var movieContainer = document.getElementById("movie-container");


function renderWatchlist(movies) {
    var watchlistHTML = movies.map(function(currentMovie) {
        return `
        <div class="movie card m-3" style="width: 20rem;">
        <img class="card-img-top" src="${currentMovie.Poster}" alt="#">
        <div class="card-body">
                <h5 class="card-title">${currentMovie.Title}</h5>
                <p class="date card-text">${currentMovie.Year}</p>
            <button class="add-button btn btn-danger" onclick="removeFromWatchlist('${currentMovie.imdbID}')">Remove Movie</button>
        </div>
    </div>
        `
    });
    movieContainer.innerHTML = watchlistHTML.join("");
};




document.addEventListener("DOMContentLoaded", function() {

    var watchlistMoviesJSON = localStorage.getItem("watchlist");

    var watchlistMovies = JSON.parse(watchlistMoviesJSON);

    renderWatchlist(watchlistMovies);


});


function removeFromWatchlist(imdbID) {
    var watchlistMoviesJSON2 = localStorage.getItem("watchlist");

    var watchlistMovies2 = JSON.parse(watchlistMoviesJSON2);

    var movieToRemove = watchlistMovies2.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });

    var newWatchList = watchlistMovies2.filter(function(currentMovie) {
        return currentMovie != movieToRemove;
    });

    var newMovieWatchList = JSON.stringify(newWatchList);

    localStorage.setItem("watchlist", newMovieWatchList);

    var newListOfMoviesJSON = localStorage.getItem("watchlist");

    var newListOfMovies = JSON.parse(newListOfMoviesJSON);

    renderWatchlist(newListOfMovies);

};

