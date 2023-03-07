import "./movieCard.style.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { moiveContex } from "./contextapi";
export const MovieCard = ({ movieInfo }) => {
  const { setWishList, wishList } = useContext(moiveContex);
  let tempData = [...wishList];
  const movie = movieInfo;

  const setWishListHandler = (movie) => {
    for (let key in tempData) {
      if (tempData[key]["id"] === movie.id) {
        return;
      }
    }
    tempData.push(movie);
    setWishList(tempData);
  };
  return (
    <div className="movieCard">
      <img
        className="movieCard-img"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movieCard-info">
        <h3 className="movieCard-title">{movie.title || movie.name}</h3>
        <p className="movieCard-overview">{movie.overview.slice(0, 50)}</p>
        <div className="movieCard-footer">
          <span className="movieCard-rating">{movie.vote_average}</span>
          <Link to={`/singleMovie/${movie.id}`}>go to movie</Link>
          <button
            className="movieCard-button"
            onClick={() => {
              setWishListHandler(movie);
            }}
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};
