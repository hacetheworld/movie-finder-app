import React, { useState, useEffect, useContext } from "react";
import "./SingleMoviePage.css";
import { useParams } from "react-router-dom";

import { moiveContex } from "./contextapi";
export const SingleMoviePage = () => {
  const { data } = useContext(moiveContex);
  const Moviedata = data;
  const movieId = useParams()["id"];
  const resData = Moviedata.filter((movie) => movie.id === parseInt(movieId));
  const movie = resData[0];
  if (movie === undefined || movie.length === 0) {
    return <div>No Movie </div>;
  }
  return (
    <div className="movie-page">
      <div className="movie-header">
        <div className="movie-background">
          <img
            src={`https://image.tmdb.org/t/p/w1280${
              movie.backdrop_path || movie.poster_path
            }`}
            alt={movie.title || movie.name}
          />
        </div>
        <h1 className="movie-title">{movie.title || movie.name}</h1>
        <div className="movie-rating">
          <span className="rating-label">Rating:</span>
          <span className="rating-value">{movie.vote_average}</span>
        </div>
      </div>
      <div className="movie-description">
        <p>{movie.overview}</p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genre && movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Runtime:</strong> {movie.runtime} minutes
        </p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Production Companies:</strong>{" "}
          {movie.production_companies &&
            movie.production_companies
              .map((company) => company.name)
              .join(", ")}
        </p>
        <button className="movie-button">Watch Now</button>
      </div>
    </div>
  );
};
