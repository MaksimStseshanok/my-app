class ApiServise {
  _apiBase = 'https://api.themoviedb.org/3/movie/';
  _apiKey = '?api_key=cc0dfb7d0c7723a857d262c65d651635';

  async getInfo(requestType) {
    const res = await fetch(`${this._apiBase}${requestType}${this._apiKey}`);
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}, received ${res.status}`
      );
    }
    return res.json();
  }
}

const apiService = new ApiServise();

export default apiService;
