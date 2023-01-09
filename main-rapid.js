const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0cb83407a0mshf5928291176f790p1a0e28jsnc3d2796bae7b',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%throne%20', options)
	.then(response => response.json())
	.then(data => {
    
        const list = data.d;
        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li> <img src = "${poster}"> <h2>${name}</h2></li>`;
            document.querySelector('.movies').innerHTML += movie;
        });
    
    })
	.catch(err => console.error(err));