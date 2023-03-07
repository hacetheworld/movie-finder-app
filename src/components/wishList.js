import { useContext } from "react";

import { moiveContex } from "./contextapi";
import { MovieCard } from "./movieCard";

export const WishListPage = () => {
  const { wishList } = useContext(moiveContex);
  console.log(wishList, "wishList");

  return (
    <div className="movieRow">
      {wishList &&
        wishList.map((movie, key) => (
          <div className="movieRowItem" key={movie.id}>
            <MovieCard movieInfo={movie} />
          </div>
        ))}
    </div>
  );
};
