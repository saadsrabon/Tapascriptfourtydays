const getMovies = async()=>{
const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '902bde9d4dmshf81e7d15c25f067p17930fjsnc23b722c2b91',
		'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


}