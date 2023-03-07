import { SearchBar } from "./serachBar";
import { MovieList } from "./movieList";
import { useState, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { SingleMoviePage } from "./singleMovie";
import { Routes, Route } from "react-router-dom";
import { WishListPage } from "./wishList";
export const Main = () => {
  const [value, setValue] = useState("");
  return (
    <Container>
      <Row style={{ marginBottom: "10px", marginTop: "10px" }}>
        <SearchBar setValue={setValue} />
      </Row>
      <Row>
        <Routes>
          <Route path="/" element={<MovieList value={value} />} />
          <Route path="singleMovie/:id" element={<SingleMoviePage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          {/* <MovieList movieData={data} value={value} /> */}
        </Routes>
      </Row>
    </Container>
  );
};
