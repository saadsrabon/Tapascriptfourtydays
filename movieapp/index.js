let movieList =[];

const getMovies = async()=>{
const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key':
        '902bde9d4dmshf81e7d15c25f067p17930fjsnc23b722c2b91',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
    console.log("in")
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
   return movieList= result?.results
    // console.log(movieList)
} catch (error) {
	console.error(error);
}


}


getMovies()

//load movies
//show on ui
const movieCardTemplate = document.querySelector('.movie-card')
const movieGrid = document.getElementById('moviesGrid');
//and for each movie we will add those on fragment and finaly will add those on the main don
const showOnUi =()=>{
    // create fragment 
    const fragment = document.createDocumentFragment()
    if(movieList.length){
        movieList.forEach(movie=>{
        // copy the template content
        const clone =movieCardTemplate.content.cloneNode(true);
        clone.querySelector('.movie-poster img').src = movie?.primaryImage?.url

        fragment.appendChild(clone);

    })
    movieGrid.appendChild(fragment)
   }
}

const loadMovies= async ()=>{
   const result = await getMovies();
   if(result){
    showOnUi()
   }
    
}
