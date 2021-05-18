export default class ApiServise {
  _apiBase =
    'https://api.themoviedb.org/3/movie/popular?api_key=cc0dfb7d0c7723a857d262c65d651635&language=en-US&page=';

  async getMovies(page) {
    const res = await fetch(`${this._apiBase}${page}`);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}, received ${res.status}`
      );
    }
    return await res.json();
  }
}
