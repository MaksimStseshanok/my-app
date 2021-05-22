class ApiServise {
  _apiBase = 'https://api.themoviedb.org/3/movie/';
  _apiKey = '?api_key=cc0dfb7d0c7723a857d262c65d651635';
  _apiSearch = `https://api.themoviedb.org/3/search/movie${this._apiKey}&query=`;

  async getInfo(requestType) {
    const res = await fetch(`${this._apiBase}${requestType}${this._apiKey}`);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}, received ${res.status}`
      );
    }
    return res.json();
  }

  async getMovieByTitle(movieTitle) {
    const movie = await fetch(`${this._apiSearch}${movieTitle}`);
    if (!movie.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}, received ${movie.status}`
      );
    }
    return movie.json();
  }
}

const apiService = new ApiServise();

export default apiService;
