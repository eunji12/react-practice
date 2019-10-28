import React from 'react';
// import PropTyps from 'prop-types';
import '../css/Movie.css';

// function Movie( {title, summary, year, poster, genres}) {
const Movie = (props) => {
  const {
    title,
    summary,
    year,
    poster,
    genres,
  } = props;

  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <div>
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {
              genres.map((genre, i) => (
                <li
                  className="genres__genre"
                  key={i}
                >
                  {genre}
                </li>
              ))
            }
          </ul>
          <p className="movie__summary">
            {(summary.slice(0, 180))}
            ...
          </p>
        </div>
      </div>
    </div>
  );
};
// Movie.PropTyps = {
//   id: PropTyps.number.isRequired,
//   title: PropTyps.string.isRequired,
//   summary: PropTyps.string.isRequired,
//   year: PropTyps.number.isRequired,
//   poster: PropTyps.string.isRequired,
//   genres: PropTyps.arrayOf(PropTyps.string).isRequired,
// };

export default Movie;
