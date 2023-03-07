import { MovieCard } from "./movieCard";
import { useContext, useState } from "react";
import "./movieList.css";
import { moiveContex } from "./contextapi";
export const MovieList = ({ value }) => {
  let { data } = useContext(moiveContex);
  const [currentPage, setCurrPage] = useState(1);
  console.log(data, "in movielist");
  const moviesPerPage = 6;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = data.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(data.length / moviesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const setPageHandler = (page) => {
    setCurrPage(page);
  };

  // useEffect(()=>{
  //   setPageHandler()
  // },[currentPage])
  return (
    <div className="movieRow">
      {currentMovies &&
        currentMovies
          .filter((movie) => {
            const val = movie.title || movie.name;
            return val.toLowerCase().includes(value.toLowerCase());
          })
          .map((movie, key) => (
            <div className="movieRowItem" key={movie.id}>
              <MovieCard movieInfo={movie} />
            </div>
          ))}
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`paginationButton ${
              currentPage === pageNumber ? "active" : ""
            }`}
            onClick={() => setPageHandler(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};
