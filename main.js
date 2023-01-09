


const api_key = 'api_key=3074a9ae5cf8a63c318a1ecdc0232af8';
const base_url = "https://api.themoviedb.org/3";
const pop_mov_url = base_url + "/discover/movie?sort_by=popularity.desc&"+api_key;
const img_url = "https://image.tmdb.org/t/p/w500";
const search_url = base_url + "/search/movie?" +api_key;
get_movies(pop_mov_url);

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

function get_movies(url){
    fetch(url).then(res=>res.json()).then(data => {
        show_movies(data.results);
    })
}

function get_color(vote){
    if (vote>=8.0){
        return 'green'
    }
    else if(vote>=5.0){
        return 'orange'
    }
    else{
        return 'red'
    }
}

function show_movies(data){
    main.innerHTML = ''
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const ME = document.createElement('div');
        ME.classList.add('movie');
        ME.innerHTML = `
        <img src = ${img_url + poster_path}
            alt = "${title}">
            <div class = "movie_info">
                <h3>${title}</h3>
                <span class = "${get_color(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(ME);
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm){
        get_movies(search_url+'&query='+searchTerm);
    }
})