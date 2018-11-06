var movies;

var container = document.getElementById("movies-container");

function renderMovies(movieArray) {
    var finalHTML =  movieArray.map(function(currentMovie) {
        
         return `
             <div class="movie card m-3" style="width: 20rem;">
             <img class="card-img-top" src="${currentMovie.Poster}" alt="#">
             <div class="card-body">
                     <h5 class="card-title">${currentMovie.Title}</h5>
                     <p class="date card-text">${currentMovie.Year}</p>
                 <button class="add-button btn btn-warning" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add Movie</button>
             </div>
         </div>
             `;
     });
     container.innerHTML = finalHTML.join("");
 };


//document.addEventListener("DOMContentLoaded", function() {

//});


    document.getElementById("search-form").addEventListener("submit", function(e){
        e.preventDefault();

        var searchString = document.querySelector(".search-bar").value;

        var urlEncodedSearchString = encodeURIComponent(searchString);

        axios.get(`http://www.omdbapi.com/?apikey=3430a78&s=${urlEncodedSearchString}`).then(function(response) {
            renderMovies(response.data.Search);

            movies = response.data.Search;
        });

    });


function saveToWatchlist(imdbID) {
    
    var movie = movies.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    });

    var watchlistJSON = localStorage.getItem("watchlist");
   var watchlist = JSON.parse(watchlistJSON);
   if(!watchlist) {
        watchlist = [];
     }
     watchlist.push(movie);

     watchlistJSON = JSON.stringify(watchlist);

    localStorage.setItem("watchlist", watchlistJSON);
};


