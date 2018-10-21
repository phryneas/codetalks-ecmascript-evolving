async function getMovies() {
    const response = await fetch(
        'http://example.com/movies.json'
    );
    const data = await response.json();
    return data;
  }