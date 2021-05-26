import noPoster from './no-poster.jpg';

function Poster({ poster, title }) {
  const url = `https://image.tmdb.org/t/p/original`;
  return <img src={poster ? `${url}${poster}` : noPoster} alt={title} />;
}

export default Poster;
