document.getElementById('searchButton').addEventListener('click', buscadorPeliculas)

let api_key= '0aeb966316da0d2f837d6952207e3d74'
let urlBase= 'https://api.themoviedb.org/3/search/movie'
let urlImg= 'https://image.tmdb.org/t/p/w500'



function buscadorPeliculas(){
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies) {
    let resultContainer = document.getElementById('results')
    resultContainer.innerHTML = ''

    if(movies.length === 0) {
        resultContainer.innerHTML = '<p>No se encontraron resultados</p>';
        return;
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fué: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
         

        
    });

}